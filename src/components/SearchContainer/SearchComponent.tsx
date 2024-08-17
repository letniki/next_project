// import React, {FC} from 'react';
// import {searchMovie} from "@/services/search.service";
// import Link from "next/link";
// import {ISearch} from "@/models/ISearch";
// import MovieInfoComponent from "@/components/SearchContainer/MovieInfoComponent";
//
// interface IProps{
//     query:string;
//     searchParams:number
// }
//
// const SearchComponent:FC<IProps> = async ({query, searchParams}) => {
//     let page = searchParams? searchParams : 1;
//     console.log(page);
//     let searchedMovies:ISearch = await searchMovie(query, page);
//     console.log(searchedMovies);
//
//     return (
//         <div>
//             <div>{
//                 searchedMovies.results.map(movie => <MovieInfoComponent key={movie.id} page={searchedMovies.page} id={movie.id}/>)
//             }</div>
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
// export default SearchComponent;