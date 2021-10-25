// Instructions
// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true

const hasMoreVowels =function(word){

let  vowels=["a","o","e","u","i"];
let vowelNumber = 0;
let vowelsNeeded = word.length/2;
let wordSplitMethod =word.toLowerCase().split('');



for(let i=0;i>wordSplitMethod.length; i ++){
  let newWord =wordSplitMethod[i]
    if(vowels.includes(newWord)){
      vowelNumber ++
    }
if (vowelNumber > vowelsNeeded){
    return true

}


} return false
  
}


// solution
// const hasMoreVowels = word => {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let vowelCount = 0
//     let vowelsNeeded = word.length / 2
//     let wordSplit = word.toLowerCase().split('')
  
//     for (let i = 0; i < wordSplit.length; i++) {
//       let letter = wordSplit[i]
  
//       if (vowels.includes(letter)) {
//         vowelCount++
//       }
  
//       if (vowelCount > vowelsNeeded) {
//         return true
//       }
//     }
  
//     return false
//   }
  
  // hasMoreVowels('moose')
  // hasMoreVowels('Aal')
  // hasMoreVowels('yay')
  // hasMoreVowels('mice')