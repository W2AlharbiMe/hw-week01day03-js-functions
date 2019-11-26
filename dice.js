const generateNumber = function(n = 6) {
  return Math.floor(Math.random() * 6) + 1;
};

const rollDice = function(n) {
  const numberOne = generateNumber();
  const numberTwo = generateNumber();
  const numberThree = n ? generateNumber(n) : null;
  let result = numberOne + numberTwo;
  let message = `Dice rolled are ${numberOne}${
    numberThree ? "," : " and"
  } ${numberTwo}`;

  if (numberThree) {
    result += numberThree;
    message += ` and ${numberThree}. Sum is ${result}`;
  } else {
    message += `. Sum is ${result}`;
  }

  return message;
};

const dice = rollDice(3);
console.log(dice);
