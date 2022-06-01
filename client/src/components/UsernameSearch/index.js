import React, { useState } from 'react';

function UsernameSearch() {

    
    const [searchUsername, setSearchUsername] = useState({name:''});

    const handleChange = (search) => {
        const { name, value } = search.target;
        setSearchUsername({...searchUsername, [name]: value, });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if(searchUsername.name){
        try {
            await window.location.assign(`/username/${searchUsername.name}`);
            
        } catch (error) {
            console.log(error)
        }
        // } else {
        //     window.location.assign(`/username/*`);
        // }
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