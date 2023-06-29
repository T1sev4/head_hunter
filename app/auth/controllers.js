const sendMail = require('../utils/sendMail');
const AuthCode = require('./AuthCode');
const User = require('./User');
const Role = require('./Role');
const jwt = require('jsonwebtoken');
const {jwtOptions} = require('./passport');

const sendVerificationEmail = (req, res) => {
  const code = 'HH' + Date.now();
  AuthCode.create({
    email: req.body.email,
    code: code,
    valid_till: Date.now() + 120000
  })




  sendMail(req.body.email, "Код авторизации hh.kz", code)

  res.status(200).end();
}

const verifyCode = async (req, res) => {

  const authCode = await AuthCode.findOne({
    where: {email: req.body.email}, 
    order: [['valid_till', 'DESC']]
  });

  if(!authCode){
    res.status(401).send({message: "email not found"});
  }
  else if(new Date(authCode.valid_till).getTime() < Date.now()){
    res.status(401).send({message: "code истек"});
  }else if(authCode.code !== req.body.code){
    res.status(401).send({message: "code is invalid"});
  }
  else{
    
    let user = await User.findOne({where: {email: req.body.email}}) 
    const role = await Role.findOne({where: {name: 'employee'}});
  
    if(!user){
      user = await User.create({
        RoleId: role.id,
        email: req.body.email,
      })
    }
    
    const token = jwt.sign({
        id: user.id, 
        email: user.email,
        full_name: user.full_name,
        phone: user.phone,
        role: {
          id: role.id,
          name: role.name
        }

      }, 
        jwtOptions.secretOrKey, 
      {
        expiresIn: 24 * 60 * 60 * 365
      }
    );
    res.status(200).send({token});
  }  
}

module.exports = {  
  sendVerificationEmail,
  verifyCode
};