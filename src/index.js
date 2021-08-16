module.exports = function toReadable(number) {
    const firstNum = ['one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'];
    const secondNum = ['ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'];
    const thirdNum = ['twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'];

    if (number === undefined || number === 0) return 'zero';
    if (number <= 9) return firstNum[number - 1];
    if (number <= 19) return secondNum[number - 10];
    if (number <= 99) return `${thirdNum[Math.floor(number / 10) - 2]}${number % 10 !== 0 ? ' ' + firstNum[number % 10 - 1] : ''}`;
    return `${firstNum[Math.floor(number / 100) - 1]} hundred${number % 100 !== 0 ? ' ' + toReadable(number % 100) : ''}`;
}
