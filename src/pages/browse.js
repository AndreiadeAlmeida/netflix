import React from 'react';
import { useContent } from '../hooks/index';

function Browse() {
    const { series } = useContent('series');
    console.log(series);


    return (
        <p>Hello</p>
    )
}

export default Browse;
