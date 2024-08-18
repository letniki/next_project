import {baseUrl, urls} from "@/constants/urls";
import {options} from "@/services/api.service";
import {ISearch} from "@/models/ISearch";


export const searchMovie = async (query: string, page: number): Promise<ISearch> => {
    return await fetch(baseUrl + urls.search.movie + `?query=${query}&page=${page}`, options)
        .then(value => value.json());
}
