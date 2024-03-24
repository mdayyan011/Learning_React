import { useEffect, useState } from 'react';

function Main() {
  let [userName, setUserName] = useState('');
  let [pass, setPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('UserName ' + userName);
  };
  return (
    <>
      <h1>Main Login</h1>
      {console.log('Rendering the  page ------------------')}
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name: </label>
          <input
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label>Password </label>
          <input
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}
export default Main;
