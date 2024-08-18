// import React from 'react';
// import MoviesComponent from "@/components/MoviesContainer/Movies/MoviesComponent";
// import {getAllMovies} from "@/services/api.service";
// import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
//
// const MoviesPage = async() => {
//
//
//     return (
//         <ul>
//             {
//                <MoviesComponent/>
//             }
//         </ul>
//     );
// };
//
// export default MoviesPage;

import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import style from '@/moduleCSS/style.module.css'
import Link from "next/link";
import {getAllMovies, getMovieById} from "@/services/api.service";
import {urls} from "@/constants/urls";
import {IPaginatedMovie} from "@/models/IPaginatedMovie";
import Stars from "@/module/Stars";
import styles from './movies.page.module.css'
import PaginationComponent from "@/components/PaginationContainer/PaginationComponent";
import {IMovieInfo} from "@/models/IMovieInfo";
import Image from "next/image";


const MoviesPage:FC =  async ({searchParams}:any) => {
    let page = (searchParams? searchParams.page : 1);
    console.log(page)
    const movies:IPaginatedMovie = await getAllMovies(page);
    return (
            <div>
                <div className={styles.biggerBlock}>
                            {
                 movies.results.map(result => <div key={result.id}>

                     <Link className={styles.Link} href={{pathname: '/movies/' + result.id, query: {data: JSON.stringify(result)}}}>
                         <div className={styles.block}>
                             {/*{result.}*/}
                             <h3 className={styles.h3}>{result.title}</h3>
                             <img className={styles.image} src={`${urls.poster}${result.poster_path}`}
                                  alt={result.title}/>
                             <h3 className={styles.h3}>
                             Rating:  {result.vote_average}
                             </h3>
                             <div className={styles.Stars}>
                                 <Stars rating={result.vote_average} dimension={"18px"} spacing={'1px'}/>
                             </div>
                         </div>
                     </Link>
                 </div>
                 )}
                </div>
            {/*<div className={styles.pagination}>*/}
            {/*    <button className={styles.button} disabled={page===1}>*/}
            {/*        <Link className={styles.Link} href={`/movies?page=${page > 1 ? page - 1 : 1}`}>prev</Link>*/}
            {/*    </button>*/}
            {/*    <Link className={styles.Link} href={`/movies?page=${page > 1 ? 1 : 1}`}>{1}</Link>*/}
            {/*    <Link className={styles.Link} href={`/movies?page=${page < 1 ? 1 : +page + 1}`}>{+page + 1}</Link>*/}
            {/*    <Link className={styles.Link} href={`/movies?page=${page < 1 ? 1 : +page + 2}`}>{+page + 2}</Link>*/}
            {/*    <Link className={styles.Link} href={`/movies?page=${page < 1 ? 1 : +page + 3}`}>{+page + 3}</Link>*/}
            {/*    <Link className={styles.Link} href={`/movies?page=${page < 1 ? 1 : +page + 4}`}>{+page + 4}</Link>*/}
            {/*    <h3 className={styles.h3}>You are on {page} page</h3>*/}
            {/*    <button className={styles.button} disabled={page===500}>*/}
            {/*    <Link className={styles.Link} href={`/movies?page=${page < 1 ? 1 : +page + 1}`}>next</Link>*/}
            {/*</button>*/}
            {/*</div>*/}
                <PaginationComponent page={page} pathname={'movies'}/>
        </div>
    );
};
export default MoviesPage;