import React from "react";
import UserInfo from "./UserInfo";

const Card = ({ avatar, name, bio, followers, following }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
      <img className='w-32 h-32 rounded-full mx-auto' src={avatar} alt={name} />
      <UserInfo
        name={name}
        bio={bio}
        followers={followers}
        following={following}
      />
    </div>
  );
};

export default Card;
