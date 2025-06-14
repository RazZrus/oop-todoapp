class ProjectRepo {
  constructor() {
    this._data = [];
    this._nextId = 1;
  }

  getAll() {
    return [...this._data];
  }

  getById(id) {
    return this._data.find(project => project.id === id);
  }

  getByUserId(userId) {
    return this._data.filter(project => project.userId === userId);
  }

  create(newProject) {
    newProject.id = this._nextId++;
    this._data.push(newProject);
    return newProject;
  }
}

module.exports = ProjectRepo;
