import React from 'react';
import {getAllMovies} from "@/services/api.service";
import Link from "next/link";

// type IProps={
//     results:IMovie[],
//     page: number,
// }
const MoviesComponent = async () => {

    let movies= await getAllMovies(1);

    return (
        <div>
            {
                movies.results.map(result =><div key={result.id}>
                    <div>-{result.title}</div>
                    <Link href={{pathname:'/movies/'+ result.id, query:{data:JSON.stringify(result)}}}>
                        <img src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} alt={result.title}/>
                    </Link>


                </div>)
            }
        </div>
    );
};

export default MoviesComponent;