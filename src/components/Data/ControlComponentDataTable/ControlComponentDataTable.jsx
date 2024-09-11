import React from "react";
import { Table } from "react-bootstrap";
import './ControlComponentDataTable.css';
const ControlComponentDataTable = (props) => {
  let {userData, setUserData,setFormData} = props;

  const deleteRow = (indexNumber) => {
    let filterData = userData.filter((v, i) => i !== indexNumber);
    setUserData(filterData);
  }
  const editRow = (indexNumber) => {
    let editData = userData.filter((v, i) => i === indexNumber)[0];
    editData['index'] = indexNumber;
    setFormData(editData);
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length >= 1 ? (
           userData.map((obj, index) => {
            return (
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{obj.username}</td>
                <td>{obj.password}</td>
                <td>{obj.phone}</td>
                <td>{obj.message}</td>
                <td>
                  <button className="delete sameBtn" onClick={() => deleteRow(index)}>Delete</button>
                  <button className="edit sameBtn" onClick={() => editRow(index)}>Edit</button>
                </td>
              </tr>
            )
           })
          ) : (
            <tr>
              <td colSpan={6}>No Data Found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ControlComponentDataTable;
