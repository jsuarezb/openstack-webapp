const S3Plugin = require('webpack-s3-plugin');

const config = {
  plugins: [
    new S3Plugin({
      // Only upload css and js
      include: /.*\.(css|js|html)/,

      // s3Options are required
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      s3UploadOptions: {
        Bucket: 'todo-list-vuejs',
      },
    }),
  ],
};
