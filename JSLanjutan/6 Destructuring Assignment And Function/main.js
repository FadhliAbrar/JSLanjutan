//Destructuring Assignment array

// let number = [1,2,3,4];
// let [a,b,c,d] = number;
// console.log(4);

// Destructuring Assignment Object

// const mhs = {
//     nama: `Fadli`,
//     nim: 20102050051,
//     email: `stupidlearner0407@gmail.com`
// }
// const {nama,nim,email} = mhs;
// console.log(nama); Fadli
// console.log(nim); 20102050051
// console.log(email);  stupidlearner0407@gmail.com

// skipping items

// let number = [1,2,3,4];
// let [a,,,d] = number;

// console.log(a,d);

// Rest parameter

// const mhs = {
//     nama: `Fadli`,
//     nim: 20102050051,
//     email: `stupidlearner0407@gmail.com`
// }

// const {nama,...values}= mhs;
// console.log(nama);  
// console.log(values);

// const [a, ...values] = [1,2,3,4,5,6,7,8,]
// console.log(a,values);


//Assignment tanpa deklarasi object

({nama, nim, email} = {nama:`Fadli`, nim: 1020051, email:`stupidlearner0407@gmail.com`})
console.log(nama,nim,email);

// assign ke variable baru

const mhs = {
    nama: `Fadli`,
    nim: 20102050051,
    email: `stupidlearner0407@gmail.com`
}

// const {nama: n, nim: i, email: em = `default@default.com`} = mhs;
// console.log(em);

function destructuringF({nama,nim}) {
    return `nama saya ${nama}, nim saya ${nim}.`
}
console.log(destructuringF(mhs));