'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.middleware = [ 'env' ];

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1511506174469_1998';

  // add your config here
  // config.middleware = [];

  // 打开下面一句就不会出错
  // config.env={};

  return config;
};
