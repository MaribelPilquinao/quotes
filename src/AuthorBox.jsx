import React from 'react';

const AuthorBox = ({ author, background }) =>{

    return(
        <>
            <h5 style={{color: background}}>{author} </h5>
        </>
    );
}



export default AuthorBox;