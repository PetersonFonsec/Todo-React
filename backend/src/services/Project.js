const ProjectDB = require("../models/Project");

class Project {
  async getOne(req, res) {
    const _id = req.params.id;

    if (!_id) return res.status(401).send({ msg: "id not sended" });

    try {
      const result = await ProjectDB.findOne({ _id, done: false });

      if (!result) return res.status(404).send({ msg: "Project not found" });

      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ msg: error });
    }
  }

  async getAll(req, res) {
    try {
      const result = await ProjectDB.find();

      if (!result) return res.status(404).send({ msg: "no Project" });

      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ msg: error });
    }
  }

  async update(req, res) {
    const { id: _id } = req.params;

    if (!_id) return res.status(401).send({ msg: "id not sended" });

    try {
      const result = await ProjectDB.findByIdAndUpdate(_id, { ...req.body });

      if (!result) return res.status(404).send({ msg: "Project not found" });

      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ msg: error });
    }
  }

  async delete(req, res) {
    const _id = req.params.id;

    if (!_id) return res.status(401).send({ msg: "id not sended" });

    try {
      const result = await ProjectDB.findByIdAndDelete(_id);

      if (!result) return res.status(404).send({ msg: "Project not found" });

      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ msg: error });
    }
  }

  async create(req, res) {
    let { title, done, tasks } = req.body;

    if (!tasks) return res.status(401).send({ msg: "no task" });

    if (!title) return res.status(401).send({ msg: "field title not sended" });

    if (!done) done = false;

    try {
      const result = await ProjectDB.create({ title, done });

      return res.status(200).send({ result });
    } catch (error) {
      return res.status(501).send({ msg: error });
    }
  }
}

module.exports = new Project();
