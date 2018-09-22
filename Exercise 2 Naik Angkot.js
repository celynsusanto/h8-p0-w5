//function naikAngkot(listPenumpang)
//menerima parameter berupa array 2 dimensi
//function akan meretun array of object
/*
 Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
 */

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var biaya = 0;
  var indexAwal = 0;
  var indexBelakang = 0;
  var obj = {
  };
  var arr=[]

  for (var i = 0; i <= arrPenumpang.length - 1; i++) {
    for (var j = 0; j <= rute.length - 1; j++) {
      if (rute[j] === arrPenumpang[i][1]) {
        indexAwal = j;
      } else if (rute[j] === arrPenumpang[i][2]) {
        indexBelakang = j;
      }
      biaya = 2000 * (indexBelakang - indexAwal);
    }
    obj[i] = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: biaya
    };
    arr.push(obj[i])
  }
  return arr;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
