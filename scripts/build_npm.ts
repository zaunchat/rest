import { build, emptyDir } from 'https://deno.land/x/dnt@0.23.0/mod.ts';

if (!Deno.args[0]) {
  console.log('Missing version');
  Deno.exit();
}

await emptyDir('./npm');

await build({
  packageManager: 'pnpm',
  scriptModule: false,
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    custom: [{
      package: {
        name: 'node-fetch',
        version: '^3.2.4',
      },
      typesPackage: {
        name: '@types/node',
        version: '^16.x',
      },
      globalNames: [{
        name: 'fetch',
        exportName: 'default',
      }, {
        name: 'Request',
        typeOnly: true,
      }, {
        name: 'Response',
      }],
    }],
  },
  package: {
    name: '@itchatapp/rest',
    version: Deno.args[0].replace(/[A-Z]+/gi, ''),
    description: 'REST module for itchat.js',
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/itchatapp/rest.git',
    },
    bugs: {
      url: 'https://github.com/itchatapp/rest/issues',
    },
    engines: {
      node: '>=16.6.0',
    },
    files: [
      'esm/*',
      'types/*',
    ],
  },
});

Deno.copyFileSync('LICENSE', 'npm/LICENSE');
Deno.copyFileSync('README.md', 'npm/README.md');
