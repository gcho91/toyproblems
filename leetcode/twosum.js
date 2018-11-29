// brute force

var twoSum = function(nums, target) {
    for (var i=0; i<nums.length-1; i++) {
  for (var j=i+1; j<nums.length; j++) {
    console.log(nums[i])
    console.log(nums[j])  
    if ( nums[i] + nums[j] == target  ) {
      return [i,j]
    }
  }
    }
  };

//   greedy: https://wsvincent.com/javascript-two-sum-find-all-pairs-match-target-value/