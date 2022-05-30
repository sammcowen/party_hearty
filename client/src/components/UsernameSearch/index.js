import React, { useState } from 'react';

function UsernameSearch() {

    
    const [searchQuery, setSearchQuery] = useState('');
    const searchUserPage = () => {
        window.location.replace('/')
    };

    const handleChange = (search) => {
        setSearchQuery({...searchQuery,[search.target.name]: search.target.value });
    }

    const handleSubmit = async () => {
        try {
            await searchUserPage();
            
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className='' name="username" placeholder='Input Username' 
                        value={searchQuery.name} onChange={handleChange} />
                <button type='submit' className=''>Search</button>
            </form>
        </div>
    )
}

export default UsernameSearch;