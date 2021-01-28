//SpreadOperator ...namavariable
// memanipulasi array dan object

//String
// const nama = "String";
// console.log(...nama);

// //Array
// const keluargaAbot = [`Abot`, `Abang`, `Murdi`];
// console.log(...keluargaAbot);

// Menggabungkan Array
// const keluargaAbot = [`Abot`, `Abang`, `Murdi`];
// const keluargaGiri = [`Su`,`Gi`, `Ri`];
// const bapack = [...keluargaAbot,`Udin`,...keluargaGiri];
// console.log(bapack);

// const abc= keluargaAbot.concat(keluargaGiri);
// console.log(abc);

// const abc = `Fadli`;
// console.log(...abc);

// meng-copy Array(bukan reference). ex reference: keluargaAbot1=keluargaAbot;

// const keluargaAbot = [`Abot`, `Abang`, `Murdi`];
// const keluargaAbot1 = [...keluargaAbot];
// keluargaAbot1[0]= `Saya adalah`;


const nama = document.querySelector('.nama');
const coba = [...nama.textContent].map(a=>`<span>${a}</span>`).join('');

nama.innerHTML=coba;

//Spread operator pada arguments
function mencoba(a,b) {
    console.log(...arguments);
}
mencoba(1,2,3,4,5,6,7,8,0)



