Package.describe({
    name: 'webpack:reload',
    version: '0.1.5',
    summary: 'disable the browser reload for webpack (DO NOT INCLUDE THIS PACKAGE BY YOURSELF)',
    git: 'https://github.com/thereactivestack/meteor-webpack.git',
    documentation: 'README.md',
    debugOnly: true
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.imply(['reload'], 'client');
    api.use(['reload', 'ecmascript@0.1.5'], 'client');
    api.addFiles('reload.js', 'client');

    api.use('velocity:core', 'client', { weak: true });
});
