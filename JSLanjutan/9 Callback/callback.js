// Callback
//function yang dikirimkan sebagai arguments di parameter function lain

// function halo(nama){
//     alert(`Halo, ${nama}`)
// }
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan nama: ');
//     callback(nama);
// }
// tampilkanPesan(halo);
//Synchronous >> sesuai dengan runtutan

// const mhs = [
//     {
//         nama: `Fadli`,
//         nim: 20102050051,
//         email: `stupidlearner0407@gmail.com`
//     },
//     {
//         nama: `Abrar`,
//         nim: 20102050051,
//         email: `stupidlearner0407@gmail.com`
//     },
//     {
//         nama: `Udid`,
//         nim: 20102050051,
//         email: `stupidlearner0407@gmail.com`
//     },
//     {
//         nama: `Adod`,
//         nim: 20102050051,
//         email: `stupidlearner0407@gmail.com`
//     },
// ];

// console.log('Mulai');
// mhs.forEach(m =>{
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)});
// console.log('Selesai');

//Asynchronous callback

// function getDataMahasiswa(url, succes, error) {
//     let xhr = new XMLHttpRequest;
    
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState==4){
//             if (xhr.status==200) {
//                 succes(xhr.response);
//             }else if(xhr.status == 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// function succes(results) {
//     console.log(results)
// }
// function error() {
// ]
// }

// console.log(`Mulai`);

// getDataMahasiswa(`coba.json`,succes, error);
// console.log(`Selesai`);

$('.search-button').on('click', function () {
    ajax();
})

$('.input-keyword').keydown(function(eh){
    if(eh.keyCode===13){
        ajax();
    }
})

function ajax() {
    $.ajax({
        url:'http://www.omdbapi.com/?apikey=d16c6af5&s='+$('.input-keyword').val(),
        success: results => {
            console.log(results);
            const movies = results.Search;
            cards = '';
            let gambar = '';
            movies.forEach(a => {
                cards +=`<div class="col-md-4 my-3">
                            <div class="card" >
                                <img src=${a.Poster} class="card-img-top" >
                                <div class="card-body">
                                    <h5 class="card-title">${a.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${a.Year}</h6>
                                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdb=${a.imdbID}>show details</a>
                                </div>
                            </div>    
                        </div>`;
                $('.movies-container').html(cards);
            });
            $('.modal-detail-button').on('click', function(){
                let imdbID = $(this).data('imdb');
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=d16c6af5&i=${imdbID}`,
                    success: s => {
                        gambar = `<img src=${s.Poster} alt="" class="img-fluid">`;
                        
                    $('.gambar-modal').html(gambar);
                    list(s);
                    },
                    error: (x) => {
                        console.log(x.responseText);
                    }
                    
                })
            })
        },
        error: (e) => {
            console.log(e.responseText);
        }
    })
}
function list(s) {
       let isiModal = `<li class="list-group-item"><h4>${s.Title}</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${s.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${s.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${s.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong> <br> ${s.Plot}</li>`;
            return $('.list-group').html(isiModal);
}

