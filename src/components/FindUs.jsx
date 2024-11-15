import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item btn-outline justify-start"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item btn-outline justify-start"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item btn-outline justify-start"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
