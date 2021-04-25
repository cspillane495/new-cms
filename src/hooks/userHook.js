import {useState} from 'react';

const useUser = () => {
    const [currentUser, setCurrentUser] = useState({})

    function setUser(obj) {
        setCurrentUser(obj)
        return 
    }
    return {
        currentUser,
        setUser,
    } 
};

export default useUser 