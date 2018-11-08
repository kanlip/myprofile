const Work = require('../models/work');

exports.work_add = async function(req, res) {
  const { work, image, link } = req.body;
  const workType = req.body.workType.toLowerCase();
  const workObject = new Work({ work, workType, image, link });
  try {
    const result = await workObject.save();
    res.status(200).send({ message: 'SAVED' });
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      res.status(409).send(new MyError('Duplicate key', [err.message]));
    }

    res.status(500).send(err);
  }
};

exports.work_list = async function(req, res) {
  const workType = req.params.workType;
  if(workType.toLowerCase() === 'all'){
    let works = await Work.find({});
    return res.status(200).send(works);
  }else{
    let works = await Work.find({ workType: workType });
    return res.status(200).send(works);
  }
};
