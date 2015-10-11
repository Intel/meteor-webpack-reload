Package.describe({
    name: 'webpack:reload',
    version: '0.1.0',
    summary: '',
    git: 'https://github.com/thereactivestack/meteor-webpack.git',
    documentation: 'README.md',
    debugOnly: true
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.imply(['reload'], 'client');
    api.use(['reload'], 'client');
    api.addFiles('reload.js', 'client');
});
