
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const useJwtToken = user => {
    console.log(user,'555');
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {

            const email = user?.user?.email
            console.log({ email });
            if (email) {
                const { data } = await axios.post('http://localhost:4000/signin', { email })
                console.log(data.getToken);
                setToken(data.getToken);
                localStorage.setItem('token', data.getToken);

            }

        }
        getToken()
    }, [user])
    return [token]
};

export default useJwtToken;