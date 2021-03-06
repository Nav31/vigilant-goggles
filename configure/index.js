'use strict';

module.exports = (app) => {
  app.setValue = app.set.bind(app);
  app.getValue = path => app.get(path);
  require('./app-variables')(app);
  app.use(app.getValue('log'));
};
