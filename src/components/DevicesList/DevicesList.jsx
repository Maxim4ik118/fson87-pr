import DeviceCard from 'components/DeviceCard/DeviceCard';

const DevicesList = ({ devices, onDeleteDevice }) => {
  return (
    <div>
      {devices.map(({ id, title, brand, price, type, coverImage }) => (
        <DeviceCard
          key={id}
          id={id}
          title={title}
          brand={brand}
          price={price}
          type={type}
          coverImage={coverImage}
          onDeleteDevice={onDeleteDevice}
        />
      ))}
    </div>
  );
};

export default DevicesList;
