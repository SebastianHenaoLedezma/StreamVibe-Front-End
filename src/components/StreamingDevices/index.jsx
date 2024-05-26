import "./styles.sass";
import 'bootstrap/dist/css/bootstrap.min.css';

const StreamingDevices = ({ device }) => {
  return (
    <>
      <section className="devicesCard">
        <div className="devicesCard__description">
          <img src={device.img} alt="" />
          <h3 className="title">{device.title}</h3>
        </div>
        <p className="paragraph">{device.description}</p>
      </section>
    </>
  );
};

export default StreamingDevices;
