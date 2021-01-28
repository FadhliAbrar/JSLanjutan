// Jquery

//$.ajax({
//     url: "http://www.omdbapi.com/?apikey=d16c6af5&s=Harry Potter",
//     success: results => {console.log(results)},
// });


// fetch

// const movies = fetch('http://www.omdbapi.com/?apikey=d16c6af5&s=Harry Potter')
//     .then(results => results.json).then(results => console.log(results));

/////////////////////////////////////////////////
// Promise (topic this time)

// 1. Promise adalah sebuah object yang merepresentasikan
//    keberhasilan / kegagalan sebuah event yang asynchronouse di masa yang akan datang
// 2. janji (terpenuhi / tidak)
// 3. states (fulfilled / reject / pending)
// 4. Callback (resolve (y) / reject (n) / finally (t)) 
// 5. aksi (then (ketikaTerpenuhu) / catch (ketikaDiingkari))


// contoh 1:
// let ditepati = true;
// const promises = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Tepat janji');
//     }else{
//         reject('Pendusta');
//     }
// });

// promises
//     .then(response => console.log('OK : '+ response))
//     .catch(response => console.log('Not OK : '+ response));

// contoh 2:
// let ditepati = false;
// const promises2 = new Promise((resolve, reject)=>{
//     if(ditepati){
//         setTimeout(()=>{
//             resolve('Janji ditepati');
//         },2000)
//     }else{
//         setTimeout(()=>{
//             reject('Janji tidak ditepati');
//         },1000)
//     }
// })

// console.log('Mulai');
// console.log(promises2
//     .finally(()=> console.log('Selesai menunggu'))
//     .then(results => console.log(results))
//     .catch(results => console.log(results))
//     );
// console.log('Selesai');
/////////////////////////////////////////////////

// promise.all([prmise1, promise2,promise3]);

const movies = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve([{
            judul: 'Harry Kopter',
            sutradara: 'Fadli',
            pemeran: 'Ucup'
        }])
    }, 2000);
});

const cuaca = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve([{
            kota: 'Yogyakarta',
            temperatur: 23,
            kondisi: 'Hujan'
        }])
    }, 1000);
});

// movies.then(r=> console.log(r));
// cuaca.then(r=> console.log(r)) >>cara kuno


// Promise.all([movies,cuaca])
//     .then(r=> console.log(r));

Promise.all([movies,cuaca])
    .then(r=>{
        const [movies,cuaca]=r;
        console.log(movies);
        console.log(cuaca);
    })


