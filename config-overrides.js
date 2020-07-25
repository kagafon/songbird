const path = require('path');

module.exports = function override(config, env) {
  if (!config.resolve) {
    config.resolve = {};
  }
  if (!config.resolve.modules) {
    config.resolve.modules = [];
  }

  config.resolve.modules = [
    ...config.resolve.modules,
    path.resolve(__dirname, './src/'),
  ];

  return config;
};
