
const errorHandler = (err, req, res, next) => {
    if(err.status){
        return res.status(err.status).json({msg: err.message});
    } res.status(500).json({msg: err.message});
};

export default errorHandler;

// mongodb+srv://mlangaviclyde_db_user:5ijL3JgITkYjKj1K@clydecluster.0sudeft.mongodb.net/?retryWrites=true&w=majority&appName=ClydeCluster