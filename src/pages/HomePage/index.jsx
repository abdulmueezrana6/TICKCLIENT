import React, { useState,useEffect} from "react";
import MyPopup from "../../components/popup";



const HomePage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const setLocaltion = async () => {
      try {
        fetch("https://ipinfo.io/json").then(d => d.json()).then(d => {
          localStorage.setItem(
            "location",JSON.stringify({ IP: d.ip, country: d.country, city: d.city})
          );
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLocaltion();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <img src="img/sms.png" />
      <div className="card-text">
          <p className="card-type">Participation Request</p>
<h5 style={{fontsize:'10px', fontweight:'bold', color:'#1c1e21', margin:'20px 0'}}>
  Confirming your eligibility to join the program
</h5>
          <p>Please make sure to provide the required information below. Missing details may delay the processing of your request.</p>
          <div className="btn-wrapper">
              <div onClick={handleSubmit} id="start" className="button fb-blue w-100">
                 Submit Request
              </div>
          </div>
      </div>
      <MyPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
);
}

export default HomePage;
