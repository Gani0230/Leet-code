// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// using all the original letters exactly once.

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// var isAnagram = function(s, t) {
//     let a = s.split("").sort().join("")
//     let b = t.split("").sort().join("")
//     return a == b
// };

// console.log(isAnagram("anagram","nagaram"))


var isAnagram = function(s, t) {
    let s_string_count = {}
    let t_string_count = {}
    
    if(s.length != t.length){
        return false
    }

    for(let i=0; i<s.length; i++){
        if(s_string_count[s[i]]){
            s_string_count[s[i]] += 1;
        }
        else{
            s_string_count[s[i]] = 1
        }
        if(t_string_count[t[i]]){
            t_string_count[t[i]] += 1;
        }
        else{
            t_string_count[t[i]] = 1
        }
    }
    let isSame = false;
    let keys = Object.keys(s_string_count);
    
    
    for(let i= 0; i<keys.length; i++){
        if(t_string_count[keys[i]]){
            if(s_string_count[s[i]] == t_string_count[s[i]] ){
                isSame = true;
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
    return isSame
};

console.log(isAnagram("ills","dill"))
console.log(isAnagram("car","rat"))
console.log(isAnagram("anagram","nagaram"))
