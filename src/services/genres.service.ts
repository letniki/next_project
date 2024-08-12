import {baseUrl, token, urls} from "@/constants/urls";
import {IGenres} from "@/models/IGenres";

export const getAllGenres= async():Promise<IGenres> =>{
   let response= await fetch(baseUrl+urls.get.genres, {
    headers: {
        Authorization: token,
    }
}).then(value => value.json());
   return response;
};

// export const getByIdMovie = async():Promise<IPaginatedMovie> =>{
//     let response= await fetch(baseUrl+urls.get.genres, {})
// }