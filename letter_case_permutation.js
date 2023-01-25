// takes in a string
// transform each character to be upper or lowercase to create another string
// need to check if character is a number or not as we don't want to upper/lowercase a number
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

// Big O
    // Time complexity = number of base cases * TC of array copy + number of intermediate cases