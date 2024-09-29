import { motion } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { fadeUp } from "../../animations/animations";
import { FormEvent, useState } from "react";
import AlertError from "../Alerts/AlertError";

type FuncProp = {
  setIsRegistered: (isRegistered: boolean) => void;
}


const Login: React.FC<FuncProp> = ({ setIsRegistered }) => {


const [error, setError] = useState<string | null>(null)

const handleSubmit = async (e:FormEvent) => {
  e.preventDefault()
    try {
      console.log("logged in")
    } catch (error) {
      setError(`${error}`)
    }
}

  return (
    <motion.section variants={fadeUp} animate="enter" initial="initial" className="bg-gray-100 rounded-xl p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="text-center mb-4">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <h2 className="mb-8 text-gray-700">
          Please enter your Login and your Password
        </h2>
        {error && <AlertError error={error}/>}

        <div className="mb-4 relative">
          <input
            className="block w-full p-4 rounded-xl"
            placeholder="Email"
            required
            type="email"
          />
          <div className="absolute top-3 right-2 text-3xl text-gray-400">
            <CiUser />
          </div>
        </div>
        <div className="mb-2 relative">
          <input
            className="block w-full p-4 rounded-xl"
            placeholder="Password"
            required
            type="password"
          />
          <div className="absolute top-3 right-2 text-3xl text-gray-400">
            <CiLock />
          </div>
        </div>

        <p className="text-sm text-blue-700 mb-4 text-end hover:underline cursor-pointer">
          Forgot password?
        </p>
        <input
          className="bg-blue-700 hover:bg-blue-900 text-xl duration-200 w-full p-4 rounded-xl font-bold text-white cursor-pointer"
          type="submit"
          value="Login"
        />
      </form>
      <div>
        <h2 className="text-center font-bold">
          Not a member yet?{" "}
          <span
            onClick={() => setIsRegistered(false)}
            className="text-blue-700 hover:underline cursor-pointer"
          >
            Register!
          </span>
        </h2>
      </div>
    </motion.section>
  );
};

export default Login;
