import {baseUrl, token, urls} from "@/constants/urls";
import {IPaginatedMovie} from "@/models/IPaginatedMovie";
import {IMovieInfo} from "@/models/IMovieInfo";


export const getAllMovies= async (page:number):Promise<IPaginatedMovie>=> {
    let response=await fetch(baseUrl + urls.get.movies+'?page='+`${page}`, {
        headers: {
            Authorization: token
        }
    }).then(value => value.json());
    return response;
};

export const getMovieById=async (id:number):Promise<IMovieInfo>=>{
 const response= await fetch(baseUrl + urls.movie+ id, {
     headers:{
         Authorization: token
     }
 }).then(value => value.json());
 return response;
}