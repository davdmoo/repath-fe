import '../../assets/loader.css';

function Loader2() {
  return (
    <div className="d-flex justify-content-center" style={{ height: '20vh' }}>
      <div className="loading-wrapper" style={{ paddingBottom: '10vh' }}>
        <div className="bar one"></div>
        <div className="bar two"></div>
        <div className="bar three"></div>
      </div>
    </div>
  );
}

export default Loader2;
