import Team from './Team';

const team = new Team();

const character1 = {
  name: 'Лучник',
  type: 'Bowman',
};

const character2 = {
  name: 'Мечник',
  type: 'Swordsman',
};

const character3 = {
  name: 'Демон',
  type: 'Daemon',
};

team.add(character1);

team.addAll(character2, character3);

team.toArray();
