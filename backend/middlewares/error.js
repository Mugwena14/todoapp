
const errorHandler = (err, req, res, next) => {
    const code = err.status || res.statusCode || 500;
    
    res.status(code);
    
    res.json({
        message: err.message
    })
};

export default errorHandler;

