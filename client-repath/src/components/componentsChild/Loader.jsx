import '../../assets/loader.css';

function Loader() {
  return (
    <div className="d-flex justify-content-center" style={{ height: '80vh' }}>
      <div className="loading-wrapper">
        <div className="bar one"></div>
        <div className="bar two"></div>
        <div className="bar three"></div>
      </div>
    </div>
  );
}

export default Loader;
