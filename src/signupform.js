import React from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" ref={register({ required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
