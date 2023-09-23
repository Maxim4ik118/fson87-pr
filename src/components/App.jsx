import imgDevice from 'assets/images/device.avif';
import DevicesList from './DevicesList/DevicesList';
import { Component } from 'react';
import DeviceForm from './DeviceForm/DeviceForm';

const devices = [
  {
    id: 1,
    title: 'Smartphone',
    brand: 'Apple',
    price: 999.99,
    type: 'Mobile',
    coverImage: imgDevice,
  },
  {
    id: 2,
    title: 'Laptop',
    brand: 'Dell',
    price: 1299.99,
    type: 'Computer',
    coverImage: imgDevice,
  },
  {
    id: 3,
    title: 'Smartwatch',
    brand: 'Samsung',
    price: 249.99,
    type: 'Wearable',
    coverImage: imgDevice,
  },
  {
    id: 4,
    title: 'Tablet',
    brand: 'Amazon',
    price: 199.99,
    type: 'Mobile',
    coverImage: imgDevice,
  },
  {
    id: 5,
    title: 'TV',
    brand: 'Sony',
    price: 799.99,
    type: 'Electronics',
    coverImage: imgDevice,
  },
  {
    id: 6,
    title: 'Gaming Console',
    brand: 'Microsoft',
    price: 399.99,
    type: 'Gaming',
    coverImage: imgDevice,
  },
  {
    id: 7,
    title: 'Camera',
    brand: 'Canon',
    price: 599.99,
    type: 'Photography',
    coverImage: imgDevice,
  },
  {
    id: 8,
    title: 'Headphones',
    brand: 'Sony',
    price: 149.99,
    type: 'Audio',
    coverImage: imgDevice,
  },
  {
    id: 9,
    title: 'Router',
    brand: 'Linksys',
    price: 79.99,
    type: 'Networking',
    coverImage: imgDevice,
  },
  {
    id: 10,
    title: 'Fitness Tracker',
    brand: 'Fitbit',
    price: 79.99,
    type: 'Wearable',
    coverImage: imgDevice,
  },
];

export class App extends Component {
  state = {
    devices: devices,
    filter: '',
  };

  onDeleteDevice = id => {
    this.setState({
      devices: this.state.devices.filter(device => device.id !== id),
    });
  };

  onAddDevice = data => {
    if (this.state.devices.some(({ title }) => data.title === title))
      return alert('This device have alredy been added');
    console.log(data);
    const newDevice = {
      ...data,
      coverImage: imgDevice,
      id: new Date().getMilliseconds(),
    };
    this.setState({ devices: [...this.state.devices, newDevice] });
  };

  onIputChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredDevices = this.state.devices.filter(device =>
      device.title
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );
    return (
      <div>
        <h1>Devices store</h1>
        <DeviceForm onAddDevice={this.onAddDevice} />
        <label>
          <p>Search by title</p>
          <input
            type="text"
            placeholder="Enter search title"
            value={this.state.filter}
            onChange={this.onIputChange}
          />
        </label>
        <DevicesList
          devices={filteredDevices}
          onDeleteDevice={this.onDeleteDevice}
        />
      </div>
    );
  }
}
