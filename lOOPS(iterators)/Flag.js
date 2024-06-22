
function printLeftAlignedHalfTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        // Add asterisks for the current row
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
    for (let k = 1; k <= height; k++) {
        let row1 = '';
        // Add asterisks for the current row
        for (let l = 0; l < k; l++) {
            row1 += '*';
        }
        console.log(row1);
    }
    for(let z=0; z<5 ; z++){
        console.log("*")
    }
}

// Example usage:
printLeftAlignedHalfTriangle(5);

  