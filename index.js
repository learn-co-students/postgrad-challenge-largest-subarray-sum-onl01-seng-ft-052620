const largestSubarraySum = array => {
    let latestLargestSum = 0
    let start = 0;
    let end = 0;

    for(let i = 0; i <  array.length; i ++){
        let currentLargestSum = 0
        for(let y=i; y < array.length; y++){
            currentLargestSum += array[y]
            if(currentLargestSum > latestLargestSum){
                latestLargestSum = currentLargestSum
                start = i;
                end = y;
            }
        }
    }
    return latestLargestSum
}

