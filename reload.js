// Never reload the page, Hot Module Replacement don't need to
Reload._onMigrate(function () {
  return [false];
});

Meteor.startup(function() {
  // Use the script from the webpack dev server
  var target = Meteor.isCordova ? 'cordova' : 'web';

  const scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';
  scriptEl.src = `http://localhost:3500/assets/common.${target}.js`;
  document.head.appendChild(scriptEl);

  const scriptEl2 = document.createElement('script');
  scriptEl2.type = 'text/javascript';
  scriptEl2.src = `http://localhost:3500/assets/${target}.js`;
  document.head.appendChild(scriptEl2);
});
