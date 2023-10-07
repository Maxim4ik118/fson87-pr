import { useState } from 'react';

export default function DeviceForm({ onAddDevice }) {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  const onChangeInputValue = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'brand':
        setBrand(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const data = {
      title,
      brand,
      price,
      type,
    };
    onAddDevice(data);

    setTitle('');
    setBrand('');
    setPrice('');
    setType('');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <p>Title: </p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeInputValue}
            required
          />
        </label>
        <label>
          <p>Brand: </p>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={onChangeInputValue}
            required
          />
        </label>
        <label>
          <p>Price: </p>
          <input
            type="text"
            name="price"
            value={price}
            onChange={onChangeInputValue}
            required
          />
        </label>
        <label>
          <p>Type: </p>
          <input
            type="text"
            name="type"
            value={type}
            onChange={onChangeInputValue}
            required
          />
        </label>
        <br />
        <button type="submit">Add device</button>
      </form>
    </div>
  );
}
