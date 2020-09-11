const getRandomNumber = (minNumber = 0, maxNumber = 100) => {
  const randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
  return Math.floor(randomNumber);
};

export default getRandomNumber;
