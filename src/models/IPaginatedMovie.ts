import {IMovie} from "@/models/IMovie";

export interface IPaginatedMovie {
    page: number,
    results:IMovie[],
    total_pages: number,
    total_results: number
}