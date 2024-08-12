import React from 'react';

const Page = ({searchParams}:any) => {
    let movie = JSON.parse(searchParams.data);
    return (
        <div>
            {/*<div className={adult}>{icon.18+}</div> todo adult */}
            {movie.original_title}-{movie.overview}
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie.original_title"/>
        </div>
    );
};

export default Page;