import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `https://sp-warehouse-server.onrender.com/items`
        //const url = `https://sp-warehouse-server.onrender.com/items`
        fetch(url)
            .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return {items,setItems}
};

export default useItems;