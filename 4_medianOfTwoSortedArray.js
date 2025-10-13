var findMedianSortedArrays = function (nums1, nums2) {
    let lenghtArr, lenghtArr1
    let nums = nums1.concat(nums2).sort((a, b) => a - b)
    if (nums.length % 2 != 0) {
        lenghtArr = nums[nums.length / 2 - 0.5]
        return lenghtArr
    } else {
        lenghtArr = nums[nums.length / 2 - 1]
        lenghtArr1 = nums[nums.length / 2]
        return (lenghtArr + lenghtArr1) / 2
    }

};
