export const generateRandomPosition = () => {
  let translateY = Math.floor(Math.random() * 5);
  let translateX = Math.floor(Math.random() * 50);
  let top = Math.floor(Math.random() * 5);
  let left = Math.floor(Math.random() * 50);

  return { translateY: `${translateY}vh`, translateX: `${translateX}vw`, top: `${top}`, left: `${left}` };
};
