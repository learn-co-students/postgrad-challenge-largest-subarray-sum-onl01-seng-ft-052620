let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
    let currentSum = 0
    let maxSum = 0

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i]

        currentSum = Math.max((currentSum + currentNum), 0)

        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
}

largestSubarraySum(array)
