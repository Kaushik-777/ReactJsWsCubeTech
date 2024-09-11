import React, { useState } from "react";
import "./ControlComponent.css";
import ControlComponentDataTable from "../Data/ControlComponentDataTable/ControlComponentDataTable";

const ControlComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone: "",
    message: "",
    index: "",
  });
  let [userData, setUserData] = useState([]);
  const getValue = (e) => {
    let oldData = { ...formData };
    let inputName = e.target.name;
    let inputValue = e.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };
  const handleSubmit = (e) => {
    let currentUserFormData = {
      username: formData.username,
      password: formData.password,
      phone: formData.phone,
      message: formData.message,
    };

    if (formData.index === "") {
      let checkFilterUser = userData.filter(
        (v) =>
          v.username === formData.username || v.password === formData.password
      );
      if (checkFilterUser.length === 1) {
        alert("Already exits.");
      } else {
        let oldUserData = [...userData, currentUserFormData];
        setUserData(oldUserData);
        setFormData({
          username: "",
          password: "",
          phone: "",
          message: "",
          index: "",
        });
      }
    }else {
      let editIndex = formData.index;
      let oldData = userData;
      oldData[editIndex]['username'] = formData.username;
      oldData[editIndex]['password'] = formData.password;
      oldData[editIndex]['phone'] = formData.phone;
      oldData[editIndex]['message'] = formData.message;
      setUserData(oldData);
      setFormData({
        username: "",
        password: "",
        phone: "",
        message: "",
        index: "",
      });
    }
    e.preventDefault();
  };



  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={getValue}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={getValue}
            value={formData.password}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="number"
            name="phone"
            onChange={getValue}
            value={formData.phone}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea id="" rows="3" name="message" onChange={getValue}  value={formData.message}/>
        </div>
        <button>{formData.index ? "Update" : "Save"}</button>
      </form>
      <ControlComponentDataTable
        userData={userData}
        setUserData={setUserData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default ControlComponent;
