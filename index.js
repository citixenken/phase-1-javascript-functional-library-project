// Array.isArraåy();

function checkInputType(inputData) {
  return Array.isArray(inputData)
    ? inputData.slice()
    : Object.values(inputData);
}

// 1. myEach
// ==========
function myEach(inputData, cb) {
  let newInputData = checkInputType(inputData);

  for (let index = 0; index < newInputData.length; index++) {
    cb(newInputData[index]);
  }
  return inputData;
}

// 2. myMap
// =========

function myMap(inputData, cb) {
  let newInputData = checkInputType(inputData);

  const newInputArray = [];
  for (let index = 0; index < newInputData.length; index++) {
    newInputArray.push(cb(newInputData[index]));
  }
  return newInputArray;
}

// 3. myReduce
// ===========

function myReduce(inputData, cb, startValue) {
  let newInputData = checkInputType(inputData);

  if (!startValue) {
    startValue = newInputData[0];
    newInputData = newInputData.slice(1);
  }

  for (let index = 0; index < newInputData.length; index++) {
    startValue = cb(startValue, newInputData[index], newInputData);
  }
  return startValue;
}

// 4. myFind
// ===========

function myFind(inputData, predicate) {
  let newInputData = checkInputType(inputData);

  for (let index = 0; index < newInputData.length; index++) {
    if (predicate(newInputData[index])) {
      return newInputData[index];
    }
  }
  return undefined;
}

// 5. myFilter
// ===========

function myFilter(inputData, predicate) {
  let newInputData = checkInputType(inputData);

  let newFilterArray = [];

  for (let index = 0; index < newInputData.length; index++) {
    if (predicate(newInputData[index])) {
      newFilterArray.push(newInputData[index]);
    }
  }

  return newFilterArray;
}

// 6. mySize
// ===========

function mySize(inputData) {
  let newInputData = checkInputType(inputData);

  return newInputData.length;
}

// 7. myFirst
// ===========

function myFirst(newArray, stop = false) {
  return stop ? newArray.slice(0, stop) : newArray[0];
}

// 8. myLast
// ===========

const myLast = function (newArray, start = false) {
  return start
    ? newArray.slice(newArray.length - start, newArray.length)
    : newArray[newArray.length - 1];
};

// 9. myKeys
// ===========
function myKeys(inputObj) {
  const objKeys = [];
  for (let key in inputObj) {
    objKeys.push(key);
  }
  return objKeys;
}

// 10. myValues
// ===========

function myValues(inputObj) {
  const objValues = [];
  for (let key in inputObj) {
    objValues.push(inputObj[key]);
  }
  return objValues;
}
