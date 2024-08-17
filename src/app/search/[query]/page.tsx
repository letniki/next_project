// import React from 'react';
// import {ISearch} from "@/models/ISearch";
// import {searchMovie} from "@/services/search.service";
// import MovieInfoComponent from "@/components/SearchContainer/MoviesInfoComponent";
// import Link from "next/link";
//
//
// type Params = {
//     page: number;
//     query: string;
// }
//
// const SearchMoviesPage = async ({params}: { params: Params }) => {
//
//     let page = params.page;
//     let query=params.query;
//     console.log(query);
//     let searchedMovies:ISearch = await searchMovie(query);
//
//     return (
//         <div>
//             {
//                 searchedMovies.results.map(movie => <MovieInfoComponent key={movie.id} page={searchedMovies.page}
//                                                                         id={movie.id}/>)
//             }
//             <div>
//                 <button>
//                     <Link href={`/search?page=${page > 1 ? page - 1 : 1}`}>prev</Link>
//                 </button>
//                 {page}
//                 <button disabled={page === 500}>
//                     <Link href={`/movies?page=${page < 1 ? 1 : +page + 1}`}>next</Link>
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default SearchMoviesPage;