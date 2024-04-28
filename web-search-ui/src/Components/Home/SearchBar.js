import { useState } from 'react';
import './SearchBar.css'
import { CiSearch } from "react-icons/ci";

const SeachBar = ({ onInputChange }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <div className="search-bar">
                <input type="search" placeholder="Search user" onChange={(e) => {
                    setSearchValue(e.target.value);
                    onInputChange(e.target.value);
                }} />
                {
                    searchValue === '' ? <CiSearch /> : ''
                }
            </div>
        </>
    )
}

export default SeachBar;