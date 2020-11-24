const jwt = require('jsonwebtoken');
// const config = require('config');

export const VerifyToken = (token) => {
    //Get Token from header
    // const token = localStorage.getItem("token")

    //Check if tken
    if (!token) {
        console.log("no token")
        return
    }

    //Verify token
    try {
        const decoded = jwt.verify(token, 'JwtSecret');
        console.log("decodeddd", decoded)
        return decoded.user;


    } catch (err) {
        alert('Token is not valid')
    }
}