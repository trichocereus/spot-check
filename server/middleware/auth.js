import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        let decodedData;
        decodedData = jwt.verify(token, 'test')
        req.userId = decodedData?.id;
        next();
    } catch {
        console.log(error);
    }
}

export default auth;