import { useForm } from 'react-hook-form';

function OptimizedMain() {
  const form = useForm();

  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>Optmized Login</h1>
      {console.log('Rendering the  page ------------------')}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>User Name: </label>
          <input type='text' {...register('username')} />
        </div>

        <div>
          <label>Password </label>
          <input type='password' {...register('password')} />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}
export default OptimizedMain;
