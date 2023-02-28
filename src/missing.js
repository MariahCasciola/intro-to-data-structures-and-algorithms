/**
 The missing number problem
 Implement algorithm 1 here
*/
//n is the number of runners taking part in a race

//write an algo that will return 6 as the missing number
// const runnerNumbers = [8, 3, 4, 1, 2, 9, 10, 5, 7];

// N is an integer 1 to 100,000, all distinct

/*
accepts: A an array of N - 1 numbersdeclare a variable N and set it equal to the length of A + 1
  for i = 1 to N do
    declare variable found and set it to false
    declare variable j and set it to 0
     while found is false AND j is less than the length of A do
      if i is equal to A[j] then
        set found to true
      increment j
    if found is false then
      return i*/
// const arr = [8, 3, 4, 1, 2, 9, 10, 5, 7];

function missing1(A) {
  const N = A.length + 1;
  for (let i = 1; i <= N; i++) {
    let found = false;
    let j = 0;
    while (found === false && j < A.length) {
      console.log(j);
      if (i === A[j]) {
        found = true;
      }
      j++;
    }
    if (found === false) {
      console.log(i);
      return i;
    }
  }
}



// missing1(arr);

/**
The missing number problem
Implement algorithm 2 here
*/

// const arr2 = [8, 3, 4, 1, 2, 9, 10, 5, 7];
function missing2(A) {
  const N = A.length + 1;
  //sum of numbers from 1 to n
  let fullSum = (N*(N+1))

  const sum = 0;
  for (let i = 0; i < A.length; i++) {
    //sum of all numbers in arr
    let sm = A[i]++;
  }
  // return the difference between fullSum and sum
  return fullSum - sum;
}

// sort O(nlogn)

module.exports = { missing1, missing2 };
