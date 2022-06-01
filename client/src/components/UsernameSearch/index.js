import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries'

function UsernameSearch() {

    const [findByUser, {error}] = useLazyQuery(QUERY_USERS);
    
    const [searchUsername, setSearchUsername] = useState({name:''});
    // adding thisd hook to check user name validity

    const handleChange = (search) => {
        const { name, value } = search.target;
        setSearchUsername({...searchUsername, [name]: value, });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(searchUsername)
        if(searchUsername.name){
        try {
           const userResult = await findByUser({
               vatiables: {username: searchUsername.name}
           })
           if(userResult.ok){
             window.location.assign(`/username/${searchUsername.name}`);
           }else{window.location.assign(`/username/`);}
        } catch (error) {
            console.log(error)
        } 
        } 

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className='' name="name" placeholder='Input Username' 
                         onChange={handleChange} />
                <button type='submit' className=''>Search</button>
            </form>
        </div>
    )
}

export default UsernameSearch;