// Konsep
// asynchronouse >> melalui event loop

// asynchronouse function (fungsi yang berjalan secara asynchronouse)
// 1.  penulisannya seperti synchronous function
// 2.  menghasilkan (implisit) promise
//  await > menunggu promise resolve(selesai)

// to be known
// .then() => mengembalikan promise


// .then dan .catch versi async function



function cobaPromise() {
    return new Promise((resolve, reject) =>{
        const waktu = 4000;
        if (waktu < 5000) {
            setTimeout(()=>{
                resolve('Selesai');
            },waktu)
        }else{
            reject('kelamaan');
        }
    });
}

// const coba = cobaPromise();

// coba
//     .then(()=> console.log(coba))
//     .catch(()=> console.log(coba));

async function cobaAsync() {
    try{
        const coba = await cobaPromise();
        console.log(coba);
    }catch(err){
        console.log(err);
    }
}   

cobaAsync();