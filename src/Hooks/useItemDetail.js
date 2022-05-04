import React, { useEffect, useState } from 'react';

const useItemDetail = (id) => {
    
    const [item, setItem] = useState();  
    useEffect(() => {
            const url = `https://powerful-dawn-49608.herokuapp.com/items/${id}`
            fetch(url)
            .then(response => response.json())
        .then(data=>setItem(data))
    },[item])
    return {item,setItem}
};

export default useItemDetail;