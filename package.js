Package.describe({
  name: 'pharma:hipaa-logger',
  version: '1.0.0',
  summary: 'Write HIPAA events to a logging collection.  No UI provided.',
  git: 'http://github.com/sekmet/hipaa-logger',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');

  api.addFiles('lib/HipaaLog.js');
  api.addFiles('lib/HipaaLogger.js');

  api.addFiles('server/methods.js', 'server');

  api.export('HipaaLogger');
  api.export('HipaaLog');
});
