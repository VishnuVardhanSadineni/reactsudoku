// axios import removed as it's not being used

class Sudoku {
    // Constructor
    constructor(N, K) {
        this.N = N;
        this.K = K;

        // Compute square root of N
        const SRNd = Math.sqrt(N);
        this.SRN = Math.floor(SRNd);

        // Initialize all entries as false to indicate
        // that there are no edges initially
        this.mat = Array.from({
            length: N
        }, () => Array.from({
            length: N
        }, () => 0));
    }

    // Sudoku Generator
    fillValues() {
        // Fill the diagonal of SRN x SRN matrices
        this.fillDiagonal();

        // Fill remaining blocks
        this.fillRemaining(0, this.SRN);

        // Remove Randomly K digits to make game
        this.removeKDigits();
    }

    // Fill the diagonal SRN number of SRN x SRN matrices
    fillDiagonal() {
        for (let i = 0; i < this.N; i += this.SRN) {
            // for diagonal box, start coordinates->i==j
            this.fillBox(i, i);
        }
    }

    // Returns false if given 3 x 3 block contains num.
    unUsedInBox(rowStart, colStart, num) {
        for (let i = 0; i < this.SRN; i++) {
            for (let j = 0; j < this.SRN; j++) {
                if (this.mat[rowStart + i][colStart + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    // Fill a 3 x 3 matrix.
    fillBox(row, col) {
        let num = 0;
        for (let i = 0; i < this.SRN; i++) {
            for (let j = 0; j < this.SRN; j++) {
                while (true) {
                    num = this.randomGenerator(this.N);
                    if (this.unUsedInBox(row, col, num)) {
                        break;
                    }
                }
                this.mat[row + i][col + j] = num;
            }
        }
    }

    // Random generator
    randomGenerator(num) {
        return Math.floor(Math.random() * num + 1);
    }

    // Check if safe to put in cell
    checkIfSafe(i, j, num) {
        return (
            this.unUsedInRow(i, num) &&
            this.unUsedInCol(j, num) &&
            this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
        );
    }

    // check in the row for existence
    unUsedInRow(i, num) {
        for (let j = 0; j < this.N; j++) {
            if (this.mat[i][j] === num) {
                return false;
            }
        }
        return true;
    }

    // check in the column for existence
    unUsedInCol(j, num) {
        for (let i = 0; i < this.N; i++) {
            if (this.mat[i][j] === num) {
                return false;
            }
        }
        return true;
    }

    // A recursive function to fill remaining
    // matrix
    fillRemaining(i, j) {
        // Check if we have reached the end of the matrix
        if (i === this.N - 1 && j === this.N) {
            return true;
        }

        // Move to the next row if we have reached the end of the current row
        if (j === this.N) {
            i += 1;
            j = 0;
        }

        // Skip cells that are already filled
        if (this.mat[i][j] !== 0) {
            return this.fillRemaining(i, j + 1);
        }

        // Try filling the current cell with a valid value
        for (let num = 1; num <= this.N; num++) {
            if (this.checkIfSafe(i, j, num)) {
                this.mat[i][j] = num;
                if (this.fillRemaining(i, j + 1)) {
                    return true;
                }
                this.mat[i][j] = 0;
            }
        }

        // No valid value was found, so backtrack
        return false;
    }

    // Print sudoku
    printSudoku() {
        for (let i = 0; i < this.N; i++) {
            console.log(this.mat[i].join(" "));
        }
    }

    // Remove the K no. of digits to
    // complete game
    removeKDigits() {
        let count = this.K;

        while (count !== 0) {
            // extract coordinates i and j
            let i = Math.floor(Math.random() * this.N);
            let j = Math.floor(Math.random() * this.N);
            if (this.mat[i][j] !== 0) {
                count--;
                this.mat[i][j] = 0;
            }
        }
    }
}

// Function to check if the solution of sudoku puzzle is valid or not
function isValidSudoku(board) {
    const N = 9;
    
    // Check if all elements of board[][] stores value in the range[1, 9]
    if (!isInRange(board)) {
        return false;
    }

    // Check each row
    for (let i = 0; i < N; i++) {
        const unique = Array(N + 1).fill(false);
        for (let j = 0; j < N; j++) {
            const num = parseInt(board[i][j]);
            if (unique[num]) {
                return false;
            }
            unique[num] = true;
        }
    }

    // Check each column
    for (let j = 0; j < N; j++) {
        const unique = Array(N + 1).fill(false);
        for (let i = 0; i < N; i++) {
            const num = parseInt(board[i][j]);
            if (unique[num]) {
                return false;
            }
            unique[num] = true;
        }
    }

    // Check each 3x3 block
    for (let i = 0; i < N; i += 3) {
        for (let j = 0; j < N; j += 3) {
            const unique = Array(N + 1).fill(false);
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    const num = parseInt(board[i + k][j + l]);
                    if (unique[num]) {
                        return false;
                    }
                    unique[num] = true;
                }
            }
        }
    }

    return true;
}

function isInRange(board) {
    const N = 9;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const num = parseInt(board[i][j]);
            if (isNaN(num) || num < 1 || num > 9) {
                return false;
            }
        }
    }
    return true;
}

function checkSudoku(board) {
    return isValidSudoku(board);
}

async function GenerateBoard() {
    let sudoku = new Sudoku(9, 40);
    sudoku.fillValues();
    console.log(sudoku.mat);
    return sudoku.mat;
}

export { GenerateBoard, checkSudoku };