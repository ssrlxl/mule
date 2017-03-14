//webpack.config.js 存放webpack相关的配置
// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod')({env: 'production'});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev')({env: 'development'});
}
