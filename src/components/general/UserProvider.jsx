import React, { createContext, useState } from 'react';
export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [usersData, setUsersData] = useState([
      { 
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        age: '32',
        phone: '+3378956423'
      },
      { 
        id: 2,
        name: 'Ben',
        email: 'ben@gmail.com',
        age: '64',
        phone: '+337894589423'
      },
      { 
        id: 3,
        name: 'Emily',
        email: 'emily@gmail.com',
        age: '22',
        phone: '+3378956423'
      }
    ]);

    const [initialUserValue, setInitialUserValue] = useState({
      id: new Date(),
      name: '',
      email: '',
      age: '',
      phone: ''

    })

    return (
        <UserContext.Provider value={{ usersData, setUsersData, initialUserValue, setInitialUserValue, isLoggedIn, setIsLoggedIn}}>
          {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
