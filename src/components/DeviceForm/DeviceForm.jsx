import { Component } from 'react';

export default class DeviceForm extends Component {
  state = {
    title: '',
    brand: '',
    price: '',
    type: '',
  };

  onChangeInputValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const data = {
      title: this.state.title,
      brand: this.state.brand,
      price: this.state.price,
      type: this.state.type,
    };
    this.props.onAddDevice(data);
    this.setState({ title: '', brand: '', price: '', type: '' });
  };

  render() {
    const { title, brand, price, type } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            <p>Title: </p>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChangeInputValue}
              required
            />
          </label>
          <label>
            <p>Brand: </p>
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={this.onChangeInputValue}
              required
            />
          </label>
          <label>
            <p>Price: </p>
            <input
              type="text"
              name="price"
              value={price}
              onChange={this.onChangeInputValue}
              required
            />
          </label>
          <label>
            <p>Type: </p>
            <input
              type="text"
              name="type"
              value={type}
              onChange={this.onChangeInputValue}
              required
            />
          </label>
          <br />
          <button type="submit">Add device</button>
        </form>
      </div>
    );
  }
}
