const express = require('express');
const router = express.Router();
const FacultyProfile = require('../models/FacultyProfile');

// @route   POST api/faculty/profile
// @desc    Register a faculty profile
// @access  Public
router.post('/profile', async (req, res) => {
  const {
    name, mobileNumber, gender, dob, doj,
    address, designation, department, qualification,
    salary, married
  } = req.body;

  try {
    const newProfile = new FacultyProfile({
      name,
      mobileNumber,
      gender,
      dob,
      doj,
      address,
      designation,
      department,
      qualification,
      salary,
      married
    });

    const profile = await newProfile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;