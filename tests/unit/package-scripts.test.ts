import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';

interface PackageJson {
  main?: string;
  scripts?: Record<string, string>;
  build?: {
    appId?: string;
    productName?: string;
    publish?: Array<Record<string, string>>;
  };
}

async function readPackageJson(): Promise<PackageJson> {
  return JSON.parse(await readFile(new URL('../../package.json', import.meta.url), 'utf8')) as PackageJson;
}

describe('package Electron wiring', () => {
  it('points Electron at the compiled main-process entrypoint', async () => {
    const packageJson = await readPackageJson();

    expect(packageJson.main).toBe('dist/electron/main.js');
    expect(packageJson.scripts?.start).toBe('electron .');
    expect(packageJson.scripts?.dev).toBe('npm run build && electron .');
  });

  it('builds release artifacts through electron-builder', async () => {
    const packageJson = await readPackageJson();

    expect(packageJson.scripts?.dist).toContain('electron-builder');
    expect(packageJson.build?.appId).toBe('dev.howardsun.lanshare');
    expect(packageJson.build?.productName).toBe('LANShare');
    expect(packageJson.build?.publish?.[0]).toMatchObject({
      provider: 'github',
      owner: 'howardsun-dev',
      repo: 'LANShare-electron',
    });
  });
});
