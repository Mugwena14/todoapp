
const errorHandler = (err, req, res, next) => {
    const code = res.statusCode ? res.statusCode : 500;
    
    res.status(code).res.json({
        message: err.message
    })
};

export default errorHandler;

// mongodb+srv://mlangaviclyde_db_user:5ijL3JgITkYjKj1K@clydecluster.0sudeft.mongodb.net/?retryWrites=true&w=majority&appName=ClydeCluster