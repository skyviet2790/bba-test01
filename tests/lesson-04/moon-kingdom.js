// Exercise 1

const characters = [
    { name: "Viet", level: 1, health: 200 },
    { name: "Phong", level: 2, health: 200 },
    { name: "Nam", level: 5, health: 1000 },
    { name: "Hoai", level: 8, health: 500 },
]
const newCharacters = characters.map(character => ({
    name: character.name.toUpperCase(),
    level: character.level * 2,
    health: character.health * 3,
}));
let possibleWinners = newCharacters.filter(characters => characters.health > 1000);
console.log(possibleWinners);

// Exercise 2

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 950 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 1500 },
    { name: "Viet", score: 500 }
]
const medals = ["🥇 Gold", "🥈 Silver", "🥉 Bronze"];
players.sort((a, b) => b.score - a.score);
players.forEach((player, index) => {
    if (index < medals.length) {
        player.medal = medals[index];
    }
});
console.log(players);