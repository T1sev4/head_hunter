const validateApply = (req, res, next) => {
  let errors = {};

  if(!req.body.resumeId || req.body.resumeId.length === 0){
    errors.resumeId = "Поле resume обязательно"
  }
  if(!req.body.vacancyId || req.body.vacancyId.length === 0){
    errors.vacancyId = "Поле vacancy обязательно"
  }

  if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
  else next()
}

module.exports = {
  validateApply
}