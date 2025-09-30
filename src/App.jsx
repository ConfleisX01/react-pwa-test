import { useState } from "react";
import "./App.css";
import UserData from "./components/UserData";
import UserResult from "./components/UserResult";

function App() {
  const [userName, setUserName] = useState("");
  const [userDate, setUserDate] = useState("");

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-base-300">
        <div className="card border bg-base-100 p-5 transition">
          <h1 className="text-2xl font-bold">Horoscopo React</h1>
          <UserData
            name={userName}
            date={userDate}
            setName={setUserName}
            setDate={setUserDate}
          />
          <UserResult name={userName} date={userDate} />
        </div>
      </div>
    </>
  );
}

export default App;
