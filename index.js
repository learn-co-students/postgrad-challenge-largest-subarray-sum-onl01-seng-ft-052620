// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
// largest subarray would be [5, 3, -7, 4, 5, 6] 
// but if starting with [2, -1, 5, 3, -7, 4, 5, 6, -100, 4] the largest subarray would be [2, -1, 5, 3, -7, 4, 5, 6]
// because when the value goes down by an equal or more amount, you should reset the starting point
// what about case like [3, -1, -1, 20] in this case you need to hold on to the sum until ... no it doesn't matter, the largest subarray would be 20

function largestSubarraySum(array){
  // brute force solution:
  // let largest = 0
  // for (let i = 0; i < array.length; i++){
  //   for (let j = i+1; j <= array.length; j++){
  //     const tempAry = array.slice(i,j)
  //     const tempSum = tempAry.reduce((sum, currentVal) => sum + currentVal)
  //     if (tempSum > largest){
  //       largest = tempSum
  //     }
  //   }
  // }
  // return largest
  let start = 0
  let end = array.length
  let leftSum = 0
  let rightSum = 0
  for (let i = 0; i < array.length; i++){
    leftSum += array[i]
    if (i < end){
      if (leftSum <= 0){
        start = i + 1
        leftSum = 0
      }
      rightSum += array[array.length - i - 1]
      if (rightSum <= 0){
        end = array.length - i - 1
        rightSum = 0
      }
    }
  }
  return array.slice(start,end).reduce((sum, currentVal) => sum + currentVal, 0)
}


// brute force: find every possible sub array, track largest sum, change stored subarray if larger and stored sub array
// other ideas:
// track negative numbers, keep pushing to subarray if internal negative is less than external negative, stop if greater, neeed to also keep track of cuttoff point to go back to.