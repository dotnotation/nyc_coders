// takes in an integer array of UNIQUE elements
// a list of unordered elements that are all unique
// return subsets in any order
// the full set is also a subset of itself
// possible subsets is 2 ^ number of elements
// below case is 2^3 so 8 possible subsets
// ex. num = [1, 2, 3]
// returns [[],[1],[2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

function subsets(num){
    const output = []
    helper()
    return output
}

function helper(){
    
}

// Big O
    // Time O(n^2)
    // Space O(n)