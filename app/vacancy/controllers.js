const Experience = require('./models/Experience')

const getExperiences = async (req, res) => {
  const exps = await Experience.findAll() 

  res.status(200).send(exps)
}

module.exports = { 
  getExperiences 
}