function firstNonRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == i && s.indexOf(s[i], i + 1) == -1) {
            return s[i];
        }
    }
    return "_";
}
let testCase1 = firstNonRepeatingCharacter("abacabad") // C
console.log(testCase1)
let testCase2 = firstNonRepeatingCharacter("abacabaabacaba") // _
console.log(testCase2)