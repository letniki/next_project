import React, {FC} from 'react';
import {getMovieById} from "@/services/api.service";

interface IProps{
    id:number
}
const MovieComponent:FC<IProps> =async ({id}) => {
    let movie =await getMovieById(id);
    return (
        <div>
            {movie.id}-{movie.title}
        </div>
    );
};

export default MovieComponent;