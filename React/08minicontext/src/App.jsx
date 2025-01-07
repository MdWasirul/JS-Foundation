
import "./App.css";
import UserContextProvider from "./context/UserContextprovider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Hitesh and Share its important </h1>
    </UserContextProvider>
  );
}

export default App;
