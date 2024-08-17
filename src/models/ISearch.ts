import {IGenre} from "@/models/IGenres";

export interface ISearch {
    page: number,
    results: IGenre[],
    total_pages: number,
    total_results: number
}