// Never reload the page, Hot Module Replacement don't need to
Reload._onMigrate(function () {
  return [false];
});

Meteor.startup(function() {
  // Use the script from the webpack dev server
  const scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';

  if (Meteor.isCordova) {
    scriptEl.src = 'http://localhost:3500/assets/cordova.js';
  } else {
    scriptEl.src = 'http://localhost:3500/assets/web.js';
  }

  document.head.appendChild(scriptEl);
});
