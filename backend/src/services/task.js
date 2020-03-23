const TaskDb = require("../models/task");

class Task {
  async getOne(req, res) {
    const _id = req.params.id;

    if (!_id) return res.status(401).send({msg: "id not sended"});

    try {
      const result = await TaskDb.findOne({_id, done: false});

      if (!result) return res.status(404).send({msg: "Task not found"});

      return res.status(200).send({result});
    } catch (error) {
      return res.status(500).send({msg: error});
    }
  }

  async getAll(req, res) {
    try {
      const result = await TaskDb.find();

      if (!result) return res.status(404).send({msg: "no task"});

      return res.status(200).send({result});
    } catch (error) {
      return res.status(500).send({msg: error});
    }
  }

  async update(req, res) {
    const _id = req.params.id;
    const {done} = req.body;

    if (!_id) return res.status(401).send({msg: "id not sended"});
    if (done === undefined)
      return res.status(401).send({msg: "field done not sended"});

    try {
      const result = await TaskDb.findByIdAndUpdate(_id, {done});

      if (!result) return res.status(404).send({msg: "Task not found"});

      return res.status(200).send({result});
    } catch (error) {
      return res.status(500).send({msg: error});
    }
  }

  async delete(req, res) {
    const _id = req.params.id;

    if (!_id) return res.status(401).send({msg: "id not sended"});

    try {
      const result = await TaskDb.findByIdAndDelete(_id);

      if (!result) return res.status(404).send({msg: "Task not found"});

      return res.status(200).send({result});
    } catch (error) {
      return res.status(500).send({msg: error});
    }
  }

  async create(req, res) {
    const {name, done} = req.body;

    if (!name) return res.status(401).send({msg: "field name not sended"});

    if (done === undefined) done = false;

    try {
      const result = await articleDB.create({name, done});

      return res.status(200).send({result});
    } catch (error) {
      return res.status(501).send({msg: error});
    }
  }
}

module.exports = new Task();
