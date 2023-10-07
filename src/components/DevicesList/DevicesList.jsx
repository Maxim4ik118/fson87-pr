import DeviceCard from 'components/DeviceCard/DeviceCard';

const DevicesList = ({ devices, onDeleteDevice, toggleFavorite }) => {
  return (
    <div>
      {devices.map(
        ({ id, title, brand, price, type, coverImage, isFavorite }) => (
          <DeviceCard
            key={id}
            id={id}
            title={title}
            brand={brand}
            price={price}
            type={type}
            coverImage={coverImage}
            onDeleteDevice={onDeleteDevice}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        )
      )}
    </div>
  );
};

export default DevicesList;
