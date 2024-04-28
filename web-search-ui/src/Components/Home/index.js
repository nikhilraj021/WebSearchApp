import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";
import './index.css';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [searchedText, setSearchedText] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get('http://localhost:3001/users');
            setUsers(res.data);
        }

        getUsers();
    }, []);

    useEffect(() => {
        const searchUsers = async () => {
            const res = await axios.get('http://localhost:3001/users?search='+searchedText);
            setUsers(res.data);
        }

        searchUsers();
    }, [searchedText]);


    const onInputChange = (value) =>{
        setSearchedText(value);
    }

    return (
        <>
            <h1>Web Search Application</h1>
            <SearchBar onInputChange={onInputChange} />
            <UsersList users={users} />
        </>
    )
}

export default Home;