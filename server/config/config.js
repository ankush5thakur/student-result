const config = {
  development: {
    mongoUri:
      process.env.MONGODB_URI ||
      'mongodb://localhost:27017/student-results-dev',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    port: process.env.PORT || 8000,
    debug: true,
    logLevel: 'debug',
  },
  production: {
    mongoUri:
      process.env.MONGODB_URI ||
      'mongodb+srv://username:password@cluster.mongodb.net/student-results',
    corsOrigin:
      process.env.CORS_ORIGIN || 'https://your-netlify-site.netlify.app',
    port: process.env.PORT || 10000,
    debug: false,
    logLevel: 'error',
  },
  local: {
    mongoUri:
      process.env.MONGODB_URI ||
      'mongodb+srv://ankushiit21:Hns10l24u4zJh41N@cluster0.kqcbbv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    port: process.env.PORT || 8000,
    debug: true,
    logLevel: 'info',
  },
};

const environment = process.env.NODE_ENV || 'local';

module.exports = config[environment];
