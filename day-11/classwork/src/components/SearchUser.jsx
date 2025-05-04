import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function SearchUser() {
  const { searchUsername, updateSearchUsername } = useContext(UserContext);

  return (
    <div className='mb-4'>
      <input
        type='text'
        value={searchUsername}
        onChange={(e) => updateSearchUsername(e.target.value)}
        placeholder='Enter GitHub username'
        className='p-2 border rounded'
      />
    </div>
  );
}

export default SearchUser;
