const secrets = require('./secrets.js');

const s3Credential = {
  accessKeyId: secrets.s3.accessKeyId,
  secretAccessKey: secrets.s3.secretAccessKey,
  params: {
    Bucket: 'todo-list-vuejs',
  },
};

const config = {
  s3: {
    prod: {
      credentials: s3Credential,
      dirname: '/development/assets',
      assetsPath: 'dist/assets/*',
    },
  },
};

module.exports = config;
