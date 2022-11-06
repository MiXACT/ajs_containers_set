export default class Team {
	constructor(members) {
		this.members = new Set(members);
	}

	add(newMember) {
		if (this.members.has(newMember)) throw new Error('Hero exists');
		else this.members.add(newMember);
	}

	addAll(...group) {
		for (const hero of [...group]) {
			this.members.add(hero);
		}
	}

	toArray() {
		return Array.from(this.members);
	}
}
