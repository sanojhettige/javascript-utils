// this function compare two any value of two objects
const compareAndSort = (objA, objB, key) => {
  const firstObj = objA[key].toUpperCase();
  const secondObj = objB[key].toUpperCase();

  let comparison = 0;
  if (firstObj > secondObj) {
    comparison = 1;
  } else if (firstObj < secondObj) {
    comparison = -1;
  }
  return comparison;
};
export default compareAndSort;
