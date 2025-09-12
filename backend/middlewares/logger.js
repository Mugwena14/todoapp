
const logger = () => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
};

export default logger;