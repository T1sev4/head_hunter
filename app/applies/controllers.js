const Apply = require('./Apply');
const {NEW} = require('./utils')

const createApply = async (req, res) => {
  try {
    const apply = await Apply.create({
      resumeId: req.body.resumeId,
      vacancyId: req.body.vacancyId,
      status: NEW,
    })
  
    res.status(200).send(apply);
  } catch (error) {
    res.status(500).send(error);
  }
  
}

module.exports = {
  createApply
}