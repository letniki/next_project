'use client'
import React, {FC} from 'react';
import StarRatings from "react-star-ratings";

interface IProps{
    rating: number;
    spacing:string;
    dimension:string
}
const Stars:FC<IProps> = ({rating, spacing, dimension}) => {
    return (
        <StarRatings rating={rating}
                     starRatedColor="yellow"
                     starEmptyColor={'brown'}
                     numberOfStars={10}
                     name='rating'
                     starDimension={dimension}
                     starHoverColor={'red'}
                     starSpacing={spacing}
        />
    );
};

export default Stars;