import Character from '../character';
import Team from '../team';

test('testing Character', () => {
	function heroNameError() {
		const hero = new Character('e', 'name error type');
		return hero;
	}

	function heroTypeError() {
		const hero = new Character('ErrorMan', 'error type');
		return hero;
	}

	expect(heroNameError).toThrow('NAME error');
	expect(heroTypeError).toThrow('TYPE error');
});

test('testing Team', () => {
	// ф-ия создаёт героя с номером в имени, переданным в ф-ию makeHero в качестве аргумента
	function makeHero(num) {
		const character = new Character(`Hero ${num}`, 'Bowerman');
		return character;
	}

	// ф-ия создаёт команду и добавляет в неё одного и того же персонажа дважды
	function heroExistsError() {
		const hero = makeHero(1);
		const team = new Team([hero]);
		return team.add(hero);
	}

	expect(heroExistsError).toThrow('Hero exists');

	// ф-ия создаёт команду и добавляет в неё персонажа
	function heroTeamAddingTest(hero) {
		const team = new Team();
		return team.add(hero);
	}

	// тест успешного добавления персонажа в команду
	const addMemberToTeam = jest.fn(() => {
		const hero = makeHero(1);
		return heroTeamAddingTest(hero);
	});
	addMemberToTeam();
	expect(addMemberToTeam).toHaveBeenCalled();

	function addAllToTeam(...crew) {
		const team = new Team();
		return team.addAll(...crew);
	}

	// тест успешного добавления нескольких персонажей в команду
	const addAllHeroes = jest.fn(() => {
		const hero1 = makeHero(1);
		const hero2 = makeHero(1);
		const hero3 = makeHero(2);
		const hero4 = makeHero(3);
		const hero5 = makeHero(4);
		return addAllToTeam(hero1, hero2, hero3, hero4, hero5);
	});
	addAllHeroes();
	expect(addAllHeroes).toHaveBeenCalled();

	// ф-ия создаёт команду с одним персонажем и возвращает массив данных
	function makeArray() {
		const hero = makeHero(1);
		const team = new Team([hero]);
		return team.toArray();
	}

	// тест успешного получения массива данных команды с персонажами
	const arrayReference = [{
		name: 'Hero 1',
		type: 'Bowerman',
		health: 100,
		level: 1,
		attack: undefined,
		defence: undefined,
	}];
	const expected = makeArray();
	expect(arrayReference).toEqual(expect.arrayContaining(expected));
});
