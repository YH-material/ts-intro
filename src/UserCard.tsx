interface IUsercard {
  user: Usercard;
}

function UserCard({ user }: IUsercard) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserCard;
