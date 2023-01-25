// takes in a string
// transform each character to be upper or lowercase to create another string
// return a list of all possible strings
// return the output in any order

function letterCasePermutation(s){
    const result = []
    helper(0, '', s, result)
    return result
}

function helper(i, path, input, output){
    // base case
    if (i === input.length){
        // strings are immutable 
        output.push(path)
    }

    // recursive case
    // if character include lower and upper
    if (isNaN(input[i])){
        // add lowercase

        // add uppercase
    }
    // else add digit

    return
}