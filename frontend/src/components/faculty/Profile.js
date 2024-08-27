import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    gender: '',
    dob: '',
    doj: '',
    address: '',
    designation: '',
    department: '',
    qualification: '',
    salary: '',
    married: false, // Default as false
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    // Special handling for the "married" field
    if (name === 'married') {
      setFormData({ ...formData, [name]: value === 'Yes' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formData.mobileNumber) {
      alert("Mobile number is required");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/faculty/profile', formData);
      console.log(res.data); // You can handle the response as needed
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div style={styles.card}>
      <h2>Faculty Profile</h2>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={onChange} required />

        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={onChange} required />

        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={onChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={onChange} required />

        <label>Date of Joining:</label>
        <input type="date" name="doj" value={formData.doj} onChange={onChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={onChange} required />

        <label>Designation:</label>
        <input type="text" name="designation" value={formData.designation} onChange={onChange} required />

        <label>Department:</label>
        <input type="text" name="department" value={formData.department} onChange={onChange} required />

        <label>Qualification:</label>
        <input type="text" name="qualification" value={formData.qualification} onChange={onChange} required />

        <label>Salary:</label>
        <input type="number" name="salary" value={formData.salary} onChange={onChange} required />

        <label>Married:</label>
        <select name="married" value={formData.married ? 'Yes' : 'No'} onChange={onChange} required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit">Register</button>
        <button type="button" onClick={() => setFormData({
          name: '', mobileNumber: '', gender: '', dob: '', doj: '',
          address: '', designation: '', department: '', qualification: '',
          salary: '', married: false
        })}>Cancel</button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
};

export default Profile;