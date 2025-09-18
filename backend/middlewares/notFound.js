

const notFound = (req, res, next) => {
    const error = new Error(`${req.originalUrl} Not Found`);
    error.status = 404;
    next(error);
};

export default notFound;
