import React, { useEffect, useState } from 'react';

const useItemDetail = (id) => {
    
    const [item, setItem] = useState();  
    useEffect(() => {
            const url = `http://localhost:4000/items/${id}`
            fetch(url)
            .then(response => response.json())
        .then(data=>setItem(data))
    },[item])
    return {item}
};

export default useItemDetail;