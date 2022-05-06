import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `https://powerful-dawn-49608.herokuapp.com/items`
        //const url = `http://localhost:4000/items`
        fetch(url)
            .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return {items,setItems}
};

export default useItems;