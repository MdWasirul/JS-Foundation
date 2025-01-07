import "./App.css";
import Login from "./components/Login";
import Profile from "./components/profile";

import UserContextProvider from "./context/UserContextprovider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Hitesh and Share its important </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
