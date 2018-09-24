//function hapusSimbol(str)
//return nya bersih dr simbol dan menyisakan a-z dan angka 0-9

function hapusSimbol(str) {
  var reg = str.match(/[a-z0-9]+/gi).toString().replace(/,/g, "");;
  
  return reg;
}

// TEST CASES
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
