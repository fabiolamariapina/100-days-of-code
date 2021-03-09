const findMajorityElement = (nums) => {
    const numCount = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        numCount[num] = numCount[num] + 1 || 1
    }
}
console.log(firstMajorityElement([3, 2, 3]))