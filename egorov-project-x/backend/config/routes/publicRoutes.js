const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /attractions/sync': 'AttractionController.sync',
  'GET /attractions': 'AttractionController.getAll',
};

module.exports = publicRoutes;
