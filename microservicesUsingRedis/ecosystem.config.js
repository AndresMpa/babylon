module.exports = {
  apps : [
    {
      name: 'API',
      watch: false,
      instances: 2,
      autorestart: true,
      max_memory_restart: '2G',
      script: './api/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'MS_MYSQL',
      watch: false,
      instances: 2,
      autorestart: true,
      max_memory_restart: '2G',
      script: './mysql/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'MS_POST',
      watch: false,
      instances: 2,
      autorestart: true,
      max_memory_restart: '2G',
      script: './post/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
};
