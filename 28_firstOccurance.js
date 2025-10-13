var strStr = function(haystack, needle) {
    let firstFew = "";
    for (let i = 0; i < needle.length-1; i++) {
        firstFew+=haystack[i];
    }
    if (firstFew == needle) {
        return 0;
    }
    for (let i = needle.length-1; i < haystack.length; i++) {
        firstFew+=haystack[i];
        if (firstFew == needle) {
            return i-needle.length+1;
        }
        firstFew = firstFew.substring(1);
    }
    if (firstFew == needle) {
        return haystack.length-needle.length;
    }
    return -1;
};
