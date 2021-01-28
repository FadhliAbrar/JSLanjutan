// Array

// const mhs = [`Fadli`, `Abrar`, `Pad`];
// for (const [i,nama] of mhs.entries()) {
//     console.log(i);
// }

//String
// const nama = "Fadli";
// for (const i of nama) {
//     console.log(i);
// }

// NodeList

// const nodeList = document.querySelectorAll('li');

// for (const iterator of nodeList ) {
//     console.log(iterator.innerHTML);
// }


//Arguments secara gaib terdeklarasi pada function, ketika tidak ada yang menangkap nilai dari x pada f(x)
// Arguments
// function jumlahkanAngka() {
//     let total=0;
//     for (a in arguments) {
//         total+=a;
//     }
//     // return total;
// }
// console.log(jumlahkanAngka(1,2,3,4,5,6));






//for..in >> looping pada properti object
// const mhs = {
//     nama: `Fadli`,
//     nim: 20102050051,
//     kelas: `B`
// }
// for (const a in mhs) {
//     console.log(a)
// }

// bila mengambil isinya
const mhs = {
    nama: `Fadli`,
    nim: 20102050051,
    kelas: `B`
}
for (const a in mhs) {
    console.log(mhs[a])
}