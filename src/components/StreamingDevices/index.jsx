import "./styles.sass";
import 'bootstrap/dist/css/bootstrap.min.css';

const StreamingDevices = ({ device }) => {
  return (
    <>
      <section className="devicesCard flex flex-col">
        <div className="pt-4 ps-4">
          <img src={device.img} alt="" className="h-[72px] w-[72px] float-left mr-3"/>
          <h3 className="title ps-1 font-bold text-lg mt-3">{device.title}</h3>
        </div>
        <p className="paragraph">{device.description}</p>
      </section>
    </>
  );
};

export default StreamingDevices;
