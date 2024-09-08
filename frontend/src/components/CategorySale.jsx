import React, { useState, useEffect } from "react";
import "@/assets/css/CategorySale.css";
import b16 from "@/assets/banner/b16.png";
const CategorySale = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Đặt thời gian bắt đầu là 24 giờ (86400 giây)
    const initialTime = 86400; // 24 giờ = 86400 giây

    const updateTimer = () => {
      setTime((prevTime) => {
        let totalSeconds =
          prevTime.days * 86400 +
          prevTime.hours * 3600 +
          prevTime.minutes * 60 +
          prevTime.seconds;

        totalSeconds--;

        if (totalSeconds < 0) totalSeconds = initialTime; // Reset khi hết 24 giờ

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    };

    // Cập nhật bộ đếm mỗi giây
    const timer = setInterval(updateTimer, 1000);

    // Xóa bộ đếm khi component bị hủy
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="categorySale-container ">
      <div className="categorySale-content">
        <h3>Categories</h3>
        <h1>Enhance Your Music Experience</h1>
        <div className="categorySale-time">
          <div className="categorySale-hours">
            <p>
              {time.hours.toString().padStart(2, "0")} <br />
              Hours
            </p>
          </div>
          <div className="categorySale-days">
            <p>
              {time.days.toString().padStart(2, "0")} <br />
              Days
            </p>
          </div>
          <div className="categorySale-minutes">
            <p>
              {time.minutes.toString().padStart(2, "0")} <br />
              Minutes
            </p>
          </div>
          <div className="categorySale-seconds">
            <p>
              {time.seconds.toString().padStart(2, "0")} <br />
              Seconds
            </p>
          </div>
        </div>
        <button className="bg-[#db4444] text-white py-5 px-12 hover:bg-[#ac1515] rounded-md">
          Buy Now
        </button>
      </div>
      <div className="categorySale-img">
        <img src={b16} alt="" />
      </div>
    </div>
  );
};

export default CategorySale;
