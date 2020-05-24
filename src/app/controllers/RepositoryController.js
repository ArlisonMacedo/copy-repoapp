import Repository from '../models/Repository';
import { Op } from 'sequelize';
import * as Yup from 'yup';

class RepositoryController {
  async index(req, res) {
    // const { tag = '' } = req.query;
    const repository = await Repository.findAll({
      where: {
        tags: [([Op.iLike] = '%api')],
      },
    });

    return res.json({
      repository,
    });
  }

  //Create Repository
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().required(),
      description: Yup.string().required(),
      tags: Yup.array().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Invalid data' });
    }

    const { id, title, link, description, tags } = await Repository.create(
      req.body
    );

    return res.json({
      id,
      title,
      link,
      description,
      tags,
    });
  }
}

export default new RepositoryController();
