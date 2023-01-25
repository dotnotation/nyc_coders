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
        return
    }

    // recursive case
    // if character include lower and upper
    if (isNaN(input[i])){
        // add lowercase
        // taking lowercase element and adding it to the path
        helper(i + 1, path + input[i].toLowerCase(), input, output)
        // add uppercase
        helper(i + 1, path + input[i].toUpperCase(), input, output)
    } else {
    // else add digit
        helper(i + 1, path + input[i], input, output)
    }

    return
}