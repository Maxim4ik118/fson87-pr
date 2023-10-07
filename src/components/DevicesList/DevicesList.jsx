import DeviceCard from 'components/DeviceCard/DeviceCard';

const DevicesList = ({ devices, onDeleteDevice, toggleFavorite, onOpenModal }) => {
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
            onOpenModal={ onOpenModal}
          />
        )
      )}
    </div>
  );
};

export default DevicesList;
