import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for a user object
interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Update the state type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<User[]>('/api/users'); // Type response as an array of User
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
