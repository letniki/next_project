import {baseUrl, urls} from "@/constants/urls";
import {options} from "@/services/api.service";
import {ISearch} from "@/models/ISearch";


export const searchMovie = async (query: string, page: number): Promise<ISearch> => {
    let response = await fetch(baseUrl + urls.search.movie + `?query=${query}&page=${page}`, options)
        .then(value => value.json());
    console.log('Search Results:', response);
    return response;
}
