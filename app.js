const readline = require('readline');
// 猜数字游戏：用户猜一个1到10之间的数字，直到猜对为止
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function askGuess() {
    rl.question('猜一个1到10之间的数字: ', (input) => {
        attempts++;
        const guess = parseInt(input, 10);
        if (guess === answer) {
            console.log(`恭喜你，猜对了！你一共猜了${attempts}次。`);
            rl.close();
        } else if (guess < answer) {
            console.log('太小了，再试一次。');
            askGuess();
        } else if (guess > answer) {
            console.log('太大了，再试一次。');
            askGuess();
        } else {
            console.log('请输入有效的数字。');
            askGuess();
        }
    });
}

askGuess();