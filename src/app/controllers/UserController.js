import User from '../models/User';
import * as Yup from 'yup';
class UserController {
  //findAll Users
  async index(req, res) {
    const user = await User.findAll();
    return res.json(user);
  }
  // Create User
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Invalid DATA' });
    }
    const userExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExist) {
      return res.status(400).json({ message: 'Email already been using' });
    }

    const { id, name, email, password } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      password,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    // const { name, password } = req.body;
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid Data' });
    }

    const userEmail = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!userEmail) {
      return res.status(400).json({ error: 'Email not found' });
    }
    await User.update(req.body, {
      where: {
        id,
        id,
      },
    });
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;

    await User.destroy({
      where: {
        id,
      },
    });

    return res.status(204).send();
  }
}

export default new UserController();
