import { FcLike } from 'react-icons/fc';
import { StyledDeviceCard } from './DeviceCard.styled';
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
}) => {
  return (
    <StyledDeviceCard>
      <img src={coverImage} alt={title} className="image" />
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{type}</p>
      <p>{price}</p>
      <button onClick={() => onDeleteDevice(id)} type="button">
        Delete
      </button>
      <button type="button" onClick={() => toggleFavorite(id)}>
        <FcLike className={`icon-like ${isFavorite ? 'liked' : ''} `} />
      </button>
    </StyledDeviceCard>
  );
};

export default DeviceCard;
