const fs = require('fs');
const crypto = require('crypto');

// The target MD5 hash
const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

// Function to hash a password using MD5
function hashPassword(password) {
    return crypto.createHash('md5').update(password).digest('hex');
}

// Function to perform a dictionary attack
function dictionaryAttack(wordlistPath) {
    // Read the wordlist file
    const words = fs.readFileSync(wordlistPath, 'utf-8').split('\n');

    for (let word of words) {
        word = word.trim(); // Remove any trailing spaces
        if (hashPassword(word) === targetHash) {
            console.log(`Bob's password is: ${word}`);
            return;
        }
    }

    console.log("Password not found in the wordlist.");
}

// Path to the downloaded wordlist
const wordlistPath = './500-worst-passwords.txt';

// Execute the dictionary attack
dictionaryAttack(wordlistPath);
