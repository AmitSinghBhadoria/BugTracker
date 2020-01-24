const responseHandler = require('../handlers/response_handler');
const user_helper = require('../helpers/user_helper');

const registerUser = (req, res) => {
    user_helper.registerUser(req.body).then(result => {
        if(result.rowCount !== 0) {
            res.message = "Registered user Successfully"
            return responseHandler.success(res, result.rows)
        }
    }).catch(err => {
        return responseHandler.error(err, res);
    })
}

const loginUser = (req, res) => {
    user_helper.loginUser(req.body.username).then(result => {
        console.log(result);
        if(result.rowCount !== 0) {
            if(result.rows[0].password === req.body.password){
                res.message = "login successfull"
                return responseHandler.success(res, result.rows)
            } else {
                const err ={
                    message: "password is incorrect"
                }
                return responseHandler.error(err, res);
            }
        } else {
            const err ={
                message: "username is incorrect"
            }
            return responseHandler.error(err, res);
        }
    }).catch(err => {
        return responseHandler.error(err, res);
    })
}

module.exports = {
    registerUser,
    loginUser
}
