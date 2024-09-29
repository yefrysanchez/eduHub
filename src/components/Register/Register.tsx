import { motion } from "framer-motion";
import { fadeUp } from "../../animations/animations";
import { FormEvent, useState } from "react";
import AlertError from "../Alerts/AlertError";

type FuncProp = {
  setIsRegistered: (isRegistered: boolean) => void;
};

const Register: React.FC<FuncProp> = ({ setIsRegistered }) => {

    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
        try {
          console.log("logged in")
        } catch (error) {
          setError(`${error}`)
        }
    }


  return (
    <motion.section variants={fadeUp} animate="enter" initial="initial" className="bg-gray-100 rounded-xl p-8 shadow-lg w-[500px]">
      <form onSubmit={handleSubmit} className="text-center mb-4">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <h2 className="mb-8 text-gray-700">Please complete all fields</h2>
        {error && <AlertError error={error}/>}

        <div className="md:flex gap-2 mb-4">
          <input
            className="w-full p-4 rounded-xl mb-4 md:mb-0 block md:w-1/2 "
            placeholder="Name"
            required
            type="text"
          />
          <input
            className="w-full p-4 rounded-xl block md:w-1/2"
            placeholder="Last name"
            required
            type="text"
          />
        </div>

        <input
          className="block w-full p-4 rounded-xl mb-4"
          placeholder="Username"
          required
          type="text"
        />

        <input
          className="block w-full p-4 rounded-xl mb-4"
          placeholder="Email"
          required
          type="email"
        />

        <input
          className="block w-full p-4 rounded-xl mb-4"
          placeholder="Password"
          required
          type="password"
        />

        <input
          className="block w-full p-4 rounded-xl mb-4"
          placeholder="Class Code"
          required
          type="text"
        />

        <input
          className="bg-blue-700 hover:bg-blue-900 text-xl duration-200 w-full p-4 rounded-xl font-bold text-white cursor-pointer"
          type="submit"
          value="Register"
        />
      </form>
      <div>
        <h2 className="text-center font-bold">
          Already a member?{" "}
          <span
            onClick={() => setIsRegistered(true)}
            className="text-blue-700 hover:underline cursor-pointer"
          >
            Login!
          </span>
        </h2>
      </div>
    </motion.section>
  );
};

export default Register;
