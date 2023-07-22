export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) throw new Error('Персонаж уже добавлен');
    this.members.add(member);
  }

  addAll(...group) {
    group.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }
}
