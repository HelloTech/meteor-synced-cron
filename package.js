Package.describe({
  summary: "Allows you to define and run scheduled jobs across multiple servers.",
  version: "1.3.2",
  name: "hellotech:synced-cron",
  git: ""
});

Npm.depends({later: "1.1.6"});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.add_files(['synced-cron-server.js'], "server");
  api.export('SyncedCron', 'server');
});

Package.onTest(function (api) {
  api.use(['hellotech:synced-cron', 'tinytest', 'underscore', 'logging']);
  api.add_files('synced-cron-tests.js', ['server']);
});
