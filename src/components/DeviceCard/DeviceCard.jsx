import { FcLike } from 'react-icons/fc';
import { StyledDeviceCard } from './DeviceCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelEditingMode,
  toggleEditingMode,
  updateDevice,
} from 'redux/deviceSlice';
import DeviceForm from 'components/DeviceForm/DeviceForm';
const DeviceCard = ({
  id,
  title,
  brand,
  price,
  type,
  coverImage,
  onDeleteDevice,
  toggleFavorite,
  isFavorite,
  onOpenModal,
}) => {
  const dispatch = useDispatch();

  const editingCardIds = useSelector(state => state.devices.isEditing);

  const isEditingCard = editingCardIds.includes(id);

  const editCard = () => {
    dispatch(toggleEditingMode(id));
  };

  const cancelEdit = () => {
    dispatch(cancelEditingMode(id));
  };

  const onUpdate = deviceData => {
    const deviceDataWithId = {
      id,
      ...deviceData,
    };
    dispatch(updateDevice(deviceDataWithId));
    cancelEdit();
  };

  return (
    <StyledDeviceCard>
      <img src={coverImage} alt={title} className="image" />
      {isEditingCard ? (
        <DeviceForm onAddDevice={onUpdate} btnText={'Save'} />
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{brand}</p>
          <p>{type}</p>
          <p>{price}</p>
        </div>
      )}
      <button onClick={() => onDeleteDevice(id)} type="button">
        Delete
      </button>
      {!isEditingCard && (
        <button type="button" onClick={() => toggleFavorite(id)}>
          <FcLike className={`icon-like ${isFavorite ? 'liked' : ''} `} />
        </button>
      )}
      <button type="button" onClick={() => onOpenModal(title)}>
        See details
      </button>
      {isEditingCard ? (
        <button type="button" onClick={cancelEdit}>
          Cancel Edit
        </button>
      ) : (
        <button type="button" onClick={editCard}>
          Edit
        </button>
      )}
    </StyledDeviceCard>
  );
};

export default DeviceCard;
