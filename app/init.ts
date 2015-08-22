System.config({
  baseURL: '<%= APP_BASE %>',
  paths: {
    'immutable': 'lib/immutable.js?v=<%= VERSION %>',
    '*': '*.js?v=<%= VERSION %>',
    '*.html': '*.html?v=<%= VERSION %>'
  }
});

System.import('app')
  .catch(e => console.error(e, "Error bootstrapping an app"));
