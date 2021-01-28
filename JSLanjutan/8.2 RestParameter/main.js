// Rest Parameter (...)
// digunakan pada array yang tersisa di akhir
// function mencoba(...args) {
//     return args;
// }
// console.log(mencoba(1,2,3,4,5,6,7,8,9,10));

// function jumlahkan(...args) {
//     return args.reduce((arr,curr)=> arr+curr);
// }

// console.log(jumlahkan(1,2,3,4,5,6,7,8,9,10));

// Array Destructuring
const kaizoku = ['Luffy','Zoro','Sanji','Brook','Choper','Franky','Jinbei','Usop','Nami','Robin'];
const [kapten, wakilKapten, ...nakama]= kaizoku;
const [koki,pemusik,dokter,mekanik,nakhoda,sniper,navigator,arkeolog]= nakama;

// Object Destructuring
const team = {
    pm: 'Sandhika',
    frontEnd1: 'Doddy',
    frontEnd2: 'Erik',
    backEnd: ' Fajar',
    ux: 'Hendra',
    devOps: 'Ferry'
}
const {pm, ...myTeam}= team;
console.log(myTeam);

// pada argument

function filterBy(type,...values) {
    return values.filter(a=> typeof a === type);
}

console.log(filterBy('boolean',1,2,'Sandhika',true,false,3,'Ujeng'))

// remember bro Array.filter(a=> condition)