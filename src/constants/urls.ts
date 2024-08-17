const baseUrl='https://api.themoviedb.org/3';

const token='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWY2YzBiNzRlOGU0NGJlM2NiMjYwYWVhNzVlMzNjOCIsIm5iZiI6MTcyMzQ0Nzg0Mi44NzQxMDMsInN1YiI6IjY2YjliNzIyY2YyMmExOGNmM2Q1YzBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cI4dv9R7qb2yq6uMs78SzZZg0QaOMjrCFn5CV9GLhmA';
const urls= {
    get: {
        movies: '/discover/movie',
        genres: '/genre/movie/list',
        poster: '/image'
    },
    search:{
        movie:'/search/movie'
    },
    movie:'/movie',
    poster:'https://image.tmdb.org/t/p/w500/'
}

export {baseUrl, token, urls}