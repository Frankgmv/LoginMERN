import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitted = handleSubmit(async (data) => {
    signIn(data);
  })

  const {signIn, errors: signInErrors } = useAuth();

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">

      <div className="bg-zinc-800 max-w-md p-10 rounded-lg">
      {
        signInErrors.map((error, i) => {
          return (
            <div className="bg-red-500 text-white p-2 rounded-md mb-2" key={i}>
              {error}
            </div>
          )
        })
      }

        <form onSubmit={onSubmitted}>
          {
            errors.email && <p className="bg-red-600 text-white rounded-md">Email is required</p>
          }
          <input type="email" {...register('email', { required: true })} placeholder="Email"
            className="w-full bg-zinc-600  text-white p-4 rounded-md my-2" />

          {
            errors.password && <p className="bg-red-600 text-white rounded-md">Password is required</p>
          }
          <input type="password" {...register('password', { required: true })} placeholder="Password"
            className="w-full bg-zinc-600  text-white p-4 rounded-md my-2" />

          <button type="submit" className="bg-blue-500 text-white px-5 py-1 my-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
