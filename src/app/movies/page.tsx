import React from 'react';
import MoviesComponent from "@/components/MoviesContainer/Movies/MoviesComponent";

const MoviesPage = () => {

    return (
        <ul>
            {
               <MoviesComponent/>
            }
        </ul>
    );
};

export default MoviesPage;