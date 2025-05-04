import UserStats from "./UserStats";

const UserInfo = ({ name, bio, followers, following }) => {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-bold'>{name}</h2>
      <p className='mt-2'>{bio}</p>
      <UserStats followers={followers} following={following} />
    </div>
  );
};

export default UserInfo;
