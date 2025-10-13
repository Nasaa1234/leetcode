
var groupAnagrams = function(strs) {
    const result = new Map();

    
    for ( let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sortedWord = word.split('').sort().join('')

        if ( result.has(sortedWord) ) {
            result.get(sortedWord).push(word);
        }else {
            result.set(sortedWord, [word]);
        }
    }

    // for ( let i = 0; i < strs.length; i++) {
    //         sorted.push(strs[i].split('').sort().join(''));
    // }

    // for ( let i = 0; i < sorted.length; i++ ) {
    //      result.set(sorted[i], result.has(sorted[i]) ? result.get(sorted[i]) + 1 : 1);
    // }
    console.log(result);
    return Array.from(result.values())
};
