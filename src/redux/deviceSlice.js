import { createSlice } from '@reduxjs/toolkit';
import imgDevice from 'assets/images/device.avif';
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

const INITIAL_STATE = {
  devices: devicesData,
  filter: '',
};

const devicesSlice = createSlice({
  // Ім'я слайсу
  name: 'devices',

  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addDevice(state, action) {
      state.devices = [...state.devices, action.payload];
    },
    deleteDevice(state, action) {
      state.devices = state.devices.filter(
        device => device.id !== action.payload
      );
    },
    toggleFavouriteDevice(state, action) {
      state.devices = state.devices.map(device => {
        if (device.id === action.payload) {
          return {
            ...device,
            isFavorite: !device.isFavorite,
          };
        }
        return device;
      });
    },
  },
});

// Генератори екшенів
export const { addDevice, deleteDevice, toggleFavouriteDevice } =
  devicesSlice.actions;
// Редюсер слайсу
export const deviceReducer = devicesSlice.reducer;
