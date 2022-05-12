function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  } else {
    let hash = {};
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      hash[letter] ? (hash[letter] += 1) : (hash[letter] = 1);
    }
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      if (!hash[letter]) {
        return false;
      } else {
        hash[letter] -= 1;
      }
    }
    return true;
  }
}
validAnagram(bad, dab);

// Write a function that checks whether two strings are anagrams of each other.
// A string s1 is an anagram of another string s2 if the same characters exist
// in both s1 and s2 in any order. For example: "abcd" and "cdab" are anagrams.
// Also "aabfffr" and "afbfraf" are anagrams.

// "abcd", "cdab"          -> True
// "aabfffr", "afbfraf"    -> True
// "kdkd", "dkdr"          -> False

//first attempt

// function isAnagram (str1, str2){
//     if (str1.length !== str2.length){
//         return false
//     } else{
//         let str1Obj = {}
//         for (let i=0; i<str1.length; i++){
//             if (str1Obj[str1[i]]){
//                 str1Obj[str1[i]]++
//             } else{
//                 str1Obj[str1[i]] = 1
//             }

//         }
//         let str2Obj = {}
//         for (let i=0; i<str2.length; i++){
//             if (str2Obj[str2[i]]){
//                 str2Obj[str2[i]]++
//             } else{
//                 str2Obj[str2[i]] = 1
//             }

//         }
//         if (deepEqual(str1Obj,str2Obj)){
//             return true
//         }
//         else return false
//     }
// }

// function deepEqual(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     const val1 = object1[key];
//     const val2 = object2[key];
//     const areObjects = isObject(val1) && isObject(val2);
//     if (
//       areObjects && !deepEqual(val1, val2) ||
//       !areObjects && val1 !== val2
//     ) {
//       return false;
//     }
//   }
//   return true;
// }
// function isObject(object) {
//   return object != null && typeof object === 'object';
// }
