const validateResume = (req, res, next) => {
  let errors = {};

  if(!req.body.first_name || req.body.first_name.length === 0){
    errors.first_name = "Поле Имя обязательно"
  }
  if(!req.body.last_name || req.body.last_name.length === 0){
    errors.last_name = "Поле Фамилия обязательно"
  }
  if(!req.body.phone || req.body.phone.length === 0){
    errors.phone = "Поле Телефон обязательно"
  }
  if(!req.body.position || req.body.position.length === 0){
    errors.position = "Поле Желаемая должность обязательно"
  }
  if(!req.body.about || req.body.about.length === 0){
    errors.about = "Поле О себе обязательно"
  }

  if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
  else next()
}

module.exports = {
  validateResume
}