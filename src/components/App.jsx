import imgDevice from 'assets/images/device.avif';
import DevicesList from './DevicesList/DevicesList';
import { useState } from 'react';
import DeviceForm from './DeviceForm/DeviceForm';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDevice,
  deleteDevice,
  toggleFavouriteDevice,
} from 'redux/deviceSlice';
import { closeModal, openModal } from 'redux/modalSlice';

export function App() {
  const dispatch = useDispatch();

  const devices = useSelector(store => store.devices.devices);
  const filter = useSelector(store => store.devices.filter);
  const modal = useSelector(store => store.modal);
  // const [devices, setDevices] = useState(devicesData);
  // const [filter, setFilter] = useState('');
  // const [modal, setModal] = useState({
  //   isOpen: false,
  //   modalData: null,
  // });

  const onOpenModal = modalData => {
    // setModal({
    //   isOpen: true,
    //   modalData: modalData,
    // });
    dispatch(openModal(modalData));
  };

  const onCloseModal = () => {
    // setModal({
    //   isOpen: false,
    //   modalData: null,
    // });
    dispatch(closeModal());
  };

  const onDeleteDevice = id => {
    dispatch(deleteDevice(id));
    // setDevices(devices.filter(device => device.id !== id));
  };

  const onAddDevice = data => {
    if (devices.some(({ title }) => data.title === title))
      return alert('This device have already been added');
    const newDevice = {
      ...data,
      coverImage: imgDevice,
      id: new Date().getMilliseconds(),
    };

    dispatch(addDevice(newDevice));
    // setDevices([...devices, newDevice]);
  };

  const onInputChange = event => {
    // setFilter(event.target.value);
  };

  const toggleFavorite = id => {
    dispatch(toggleFavouriteDevice(id));
    // console.log(id);
    // setDevices(
    //   devices.map(device => {
    //     if (device.id === id) {
    //       return {
    //         ...device,
    //         isFavorite: !device.isFavorite,
    //       };
    //     }
    //     return device;
    //   })
    // );
  };

  const filteredDevices = devices.filter(device =>
    device.title.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const sortedFilteredDevices = [...filteredDevices].sort(
    (a, b) => b.isFavorite - a.isFavorite
  );

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
        onOpenModal={onOpenModal}
        devices={sortedFilteredDevices}
        onDeleteDevice={onDeleteDevice}
        toggleFavorite={toggleFavorite}
      />
      {modal.isOpen && (
        <Modal onCloseModal={onCloseModal} modalData={modal.modalData} />
      )}
    </div>
  );
}
