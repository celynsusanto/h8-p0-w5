//function cariPelaku(kalimat)
//return berapakali ditemukan kata 'abc'

function cariPelaku(str){
    var abc=str.match(/abc/g)
    var jumlahAbc=abc.length
    return jumlahAbc
}

console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2