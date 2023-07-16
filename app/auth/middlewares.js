const Role = require('./Role');
// ACL = Access Control Level


const isEmployee = async (req, res, next) => {
  if(req.user){
    const role = await Role.findByPk(req.user.RoleId);
    if(role.name == "employee") next()
    else res.status(403).send({message: 'Access denied'})

  }
  else res.status(403).send({message: 'Unauthorized'})
}
const isManager = async (req, res, next) => {
  if(req.user){
    const role = await Role.findByPk(req.user.RoleId);

    if(role.name == "manager") next()
    else res.status(403).send({message: 'Access denied'})

  }
  else res.status(403).send({message: 'Unauthorized'})
}
module.exports = {
  isEmployee,
  isManager
}