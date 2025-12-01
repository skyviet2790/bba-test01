let playerName = "Mario";
let currentLives = 3;
const levelCoins = [
    { level: 1, coins: 25 },
    { level: 2, coins: 30 },
    { level: 3, coins: 45 },
]


// Solution 1
let sum = levelCoins.reduce((total, coins) => total + coins.coins, 0)
let avg = sum / levelCoins.length

console.log(avg);

// Solution 2
let avgCoins = 0;
for (let i = 0; i < levelCoins.length; i++) {
    avgCoins += levelCoins[i].coins / levelCoins.length;
}

console.log(avgCoins);
let divtoOdd = 0;
for (let i = 0; i < levelCoins.length; i++) {
    if (levelCoins[i].coins % 3 === 1) {
        divtoOdd = levelCoins[i].coins / 3
        let oddNum = divtoOdd.toString();
        console.log(oddNum.substring(oddNum.indexOf(".")));

    }

}