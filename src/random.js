const getRandomNumber = (maxNumber = 100, minNumber = 0) => {
  const rnd = minNumber + Math.random() * (maxNumber + 1 - minNumber);
  return Math.floor(rnd);
};

export default getRandomNumber;
