// Object Literal
// let mahasiswa = {
//     nama: "Fadli",
//     kekuatan: 90,
//     makan: function (porsi) {
//         this.kekuatan+=porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
// }


//Object Function Declaration
// function Mahasiswa(nama,kekuatan) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama,
//     mahasiswa.kekuatan = kekuatan,
//     mahasiswa.makan = function (porsi) {
//         this.kekuatan+=porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
//     return mahasiswa;
// }


// Constructor Function (USE THIS)
// function mahasiswa(nama,energy) {
//     this.nama = nama,
//     this.kekuatan = energy,
//     this.makan= function (porsi) {
//         this.kekuatan+=porsi;
//     }
// }

// let fadli = new mahasiswa(`Fadli`, 100);

//objectCreate() >> supaya bisa ngambil object literal
// tanpa dideklarasikan lagi di dalam fungsi
// let objectMahasiswa = {
//     makan: function (porsi) {
//         this.kekuatan+=porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     },
//     tidur: function (jam) {
//         this.kekuatan+= jam*2;
//     }
// }
// function Mahasiswa(nama,kekuatan) {
//     let mahasiswa = Object.create(objectMahasiswa);
//     mahasiswa.nama = nama,
//     mahasiswa.kekuatan = kekuatan
    
//     return mahasiswa;
// }

// let fadli= Mahasiswa(`Fadli`,100);

//Prototype
//Prototype itu seperti library buatan


// Prototype secara default//////////////////////////
function Mahasiswa(nama, energi) {
    // let this = Object.create(Mahasiswa.prototype);

    this.nama = nama,
    this.energi = energi;

    return this;
}
let fadli = new Mahasiswa('Fadli', 100);
////////////////////////////////////////////////////

// function Mahasiswa(nama, energi) {
//     this.nama = nama,
//     this.energi = energi;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi+=porsi;
// }
// let fadli = new Mahasiswa(`Fadli`, 100);

// USE CLASS BRO
// class Mahasiswa{
//     constructor(nama, kekuatan){
//         this.nama = nama;
//         this.kekuatan = kekuatan;
//     }

//     tidur(jam){
//         this.kekuatan+=jam*2;
//     }
//     makan(porsi){
//         this.kekuatan+=porsi;
//     }
// }
// let fadli = new Mahasiswa(`Fadli`, 100);


// class buah{
//     constructor(nama,warna,rasa){
//         this.nama = nama;
//         this.warna = warna;
//         this.rasa = rasa;
//     }
//     curaHujan(indexPerMinggu){
//         this.rasa+=indexPerMinggu*2;
//     }
// }

