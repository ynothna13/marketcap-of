module.exports = {
  apps: [
    {
      name: "marketcap",
      cwd: "./",
      // script: "App.js",
      script: 'npm',
      args: 'run start',
      exec_mode: "fork",
      // exec_mode: "cluster",
      // instances: 2,
      // max_memory_restart: "700M",
      node_args: "--max_old_space_size=2096",
      env: {
        NODE_ENV: "production",
        TZ: 'utc',
      },
      env_production: {
        NODE_ENV: "production",
        TZ: 'utc',
      },
      // error_file: 'pm2-err.log',
      // out_file: 'pm2-out.log',
    }
  ],
  deploy: {
    // "production" is the environment name
    production: {
    },
  }
}

//this file is for PM2