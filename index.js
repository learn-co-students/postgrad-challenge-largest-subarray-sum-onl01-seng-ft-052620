function largestSubarraySum(array) {
    let maxCurrent = array[0];
    let maxGlobal = array[0];
    
    if (array.every(num => num < 0)) {
        maxGlobal = 0
    }

    for(let i = 1; i < array.length; i++) {
        maxCurrent = Math.max(array[i], maxCurrent + array[i]);

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
}