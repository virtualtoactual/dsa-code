Array.from('hello');
// ['h','e','l','l','o']

Array.from('12345');
// ['1','2','3','4','5']


// {length: 5} fakes an array of length 5
Array.from({length: 5});
// [undefined, undefined, undefined, undefined, undefined]

// with map function — (value, index)
Array.from({length: 5}, (_, i) => i);
// [0, 1, 2, 3, 4]
//  ↑ _ means we ignore the value (it's undefined)
//        ↑ i is the index

Array.from({length: 5}, (_, i) => i + 1);
// [1, 2, 3, 4, 5]

Array.from({length: 5}, (_, i) => i * 2);
// [0, 2, 4, 6, 8]

Array.from({length: 5}, (_, i) => i * i);
// [0, 1, 4, 9, 16]

Array.from({length: 5}, () => 0);
// [0, 0, 0, 0, 0]


//2d array
// 3 rows, 4 cols, filled with 0
Array.from({length: 3}, () => new Array(4).fill(0));
// [[0,0,0,0],
//  [0,0,0,0],
//  [0,0,0,0]]

// filled with index values
Array.from({length: 3}, (_, i) =>
    Array.from({length: 4}, (_, j) => i * 4 + j)
);
// [[ 0, 1, 2, 3],
//  [ 4, 5, 6, 7],
//  [ 8, 9,10,11]]