// Import Winston and configure the logger
const winston = require('winston');

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

// Log some messages
logger.error('This is an error message');
logger.warn('This is a warning message');
logger.info('This is an info message');
logger.verbose('This is a verbose message');
logger.debug('This is a debug message');
logger.silly('This is a silly message');
