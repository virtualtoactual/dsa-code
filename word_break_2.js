/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

function helper(str, idx, ans, temp, dict_set) {
    if (idx == str.length) {
        let sentence = "";
        for (let j = 0; j < temp.length; j++) {
            sentence += temp[j];
            if (j != temp.length - 1) {
                sentence += " ";
            }
        }
        ans.push(sentence);
        return;
    }

    let word = "";
    for (let i = idx; i < str.length; i++) {
        word += str[i];
        if (dict_set.has(word)) {
            temp.push(word)
            helper(str, i + 1, ans, temp, dict_set);
            temp.pop();
        }
    }
}

var wordBreak = function (s, wordDict) {
    let temp = [];
    let ans = [];
    let dict_set = new Set();
    for (let word of wordDict) {
        dict_set.add(word);
    }
    helper(s, 0, ans, temp, dict_set);
    return ans;
};

let s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
//wordBreak(s,wordDict);
console.log(wordBreak(s,wordDict));