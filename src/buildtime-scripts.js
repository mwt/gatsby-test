import React from 'react';

export function LastWord(x) {
    var xarray = x.split(" ");
    const lastword = xarray.pop(); 
    return(
        <>
            { xarray.join(" ") }
            <em>
                { lastword }
            </em>
        </>    
    );
}