import {baseUrl, token, urls} from "@/constants/urls";
import {IPaginatedMovie} from "@/models/IPaginatedMovie";
import {IMovieInfo} from "@/models/IMovieInfo";
import {IMovie} from "@/models/IMovie";
import {useSearchParams} from "next/navigation";

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: token,
    }
};

export const getAllMovies= async (page:number =1 ):Promise<IPaginatedMovie> => {
    const allMovies=await fetch(baseUrl + urls.get.movies+`?page=${page}`,options)
        .then(value => value.json());
    return allMovies;
};

export const getMovieById=async (id: number):Promise<IMovieInfo>=>{
 const movieById= await fetch(baseUrl + urls.movie+`/${id}`, options)
     .then(value => value.json());
    console.log('Movie by ID:', movieById);
 return movieById;
}

export const getGenreMovies=async (id:string, page:number =1):Promise<IPaginatedMovie>=>{
    const genreMovies= await fetch(baseUrl + urls.get.movies+`?with_genres=${id}&page=${page}`, options)
        .then(value => value.json());
    return genreMovies;
}