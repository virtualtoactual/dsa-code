const matrix = [[1,2,3],[4,5,6],[7,8,9]];


if (matrix.length === 0) return [];
if (matrix[0].length === 0) return [];

const rows = matrix.length;
const cols = matrix[0].length;

const result = Array.from({length: cols}, () => new Array(rows).fill(0));

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        result[j][i] = matrix[i][j];  
    }
}

console.log(result);