const DeviceCard = ({
  id,
  title,
  brand,
  price,
  type,
  coverImage,
  onDeleteDevice,
}) => {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{type}</p>
      <p>{price}</p>
      <button onClick={() => onDeleteDevice(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default DeviceCard;
