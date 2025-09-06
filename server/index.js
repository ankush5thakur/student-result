const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes.js');
const config = require('./config/config.js');

// ANSI escape codes for colors
const colors = {
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
};

const server = express();

const corsOptions = {
  origin: config.corsOrigin,
  credentials: true,
  optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(express.json());

(async () => {
  console.log(`${colors.yellow}Connecting to database...${colors.reset}`);
  console.log(
    `${colors.yellow}Server may close if db connection fails${colors.reset}`
  );

  try {
    await mongoose.connect(config.mongoUri);
    console.log(
      `${colors.green}Connected to database successfully in ${
        process.env.NODE_ENV || 'local'
      } mode${colors.reset}`
    );
    if (config.debug) {
      console.log(
        `${colors.cyan}Database URI: ${config.mongoUri}${colors.reset}`
      );
      console.log(
        `${colors.cyan}CORS Origin: ${config.corsOrigin}${colors.reset}`
      );
    }
  } catch (error) {
    console.error(
      `${colors.red}Database connection failed:${colors.reset}`,
      error
    );
    process.exit(1);
  }
})();

server.use('/api', studentRoutes);

server.get('/', (req, res) => {
  res.json({
    message: 'Student Result API is running!',
    environment: process.env.NODE_ENV || 'local',
    timestamp: new Date().toISOString(),
    cors: config.corsOrigin,
  });
});

server.listen(config.port, () => {
  console.log(
    `Server is listening on port ${config.port} in ${
      process.env.NODE_ENV || 'local'
    } mode`
  );
  if (config.debug) {
    console.log(`Debug mode: ${config.debug}`);
    console.log(`Log level: ${config.logLevel}`);
  }
});
