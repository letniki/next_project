import React, {FC} from 'react';
import Link from "next/link";
import {getAllMovies} from "@/services/api.service";
import {urls} from "@/constants/urls";
import {IPaginatedMovie} from "@/models/IPaginatedMovie";
import Stars from "@/module/Stars";
import styles from './movies.page.module.css'
import PaginationComponent from "@/components/PaginationContainer/PaginationComponent";


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
                <PaginationComponent page={page} pathname={'movies'}/>
        </div>
    );
};
export default MoviesPage;