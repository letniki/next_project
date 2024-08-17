import {baseUrl, urls} from "@/constants/urls";
import {IPaginatedMovie} from "@/models/IPaginatedMovie";
import {options} from "@/services/api.service";
import {IMovieInfo} from "@/models/IMovieInfo";
import {ISearch} from "@/models/ISearch";


export const searchMovie=async (query:string, page:number):Promise<ISearch>=>{
    let response= await fetch(baseUrl+urls.search.movie+`?query=${query}&page=${page}`, options)
        .then(value=>value.json());
    console.log('Search Results:', response);
    return response;
}

// export const getMovieInfo = async (movie_id:number):Promise<IMovieInfo> => {
//     let movieInfo = await fetch(baseUrl + `/movie/${movie_id}`, options)
//         .then(response => response.json())
//     console.log(movieInfo)
//     return movieInfo;
// }