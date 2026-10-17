const a = [[1, 2, 3], [4, 5, 6]];

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
    }
}
for (const row of a) {
    row.reverse();
}
console.log(a);