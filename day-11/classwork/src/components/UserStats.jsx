import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserStats() {
  const { userData, loading , someNumber} = useContext(UserContext);

  if (loading) {
    return <div>Loading stats...</div>;
  }

  return (
    <div className='mt-4 p-4 bg-gray-100 rounded'>
      <h2 className='text-xl font-bold'>User Stats</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="text-center p-2 bg-white rounded shadow">
          <span className="block text-2xl font-bold">{userData?.followers || 0}</span>
          <span className="text-gray-600">Followers</span>
        </div>
        <div className="text-center p-2 bg-white rounded shadow">
          <span className="block text-2xl font-bold">{userData?.following || 0}</span>
          <span className="text-gray-600">Following</span>
          
        </div>
        <div className="text-center p-2 bg-white rounded shadow">
        <span className="text-gray-600">{someNumber}</span>
          
        </div>
     
      </div>
    </div>
  );
}

export default UserStats;
