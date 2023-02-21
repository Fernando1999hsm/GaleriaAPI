const cargarAnimebyTitle = async(name)=>{
    await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${name}`)
    .then((response) => response.json())
    .then((quotes) => {
        let animeContenedor = '';
        console.log(quotes);
        animeContenedor += `
            <div class="card" style="width: 18rem;">
                <img src="https://imgs.search.brave.com/JbqHMZv-I1duNJp-PZ1NCEThwqhEBItNaTueWIGO3Eo/rs:fit:720:718:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8yNi8wNC9mYi8y/NjA0ZmI3MWU2YzNl/NmFiYjgxNTYzZmM3/NThhZTcwNy5qcGc" class="card-img-top" alt="Anime">
                <div class="card-body">
                <h5 class="card-title">${quotes.anime}</h5>
                <h5 class="card-title">Protagonista:${quotes.character}</h5>
                <p class="card-text">${quotes.quote}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
    });
    document.getElementById('contenedor').innerHTML = animeContenedor;
}
const cargarAnimes = async ()=>{
    try {
        await fetch('https://animechan.vercel.app/api/available/anime')
        .then(response =>response.json())
        .then(animes =>{
            animes.forEach(anime => {
                console.log(anime);
                cargarAnimebyTitle(anime);
            });
        })
    } catch (error) {
        console.log(error);
    }
}

cargarAnimes();