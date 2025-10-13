var searchInsert = function(nums, target) {
    let pos;
  let count = 0;
    nums.push(target)
    nums.sort((a, b) => a - b )
    nums.map((el, ind) => {
       if (el === target) {
         count++
         count == 1 ? pos = ind : ""
       }
    })
    return pos
};

