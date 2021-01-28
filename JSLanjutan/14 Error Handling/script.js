// Error Handling
// 1. Pada Promise(resolve,reject) synchronous menggunakan .then() untuk resolve dan .catch() untuk reject
// 2. Pada Asynchronous function menggunakan try dan catch(err);
// 3. Pada fetch()?


// error handling pada fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        getCard(movies);
    }catch(err){
        alert(err);
    }
})


// event bunding
document.addEventListener('click', async function (params) {
    if (params.target.classList.contains('modal-detail-button')) {
        console.log('OK');
        const imdb = params.target.dataset.imdb;
        const movieDetail = await getMovieDetail(imdb);
        updateMovieDetail(movieDetail);
    }
})

// getAPI function
function getMovies(input) {
    return fetch('http://wwW.omdbapi.com/?apikey=d16c6af5&s='+input)
                .then(request =>{
                    if(!request.ok){
                        throw new Error(request.statusText);
                    }
                    return request.json();
                })
                .then(r => {
                    if(r.Response=== "False"){
                        throw new Error(r.Error);
                    }
                    return r;
                })
}

function getMovieDetail(imdb) {
    return fetch('http://www.omdbapi.com/?apikey=d16c6af5&i=' +imdb)
                .then(response => response.json())
                .then(r => r)
}

// moviesCard Function

function getCard(getMovies) {
    const moviesContainer = document.querySelector('.movies-container');
    let cards = '';
    return getMovies.Search.forEach( r => {
        cards += card(r);
        moviesContainer.innerHTML = cards;
    });
}

// modalButton Function
function updateMovieDetail(r){
    const modalBody = document.querySelector('.modal-body');
    let modalUI = movieDetail(r);
    const gambarModal = document.querySelector('.gambar-modal');
    gambarModal.innerHTML = gambarDetail(r);
    modalBody.innerHTML = modalUI;
}


function card(element) {
    return `<div class="col-md-4 my-3">
                <div class="card" >
                    <img src=${element.Poster} class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${element.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdb=${element.imdbID}>show details</a>
                    </div>
                </div>    
            </div>`;
}


function movieDetail(r) {
    return `<li class="list-group-item"><h4>${r.Title}</h4></li>
            <li class="list-group-item"><strong>Director : </strong> ${r.Director}</li>
            <li class="list-group-item"><strong>Actors : </strong>${r.Actors}</li>
            <li class="list-group-item"><strong>Writer : </strong>${r.Writer}</li>
            <li class="list-group-item"><strong>Plot : </strong> <br> ${r.Plot}</li>`;
}
function gambarDetail(r) {
    return `<img src=${r.Poster} alt="" class="img-fluid"></img>`;
}