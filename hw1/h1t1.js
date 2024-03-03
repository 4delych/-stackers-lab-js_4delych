nums = [4, 6, 9, 1, 3]

function f(nums){
    res = []

    for (let i = 0; i < nums.length; i++){
        res[i] = nums[i] + i + 1;
    }

    for (let i = 0; i < res.length; i++){
        if (res[i] >= 10){
            res[i] = res[i] % 10
        }
    }

    return res
}

console.log(f(nums))