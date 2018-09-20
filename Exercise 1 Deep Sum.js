/*function deepSum utk mendapatkan jumlah pertambahan dri angka dlm array
Contoh array:

[
  [
    [1, 2, 3],
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [1, 2],
    [1]
  ]
]
Maka akan menghasilkan output: 22

Level kedalaman array akan di-asumsikan selalu 3, [ [ [ ] ] ], jika yang diberikan adalah array kosong maka kembalikan nilai 'No number'
*/

function deepSum (arr) {
    // console.log(arr[1][0][0])
    var tambah=0
    for(var i=0; i<=arr.length-1; i++ ){
        for(var j=0; j<=arr[i].length-1; j++){
            for(var k=0; k<=arr[i][j].length-1; k++){
                // console.log(arr[i][j][k])
                tambah=tambah+arr[i][j][k]
            }
        }
    }
    if(tambah==0){
        return 'No number'
    }
    return tambah
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number