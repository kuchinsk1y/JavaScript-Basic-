function memoize(defaultValue) {
  let memoizedData = defaultValue;

  function getMemData() {
    return memoizedData;
  }

  function setMemData(value) {
    memoizedData = value;
  }

  return [getMemData, setMemData];
}

const memData = memoize();
const getMemData = memData[0];
const setMemData = memData[1];

console.log(getMemData()); // поверне undefined
setMemData(3);
console.log(getMemData()); // поверне 3
setMemData('some string');
setMemData({ a: 'b' });
console.log(getMemData()); // поверне { a: 'b' }
