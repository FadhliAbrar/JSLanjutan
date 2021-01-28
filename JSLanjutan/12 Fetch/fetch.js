// fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function (){
    const moviesContainer = document.querySelector('.movies-container');
    let cards = '';
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=d16c6af5&s='+ inputKeyword.value)
                    .then(response => response.json())
                    .then(r=>{
                        r.Search.forEach(a => {
                            cards += `<div class="col-md-4 my-3">
                                        <div class="card" >
                                            <img src=${a.Poster} class="card-img-top" >
                                            <div class="card-body">
                                                <h5 class="card-title">${a.Title}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${a.Year}</h6>
                                                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdb=${a.imdbID}>show details</a>
                                            </div>
                                        </div>    
                                    </div>`;
                            moviesContainer.innerHTML = cards;
                        });
                        const modalButton = document.querySelectorAll('.modal-detail-button');
                        const gambarModal = document.querySelector('.gambar-modal');
                        const listGroup = document.querySelector('.list-group');
                        let gambar = '';
                        let list = '';
                        modalButton.forEach(e => {
                            e.addEventListener('click', function () {
                                fetch('http://www.omdbapi.com/?apikey=d16c6af5&i='+ e.dataset.imdb)
                                    .then(r => r.json())
                                    .then(r => {
                                        gambar = `<img src=${r.Poster} alt="" class="img-fluid">`;
                                        list = `<li class="list-group-item"><h4>${r.Title}</h4></li>
                                                <li class="list-group-item"><strong>Director : </strong> ${r.Director}</li>
                                                <li class="list-group-item"><strong>Actors : </strong>${r.Actors}</li>
                                                <li class="list-group-item"><strong>Writer : </strong>${r.Writer}</li>
                                                <li class="list-group-item"><strong>Plot : </strong> <br> ${r.Plot}</li>`;
                                            gambarModal.innerHTML = gambar;
                                            listGroup.innerHTML = list;
                                    })  
                            })
                        });
                    })              
})




// JQuery
// $('.search-button').on('click', function () {
//     ajax();
// })

// $('.input-keyword').keydown(function(eh){
//     if(eh.keyCode===13){
//         ajax();
//     }
// })

// function ajax() {
//     $.ajax({
//         url:'http://www.omdbapi.com/?apikey=d16c6af5&s='+$('.input-keyword').val(),
//         success: results => {
//             console.log(results);
//             const movies = results.Search;
//             cards = '';
//             let gambar = '';
//             movies.forEach(a => {
//                 cards +=`<div class="col-md-4 my-3">
//                             <div class="card" >
//                                 <img src=${a.Poster} class="card-img-top" >
//                                 <div class="card-body">
//                                     <h5 class="card-title">${a.Title}</h5>
//                                     <h6 class="card-subtitle mb-2 text-muted">${a.Year}</h6>
//                                     <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdb=${a.imdbID}>show details</a>
//                                 </div>
//                             </div>    
//                         </div>`;
//                 $('.movies-container').html(cards);
//             });
//             $('.modal-detail-button').on('click', function(){
//                 let imdbID = $(this).data('imdb');
//                 $.ajax({
//                     url: `http://www.omdbapi.com/?apikey=d16c6af5&i=${imdbID}`,
//                     success: s => {
//                         gambar = `<img src=${s.Poster} alt="" class="img-fluid">`;
                        
//                     $('.gambar-modal').html(gambar);
//                     list(s);
//                     },
//                     error: (x) => {
//                         console.log(x.responseText);
//                     }
                    
//                 })
//             })
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     })
// }
// function list(s) {
//        let isiModal = `<li class="list-group-item"><h4>${s.Title}</h4></li>
//                 <li class="list-group-item"><strong>Director : </strong> ${s.Director}</li>
//                 <li class="list-group-item"><strong>Actors : </strong>${s.Actors}</li>
//                 <li class="list-group-item"><strong>Writer : </strong>${s.Writer}</li>
//                 <li class="list-group-item"><strong>Plot : </strong> <br> ${s.Plot}</li>`;
//             return $('.list-group').html(isiModal);
// }

// addEventListener('click', function () {
//     fetch(`http://www.omdbapi.com/?apikey=d16c6af5&i=${imdbID}`)
//         .then(r=>r.json())
//         .then(r=>{
//            gambar = `<img src=${r.Poster} alt="" class="img-fluid">`;
//            list = `<li class="list-group-item"><h4>${r.Title}</h4></li>
//                 <li class="list-group-item"><strong>Director : </strong> ${r.Director}</li>
//                 <li class="list-group-item"><strong>Actors : </strong>${r.Actors}</li>
//                 <li class="list-group-item"><strong>Writer : </strong>${r.Writer}</li>
//                 <li class="list-group-item"><strong>Plot : </strong> <br> ${r.Plot}</li>`;
//             gambarModal.innerHTML = gambar;
//             listGroup.innerHTML = list;
//         })