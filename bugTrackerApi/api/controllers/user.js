const responseHandler = require('../handlers/response_handler');
const user_helper = require('../helpers/user_helper');

const registerUser = (req, res) => {
    user_helper.registerUser(req.body).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}

module.exports = {
    registerUser
}
