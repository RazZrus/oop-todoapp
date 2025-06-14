class UserRepo {
  constructor() {
    this._users = [];
    this._idCounter = 1;
  }

  getAll() {
    return [...this._users];
  }

  getById(id) {
    return this._users.find(user => user.id === id);
  }

  create(user) {
    user.id = this._idCounter++;
    this._users.push(user);
    return user;
  }
}

module.exports = UserRepo;
