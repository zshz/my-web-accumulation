module.exports = {
  apps: [
    {
      name: 'student_middle_prod',
      script: './app.js',
      watch: false,
      cwd: '/var/www/app_student_middle',
      instances: 4,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'prod',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/data/log/h5/info',
      },
    },
  ],
};