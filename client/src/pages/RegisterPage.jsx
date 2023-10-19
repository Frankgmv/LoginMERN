import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signUp, isAuthenticated, errors: RegisterErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/task');
  }, [isAuthenticated, navigate])


  const onSubmitted = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-lg">
        {
          RegisterErrors.map((error, i) => {
            return (
              <div className="bg-red-500 text-white p-2 rounded-md mb-2" key={i}>
                {error}
              </div>
            )
          })
        }

        <form onSubmit={onSubmitted}>
          {
            errors.username && <p className="text-red-500">Username is required</p>
          }
          <input type="text" {...register('username', { required: true })} placeholder='username'
            className="w-full bg-zinc-600 text-white p-4 rounded-md my-2" />


          {
            errors.email && <p className="text-red-500">Email is required</p>
          }
          <input type="email" {...register('email', { required: true })} placeholder='email'
            className="w-full bg-zinc-600 text-white p-4 rounded-md my-2" />


          {
            errors.password && <p className="text-red-500">password is required</p>
          }
          <input type="password" {...register('password', { required: true })} placeholder='password'
            className="w-full bg-zinc-600 text-white p-4 rounded-md my-2" />
          <button type="submit" className="rounded-md px-4 bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 p-1">Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
