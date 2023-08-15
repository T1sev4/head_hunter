const Specialization = require('./models/Specialization')
const SpecializationType = require('./models/SpecializationType');

const getSpecializations = async (req, res) => {
  const specializationTypes = await SpecializationType.findAll({
    include: {
      model: Specialization,
      as: "specialization"
    }
  }) 

  res.status(200).send(specializationTypes)
}

module.exports = { 
  getSpecializations 
}