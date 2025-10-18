/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((a, b) => a - b);
    let lastUsed = -Infinity;
    let count = 0;
    
    for (let num of nums) {
        let assign = Math.max(lastUsed + 1, num - k);
        if (assign <= num + k) {
            lastUsed = assign;
            count++;
        }
    }
    
    return count;
};


