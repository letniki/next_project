import {baseUrl, token, urls} from "@/constants/urls";
import {IGenre, IGenres} from "@/models/IGenres";
import {options} from "@/services/api.service";

export const getAllGenres= async():Promise<IGenre[]> =>{
    const allGenres= await fetch(baseUrl + urls.get.genres, options)
        .then(value => value.json());
    console.log(allGenres);
    return allGenres.genres
};

// export const getByIdMovie = async():Promise<IPaginatedMovie> =>{
//     let response= await fetch(baseUrl+urls.get.genres, {})
// }