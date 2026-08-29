function maxVowels(s, k) {
    const vowels = new Set(['a','e','i','o','u']);
    let count = 0;
    let maxCount = 0;   // ✅ Bug 1 fixed
    let i = 0;
    let j = 0;

    while (j < s.length) {
        // add new character entering window
        if (vowels.has(s[j])) count++;

        if (j - i + 1 < k) {
            // window not full yet → just expand
            j++;
        } else if (j - i + 1 === k) {
            // window full → record max
            maxCount = Math.max(maxCount, count);

            // slide window → remove left, move both
            if (vowels.has(s[i])) count--;
            i++;
            j++;
        }
    }

    return maxCount;  // ✅ Bug 2 fixed
}

console.log(maxVowels("abciiidef", 3)); // 3