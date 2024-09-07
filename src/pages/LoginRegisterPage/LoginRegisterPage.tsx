import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";


const LoginRegisterPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="bg-blue-800 min-h-screen flex justify-center items-center p-2">
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default LoginRegisterPage;
