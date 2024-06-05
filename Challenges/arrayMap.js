function hasSubarrayWithSum(arr, target) {
  let prev = 0;
  let currentSum = 0;
  const subArray = [];

  for (let next = 0; next < arr.length; next++) {
    currentSum += arr[next];
    subArray.push(arr[next]);
    while (currentSum > target && prev <= next) {
      subArray.shift();
      currentSum -= arr[prev];
      prev++;
    }

    if (currentSum === target) {
      return {
        message: `Here is our contiguous subarray that summ up ${target}`,
        subArray,
      };
    }
  }
  return {
    message: `We can not find contiguous subarray to make sum of ${target}`,
  };
}

// Example:
const arr1 = [4, 2, 7, 1, 9, 8, 3, 6, 5];
const target1 = 45;
console.log(hasSubarrayWithSum(arr1, target1));
const arr2 = [4, 2, 7, 9, 8, 3, 6, 5];
const target2 = 45;
console.log(hasSubarrayWithSum(arr2, target2));
