import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <div>
            <h1 style={{ marginTop: '50%' }}>hiiiii:  {id}</h1>
        </div>
    );
};

export default Update;