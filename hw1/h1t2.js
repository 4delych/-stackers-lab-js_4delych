nums = [19, 5, 42, 2, 77]

function f(nums){
    nums.sort((a,b)=> a-b)
    return nums[0] + nums[1]
}

console.log(f(nums))