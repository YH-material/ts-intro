import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState<Usercard[]>([]);
  const [usersHidden, setUsersHidden] = useState(false);

  useEffect(() => {
    // Mock an API call to get user data.
    setTimeout(() => {
      setUsers([
        {
          name: "John Doe",
          email: "johndoe@example.com",
          phone: "123-456-7890",
        },
        {
          name: "Adam Smith",
          email: "adamsmith@example.com",
          phone: "123-456-7890",
        },
        {
          name: "Kelly Evans",
          email: "kellyevans@example.com",
          phone: "123-456-7890",
        },
      ]);
    }, 1000);
  }, []);

  if (!users) {
    return <p>Loading..</p>;
  }

  const userCards = users.map((user) => <UserCard user={user} />);

  return (
    <div>
      {usersHidden && userCards}
      <button onClick={() => setUsersHidden(!usersHidden)}>
        Toggle user cards
      </button>
      {!usersHidden && <p>All users currently hidden</p>}
    </div>
  );
}

export default App;
