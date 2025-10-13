var longestCommonPrefix = function(strs) {
    let solution = ""
    if(strs === null || strs.length === 0) return solution

    for (let i = 0; i < strs[0].length; i++){ 
        const letter = strs[0][i]

        for (let j = 1; j < strs.length; j++){ 
            if(strs[j][i] !== letter) return solution
        }
        solution = solution + letter
    }

    return solution
}

