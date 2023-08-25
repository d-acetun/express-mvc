import UserModel from "../models/user.js";

class UserController {
  static async getAll(req, res) {
    const users = await UserModel.getAll();
    res.json(users);
  }

  static async create(req, res) {
    // * aqui se deberia de validar el request body antes de llamar al metodo create

    const newUser = await UserModel.create({ name: "user1", age: "30" });

    res.status(201).json(newUser);
  }
}

export default UserController