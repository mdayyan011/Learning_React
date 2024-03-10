import { useState } from 'react';

const Create = () => {
  let [isClicked, setIsClicked] = useState(true);
  let [passwordType, setPasswordType] = useState('password');

  let [price, setPrice] = useState(0);
  let [name, setName] = useState('');
  let [desc, setdesc] = useState('');
  let [imgSrc, setimgSrc] = useState('');
  let [category, setcategory] = useState('');

  const changeVisiblity = () => {
    setIsClicked(!isClicked);
  };
  const changePasswordType = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else if (passwordType === 'text') {
      setPasswordType('password');
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title: name,
        price: price,
        description: desc,
        image: imgSrc,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <div className='create-container'>
        <h1 className='create-heading'>Create</h1>
        <button className='create-btn' onClick={changeVisiblity}>
          +
        </button>
      </div>
      {isClicked && (
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <label className='label-txt'>Product Name</label>
              <input
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='input-container'>
              <label className='label-txt'>Product Price</label>
              <input
                type='number'
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div className='input-container'>
              <label className='label-txt'>Product Description</label>
              <input
                type='text'
                value={desc}
                onChange={(event) => setdesc(event.target.value)}
              />
            </div>

            <div className='input-container'>
              <label className='label-txt'>Product Image</label>
              <input
                type='text'
                value={imgSrc}
                onChange={(event) => setimgSrc(event.target.value)}
              />
            </div>
            <div className='input-container'>
              <label className='label-txt'>Product Category</label>
              <select onChange={(event) => setcategory(event.target.value)}>
                <option value='electronic'>Electronic</option>
                <option value='abc'>abc</option>
                <option value='exs'>exs</option>
                <option value='pqr'>pqr</option>
              </select>
            </div>

            <button type='submit' className='create-btn'>
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Create;
