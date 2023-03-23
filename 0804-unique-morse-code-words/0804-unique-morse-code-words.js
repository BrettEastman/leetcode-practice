/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let transformations = []
    for (word of words) {
        let trans = '';
        for (let i = 0; i < word.length; i++) {
            trans += morse[word.charCodeAt(i) - 97];
        }
        if (transformations.indexOf(trans) === -1) {
            transformations.push(trans);
        }  
    }
    return transformations.length;  
};