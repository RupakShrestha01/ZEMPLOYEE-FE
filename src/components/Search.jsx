import React, { useEffect } from 'react';
import '../styles/search.css';
import { useState } from 'react';
import axios from 'axios';
export const Search = () => {
  const [employee, setEmployee] = useState('');
  const [department, setDepartment] = useState('');
  const [jsonData, setJsonData] = useState([]);

  const departData = sessionStorage.getItem('department');
  const departResult = JSON.parse(departData);

  const empData = sessionStorage.getItem('employee');
  const empResult = JSON.parse(empData);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8080/employee/search?employee=${employee}`
      );
      setJsonData(res.data);
      console.log(res.data);
    };
    fetchData();
  }, [employee]);

  return (
    <>
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            className="employee"
            value={employee}
            onChange={(e) => setEmployee(e.target.value.toLowerCase())}
            placeholder="Employee name"
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="department"
          >
            {departResult.map((item) => (
              <option key={item.id} value={item.departName}>
                {item.departName}
              </option>
            ))}
          </select>
          <input type="submit" className="submit-btn" />
        </form>
      </div>

      {jsonData.map((item) => (
        <div className="emp-detail" key={item.id}>
          <div className="emp-info">
            <h1 className="emp-info-name">
              {item.firstName} {item.lastName}
            </h1>
            <p className="emp-info-post">{item.designation}</p>
          </div>
          <img src="images/p1.svg" alt="background" className="current-emp" />
          <div className="Employee-wrapper">
            <div className="Employee-Flex">
              <div>
                <h2 className="Employee-Flex-heading">Emplopyee Details</h2>
                <div className="Employee-Flex-detail">
                  <p className="Employee-Flex-gender">Gender: {item.gender}</p>
                  <p className="Employee-Flex-dob">Date of birth: 08/03/2002</p>
                  <p className="Employee-Flex-country">
                    Nationality: {item.nationality}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="Employee-Flex-cheading">Contact Details</h2>
                <div className="Employee-Flex-detail">
                  <p className="Employee-Flex-number">
                    Phone number: {item.phoneNumber}
                  </p>
                  <p className="Employee-Flex-email">
                    Email address: {item.email}
                  </p>
                  <p className="Employee-Flex-address">
                    Permanent address: {item.address}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="Sub-employee-heading">Subordinate</h2>

            <div className="Sub-employee">
              <div className="Sub-employee-item">
                <img src="images/p2.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
              <div className="Sub-employee-item">
                <img src="images/p3.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
              <div className="Sub-employee-item">
                <img src="images/p4.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
              <div className="Sub-employee-item">
                <img src="images/p5.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
              <div className="Sub-employee-item">
                <img src="images/p6.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
              <div className="Sub-employee-item">
                <img src="images/p7.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
              <div className="Sub-employee-item">
                <img src="images/p8.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
              <div className="Sub-employee-item">
                <img src="images/p9.svg" alt="background" className="emp-img" />
                <div className="Sub-employee-item-detail">
                  <h2 className="Sub-employee-item-detail-name">Anil Regmi</h2>
                  <p className="Sub-employee-item-detail-post">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Search;
