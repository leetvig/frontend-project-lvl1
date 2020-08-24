export const getRandomNumber = () => {
  const maxNumber = 100;
  return Math.floor(Math.random() * maxNumber + 1);
};

export const getRandomSign = () => {
  const sings = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return sings[index];
};

export const getExpression = (num1, num2, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return undefined;
  }

  return String(result);
};
