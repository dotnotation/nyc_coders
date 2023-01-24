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

    }

    // recursive call
    // exclusion
        // increment index
    helper(i + 1, path, input, output)
    // inclusion
        // increment index 
        // add element to array
    path.push(input[i])
    helper(i + 1, path, input, output)
}

// Big O
    // Time O(n^2)
    // Space O(n)