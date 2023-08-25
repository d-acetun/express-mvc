class UserModel {
  static async getAll() {
    const users = [
      { name: "user1", age: "30" },
      { name: "user2", age: "40" },
      { name: "user3", age: "50" },
    ];
    return users;
  }

  static async create({ name, age }) {
    const user = { name, age };
    return user;
  }
}

export default UserModel;
