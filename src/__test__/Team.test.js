import Team from "../js/Team";

const character1 = {
    name: 'Лучник',
    type: 'Bowman'
};

const character2 = {
    name: 'Мечник',
    type: 'Swordsman' 
};

const character3 = {
    name: 'Демон',
    type: 'Daemon' 
};

test(('check method \"add\"'), () => {
    const team = new Team();
    
    team.add(character1);    
    team.add(character2);

    expect(team.members.size).toBe(2)
})

test(('check method \"add - error\"'), () => {
    const team = new Team();
    let receiver = '';
    try {
        team.add(character1);
        team.add(character1);
        team.add(character2);
    } catch (error) {
        receiver = error.message;
    }

    expect(receiver).toBe('Персонаж уже добавлен');
})

test(('check method \"addAll\"'), () => {
    const team = new Team();

    team.addAll(character1, character2, character2, character3);

    expect(team.members.size).toBe(3);
})

test(('check method \"toArray\"'), () => {
    const team = new Team();
    const receiver = team.toArray();

    expect(receiver).toEqual([]);
})
