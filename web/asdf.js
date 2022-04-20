const GIVEN_ARRAY = [
  [4, 2, 3],
  [4, [3, 4, [5, 3]], 5],
  [4, 3, 5],
];
const RESULT_ARRAY = [4, 2, 3, 4, 3, 4, 5, 3, 5, 4, 3, 5];

const GIVEN_ARRAY2 = [[5, [3, [5, [6, [5, 4]]]], 3, [6, 246]]];
const RESULT_ARRAY2 = [5, 3, 5, 6, 5, 4, 3, 6, 246];

//concat 이용
function testCase(x) {
  const resultArray = x.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev.concat(testCase(curr));
  }, []);
  console.log(resultArray);
}

function flatten(given) {
  console.log(given, typeof given);
  if (typeof given !== "object") {
    return given;
  }

  const result = given.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev.concat(flatten(curr));
  }, []);
  return result;
}
