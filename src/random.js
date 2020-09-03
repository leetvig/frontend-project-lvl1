const getRandomNumber = (maxNumber = 100, minNumber = 0) => {
  const randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
  return Math.floor(randomNumber);
};

export default getRandomNumber;
