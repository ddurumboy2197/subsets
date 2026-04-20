function subsets(nums) {
    let result = [];
    function backtrack(start, path) {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            backtrack(i + 1, [...path, nums[i]]);
        }
    }
    backtrack(0, []);
    return result;
}

console.log(subsets([1, 2, 3]));
