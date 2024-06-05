function HandletransformString(str) {
    const length = str.length;
    
    if (length % 15 === 0) {
        str = str.split('').reverse().join('');
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } else {
    
        return str;
    }
}

// Example:
console.log(HandletransformString("Hamburger"));           
console.log(HandletransformString("Pizza"));               
console.log(HandletransformString("Chocolate Chip Cookie")); 
console.log(HandletransformString("Wilbrord  a software Developer"));               
