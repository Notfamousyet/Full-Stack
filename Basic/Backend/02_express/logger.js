import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
    format.colorize(),
    format.printf(({ level, message, timestamp }) => {
        return `${level}: ${message}`;
    })
);

const logger = createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        // Write all logs with importance level of `error` or higher to `error.log`
        new transports.File({ filename: 'error.log', level: 'error' }),
        // Write all logs to `app.log`
        new transports.File({ filename: 'app.log' }),
        // Send logs to the console as well
        new transports.Console({
            format: consoleLogFormat,
        }),
    ],
});

export default logger;
// (Add your logger creation and transports configuration here)