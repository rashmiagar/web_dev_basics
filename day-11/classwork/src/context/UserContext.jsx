import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [searchUsername, setSearchUsername] = useState("octocat");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [someNumber, setSomeNumber]=useState(0)
  
  const handleIncrease = () =>{
    setSomeNumber(someNumber+1)
  }


  const fetchGitHubUser = async (username) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data)
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const updateSearchUsername = (newUsername) => {
    setSearchUsername(newUsername);
    fetchGitHubUser(newUsername);
  };

  return (
    <UserContext.Provider
      value={{
        searchUsername,
        userData,
        loading,
        updateSearchUsername,
        fetchGitHubUser,
        someNumber,
        handleIncrease
      }}>
      {children}
    </UserContext.Provider>
  );
};
