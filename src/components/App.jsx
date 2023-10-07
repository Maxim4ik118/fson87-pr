import imgDevice from 'assets/images/device.avif';
import DevicesList from './DevicesList/DevicesList';
import { useState } from 'react';
import DeviceForm from './DeviceForm/DeviceForm';
import Modal from './Modal/Modal';

const devicesData = [
  {
    id: 1,
    title: 'Smartphone',
    brand: 'Apple',
    price: 999.99,
    type: 'Mobile',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Laptop',
    brand: 'Dell',
    price: 1299.99,
    type: 'Computer',
    coverImage: imgDevice,
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Smartwatch',
    brand: 'Samsung',
    price: 249.99,
    type: 'Wearable',
    coverImage: imgDevice,
    isFavorite: true,
  },
  {
    id: 4,
    title: 'Tablet',
    brand: 'Amazon',
    price: 199.99,
    type: 'Mobile',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 5,
    title: 'TV',
    brand: 'Sony',
    price: 799.99,
    type: 'Electronics',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 6,
    title: 'Gaming Console',
    brand: 'Microsoft',
    price: 399.99,
    type: 'Gaming',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 7,
    title: 'Camera',
    brand: 'Canon',
    price: 599.99,
    type: 'Photography',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 8,
    title: 'Headphones',
    brand: 'Sony',
    price: 149.99,
    type: 'Audio',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 9,
    title: 'Router',
    brand: 'Linksys',
    price: 79.99,
    type: 'Networking',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 10,
    title: 'Fitness Tracker',
    brand: 'Fitbit',
    price: 79.99,
    type: 'Wearable',
    coverImage: imgDevice,
    isFavorite: true,
  },
];

export function App() {
  const [devices, setDevices] = useState(devicesData);
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState({
    isOpen: false,
    modalData: null,
  });

  const onOpenModal = (modalData) => {
    setModal({
      isOpen: true,
      modalData: modalData,
    });
  }

  const onCloseModal = () => { 
    setModal({
      isOpen: false,
    modalData: null
    })
  }

  const onDeleteDevice = id => {
    setDevices(devices.filter(device => device.id !== id));
  };

  const onAddDevice = data => {
    if (devices.some(({ title }) => data.title === title))
      return alert('This device have already been added');
    console.log(data);
    const newDevice = {
      ...data,
      coverImage: imgDevice,
      id: new Date().getMilliseconds(),
    };

    setDevices([...devices, newDevice]);
  };

  const onInputChange = event => {
    setFilter(event.target.value);
  };

  const toggleFavorite = id => {
    // console.log(id);
    setDevices(
      devices.map(device => {
        if (device.id === id) {
          return {
            ...device,
            isFavorite: !device.isFavorite,
          };
        }
        return device;
      })
    );
  };

  const filteredDevices = devices.filter(device =>
    device.title.toLowerCase().includes(filter.toLowerCase().trim())
  );

const sortedFilteredDevices = [...filteredDevices].sort((a, b) => b.isFavorite - a.isFavorite)

  return (
    <div>
      <h1>Devices store</h1>
      <DeviceForm onAddDevice={onAddDevice} />
      <label>
        <p>Search by title</p>
        <input
          type="text"
          placeholder="Enter search title"
          value={filter}
          onChange={onInputChange}
        />
      </label>
      <DevicesList
        onOpenModal={ onOpenModal}
        devices={sortedFilteredDevices}
        onDeleteDevice={onDeleteDevice}
        toggleFavorite={toggleFavorite}

      />
      {modal.isOpen && <Modal
        onCloseModal={onCloseModal}
        modalData={modal.modalData}
      />}

    </div>
  );
}
