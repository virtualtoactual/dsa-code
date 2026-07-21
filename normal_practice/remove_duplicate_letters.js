function removeDuplicateLetters(s) {
    // Step 1: count remaining occurrences of each letter
    const count = {};
    for (let ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    const stack = [];          // stores our result
    const inStack = new Set(); // tracks what's already in stack

    for (let ch of s) {
        count[ch]--;  // we've seen this character, reduce remaining count

        // skip if already in result
        if (inStack.has(ch)) continue;

        // pop larger letters if they appear later in string
        while (
            stack.length > 0 &&
            ch < stack[stack.length - 1] &&       // current < top
            count[stack[stack.length - 1]] > 0    // top appears later
        ) {
            inStack.delete(stack.pop()); // remove top from stack
        }

        stack.push(ch);
        inStack.add(ch);
    }

    return stack.join('');
}

console.log(removeDuplicateLetters("bcabc"));    // "abc"
console.log(removeDuplicateLetters("cbacdcbc")); // "acdb"