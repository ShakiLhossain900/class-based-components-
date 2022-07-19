import React from 'react';
import User from './User';

const Users = () => {
    const DUMMY_USERS = [
        { id: 'u1', name: 'Max' },
        { id: 'u2', name: 'Manuel' },
        { id: 'u3', name: 'Julie' },
      ];      

  const usersList = (
    <ul>
        {DUMMY_USERS.map((user) =>
        <User key={user.id} name={user.name}/>
        )}
    </ul>
  );

    return (
        <div>
            
        </div>
    );
};

export default Users;