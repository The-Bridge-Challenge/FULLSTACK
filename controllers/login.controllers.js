const usersModels = require('../models/users.model');
const { createToken } = require('../config/jsonWebToken');
var bcrypt = require('bcryptjs');

const login = async (req, res) => {
    try {
        const { email, password } = req.body; // tiene que llegar un hash de password
        const user = await usersModels.findOne({ where: { email: email} });
        if(user){
            bcrypt.compare(password, user.password).then((res)=>{
                console.log("comparacion de bycrypt",res);
                if (res) {
                    const token = createToken({ email: user.email, role: user.role });
                    res.status(200)
                        .cookie('access_token', token)
                        .json({ role: user.role, cookie: token })
                        .send()
                } else {
                    res.status(400).json({ msg: "wrong credentials invalid pasword" });
                }
            });
        }else{
            res.status(400).json({ msg: "wrong credentials user not found" });
        }
        
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const logout = async (req, res) => {
    try {
        res.status(200)
            .cookie('access_token', "")
            .send();
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await usersModels.getAllUsers();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}




const users = {
    login,
    logout,
    getAllUsers
};


module.exports = users;