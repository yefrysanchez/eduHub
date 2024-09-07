
const Login = () => {
  return (
    <section className="bg-gray-100 rounded-xl p-8 shadow-lg">
        <form className="text-center mb-4">
            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
            <h2 className="mb-8 text-gray-700">Please enter your Login and your Password</h2>
            <div>
            <input className="block w-full p-4 rounded-xl mb-4" placeholder="Username or Email" required type="email" />
            <input className="block w-full p-4 rounded-xl mb-2" placeholder="Password" required type="password" />
            </div>
            <p className="text-sm text-blue-700 mb-4 text-end hover:underline cursor-pointer">Forgot password?</p>
            <input className="bg-blue-700 hover:bg-blue-900 text-xl duration-200 w-full p-4 rounded-xl font-bold text-white cursor-pointer" type="submit" value="Login" />
        </form>
        <div>
            <h2 className="text-center font-bold">
                Not a member yet? <span className="text-blue-700 hover:underline cursor-pointer">Register!</span>
            </h2>
        </div>
    </section>
  )
}

export default Login