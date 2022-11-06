export default class Character {
	constructor(name, type) {
		const characterTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (name.length < 2 || name.length > 10) {
			throw new Error('NAME error');
		} else {
			this.name = name;
		}
		if (!characterTypes.includes(type)) {
			throw new Error('TYPE error');
		} else {
			this.type = type;
		}
		this.health = 100;
		this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
	}
}
