const crypto = require('crypto');

// The target MD5 hash
const targetHash = '5531a5834816222280f20d1ef9e95f69';

// Function to hash a PIN using MD5
function hashPIN(pin) {
    return crypto.createHash('md5').update(pin).digest('hex');
}

// Brute force attack to find the PIN
function bruteForcePIN() {
    for (let i = 0; i <= 9999; i++) {
        // Pad the number to ensure it has 4 digits (e.g., 0001, 0123)
        const pin = i.toString().padStart(4, '0');
        
        // Hash the PIN and compare it with the target hash
        if (hashPIN(pin) === targetHash) {
            console.log(`Alice's PIN is: ${pin}`);
            return;
        }
    }
    console.log("PIN not found");
}

// Execute the brute force attack
bruteForcePIN();
