const findSingleNumber = (nums) => {
    let hash = {};

    nums.forEach((num) => {
        // console.log(num)
        if (hash[num]) {
            delete hash[num]
        } else {
            hash[num] = 1
        }
    })
    return Object.keys(hash)[0]
}
console.log(findSingleNumber([2, 2, 1])); //1 

console.log(findSingleNumber([4, 1, 2, 1, 2])); // 4 