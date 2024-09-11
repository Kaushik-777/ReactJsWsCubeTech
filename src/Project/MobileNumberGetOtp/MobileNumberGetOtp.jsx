import React, { useState } from "react";

const MobileNumberGetOtp = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const sendOtp = async () => {
    if (mobileNumber) {
      const response = await fetch("https://api.example.com/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber }),
      });

      const result = await response.json();
      if (result.success) {
        setIsOtpSent(true);
        alert("OTP sent successfuly");
      } else {
        alert("Failed to send OTP");
      }
    } else {
      alert("Please enter a valid mobile number");
    }
  };

  const verifyOtp = async () => {
    if (otp) {
      const response = await fetch("https://api.example.com/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber }),
      });
      const result = await response.json();
      if (result.success) {
        alert("OTP verify successfully");
      } else {
        alert("Invalid OTP");
      }
    } else {
      alert("Please enter the OTP");
    }
  };
  return (
    <div>
      <h2>Enter your mobile number get OTP</h2>
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={sendOtp}>Get Otp</button>

      {isOtpSent && (
        <div>
          <h2>Enter the otp</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter Otp"
          />
          <button onClick={verifyOtp}>Verify Otp</button>
        </div>
      )}
    </div>
  );
};

export default MobileNumberGetOtp;
