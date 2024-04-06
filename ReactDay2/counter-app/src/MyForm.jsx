import { useState } from 'react';
import { useForm } from 'react-hook-form';
export const MyForm = () => {
  const form = useForm(); // useForm reacts an obj that we catch in variable form

  const { register, handleSubmit } = form;
  const onSubmit = (data) => {
    console.log(data);
  };
  // setInterval(() => alert('hey'), 1000);
  return (
    <>
      <p>My Form</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>UserName</label>
          <input type='text' {...register('username')} />
        </div>

        <div>
          <label>Password</label>
          <input type='password' {...register('pass')} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
