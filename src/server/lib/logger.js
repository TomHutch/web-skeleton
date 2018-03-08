/* eslint-disable no-param-reassign */

const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;

const logFormat = printf((info) => {
  delete info.stack;
  return JSON.stringify({
    ...info,
    message: info.message.toString(),
  });
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat,
  ),
  transports: [
    new transports.File({ filename: 'err.log', level: 'error' }),
    new transports.File({ filename: 'out.log' }),
  ],
  exitOnError: false,
});

if (process.env.NODE_ENV === 'development') {
  const devFormat = printf((info) => {
    if ('stack' in info) console.error(info.stack);
    return `${info.timestamp} ${info.level} - ${info.message}`;
  });
  logger.add(new transports.Console({ format: devFormat }));
}

if (process.env.NODE_ENV === 'test') {
  logger.transports.forEach((transport) => {
    transport.silent = true;
  });
}

module.exports = logger;
