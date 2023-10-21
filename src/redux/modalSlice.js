import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isOpen: false,
  modalData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,

  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
