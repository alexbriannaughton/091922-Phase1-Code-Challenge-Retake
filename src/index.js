const URL = 'http://localhost:3000/films'

const fetchFirstMovie = () => {
    fetch('http://localhost:3000/films/1')
        .then(resp => resp.json())
        .then(data => renderFirstMovie(data))
}

const renderFirstMovie = movie => {
    const poster = document.getElementById('poster')
    const title = document.getElementById('title')
    const runtime = document.getElementById('runtime')
    const showtime = document.getElementById('showtime')
    const availtix = document.getElementById('ticket-num')
    const desc = document.getElementById('film-info')

    poster.src = movie.poster
    title.textContent = movie.title
    runtime.textContent = movie.runtime
    showtime.textContent = movie.showtime
    availtix.textContent = movie.capacity - movie.tickets_sold
    desc.textContent = movie.description

    const buyButton = document.getElementById('buy-ticket')
    buyButton.addEventListener('click', e => {
       
        if (availtix.textContent > 0) {
            availtix.textContent -= 1
        }
    
    })
}

const fetchMovies = () => {
    fetch(URL)
        .then(resp => resp.json())
        .then(data => iterateMovies(data))
}

const iterateMovies = movies => {
    movies.forEach(movie => renderMenu(movie))
}

const renderMenu = movie => {
    const title = document.createElement('li')
    const ul = document.getElementById('films')

    title.textContent = movie.title

    ul.append(title)
}



fetchFirstMovie()
fetchMovies()