// Never reload the page, Hot Module Replacement don't need to
Reload._onMigrate(function () {
  return [false];
});

Meteor.startup(function() {
  // Use the script from the webpack dev server
  var target = Meteor.isCordova ? 'cordova' : 'web';

  var devServerOrigin = window.location.origin.split(/:[0-9]+$/)[0] + ':3500';

  const scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';
  scriptEl.src = `${devServerOrigin}/assets/common.${target}.js`;
  document.head.appendChild(scriptEl);

  const scriptEl2 = document.createElement('script');
  scriptEl2.type = 'text/javascript';
  scriptEl2.src = `${devServerOrigin}/assets/${target}.js`;
  document.head.appendChild(scriptEl2);
});

if (Meteor.isCordova) {
  // Allow access to the dev server
  App.accessRule('*');
}
