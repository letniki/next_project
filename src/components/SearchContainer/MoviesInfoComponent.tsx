// import React, {FC} from 'react';
// import Link from "next/link";
// import {getMovieById} from "@/services/api.service";
// import {IMovieInfo} from "@/models/IMovieInfo";
// import {IGenre} from "@/models/IGenres";
// import MovieInfoComponent from "@/components/SearchContainer/MovieInfoComponent";
//
// interface IProps{
//     page:number,
//     results:IGenre[]
// }
//
// const MoviesInfoComponent:FC<IProps> = ({page,results}) => {
//
//     // let movieId = results.map(result=>result.id);
//     // console.log(results);
//     // let movieById:IMovieInfo = await getMovieById(movieId);
//     // console.log(movieById);
//     console.log(results);
//     return (
//         <div>
//             {/*<div>{movieById.title}*/}
//                 {results.map(result =><MovieInfoComponent key={result.id} page={page} movieId={result.id}/>)}
//             {/*</div>*/}
//             <div>
//
//             </div>
//         </div>
//     );
// };
//
// export default MoviesInfoComponent;