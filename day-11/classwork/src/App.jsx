import { useContext, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { UserContext, UserProvider } from "./context/UserContext";
import SearchUser from "./components/SearchUser";
import DuplicateComponent from "./components/DuplicateComponent";

function MainContent() {
  const { userData, loading, fetchGitHubUser ,handleIncrease } = useContext(UserContext);

  const [hidden,setHidden]=useState(true)

  useEffect(() => {
    fetchGitHubUser("octocat");
  }, []);

  return (
    hidden && <div className='p-4'>
      <SearchUser />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-4">
         <Card
          avatar={userData?.avatar_url}
          name={userData?.name}
          bio={userData?.bio}
          followers={userData?.followers}
          following={userData?.following}
        />
        <DuplicateComponent/>
        <button
         className="px-4 bg-blue-500 rounded-2xl cursor-pointer"
        onClick={handleIncrease}>
        Increase
       </button>
        </div>
       
      )}
    </div>
  );
}

function App() {
  return (
    
    <UserProvider>
      <MainContent />
      
    </UserProvider>
  );
}

export default App;
