// takes in an integer array of UNIQUE elements
// a list of unordered elements that are all unique
// return subsets in any order
// the full set is also a subset of itself
// possible subsets is 2 ^ number of elements
// below case is 2^3 so 8 possible subsets
// ex. num = [1, 2, 3]
// returns [[],[1],[2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

function subsets(num){
    const result = []
    const partialSolution = []
    // starting state (0, [], num, result)
    helper(0, partialSolution, num, result)
    return result
}

function helper(i, path, input, output){
    // path is current subset
    // base case
    if (i === input.length){
        // make a copy of path
        // push copy of path to output
        // spread operator or path.slice()
        output.push([...path])
        return
    }

    // recursive call
    // exclusion
        // increment index
    helper(i + 1, path, input, output)
    // inclusion
        // increment index 
        // add element to path
    path.push(input[i])
    helper(i + 1, path, input, output)
    path.pop()
    // put path back to former state to avoid duplicates 
    return
}

// Big O
    // Time O(n^2)
    // Space O(n)

// my old solution
var subsets = function(nums) {
    const res = [[]];
    for (let i = 0; i < nums.length; i++) {
        const size = res.length;
        for (let j = 0; j < size; j++) {
        res.push([...res[j], nums[i]]);
        }
    }
    return res;
    };