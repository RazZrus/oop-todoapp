class TaskRepo {
  constructor() {
    this._tasks = [];
    this._nextId = 1;
  }

  getAll() {
    return [...this._tasks];
  }

  getById(id) {
    return this._tasks.find(task => task.id === id);
  }

  getByProjectId(projectId) {
    return this._tasks.filter(task => task.projectId === projectId);
  }

  create(task) {
    task.id = this._nextId++;
    this._tasks.push(task);
    return task;
  }

  update(id, updates) {
    const task = this.getById(id);
    if (!task) return null;
    Object.assign(task, updates);
    return task;
  }

  delete(id) {
    const idx = this._tasks.findIndex(task => task.id === id);
    if (idx === -1) return false;
    this._tasks.splice(idx, 1);
    return true;
  }
}

module.exports = TaskRepo;
