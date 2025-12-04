function findPairsDivisibleBy17() {
    const pairs = [];
    for (x = 0; x < 100; x++) {
        for (y = x++; y <= 100; y++) {
            var sum = x + y;
            if (sum % 17 === 0) {
                pairs.push([`${x}`, `${y}`]);
            }
        }
    }
    pairs.forEach((pair) => {
        console.log(pair);
    });
}

findPairsDivisibleBy17();

