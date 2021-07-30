import bg from "../../../src/assets/misc/sky.mp4";

const Background = () => {
  return (
    <div>
      <video autoPlay muted loop className="video-bg">
        <source src={bg} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
