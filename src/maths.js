export const getRandomNumber = (maxNumber = 101, minNumber = 0) => {
  const rnd = minNumber + Math.random() * (maxNumber - minNumber);
  return Math.floor(rnd);
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

export const getGCD = (num1, num2) => {
  if (num2 > num1) return getGCD(num2, num1);
  if (num2 > 0) {
    const divisor = num1 % num2;
    return getGCD(num2, divisor);
  }
  return String(num1);
};

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
