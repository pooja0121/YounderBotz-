import React, { useState } from "react";
import "./App.css";

function FormPage({ formData, setFormData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [localData, setLocalData] = useState(formData);

  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (value && !/^[a-zA-Z\s]+$/.test(value)) {
        error = "Name must contain only letters and spaces.";
      }
    } else if (name === "schooling") {
      if (value && !/^[a-zA-Z\s]+$/.test(value)) {
        error = "Schooling must contain only letters and spaces.";
      }
    } else if (name === "degree") {
      if (value && !/^[a-zA-Z\s]+$/.test(value)) {
        error = "Degree must contain only letters and spaces.";
      }
    } else if (name === "age") {
      if (value && !/^\d+$/.test(value)) {
        error = "Age must be a number.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;
    if (name === "name" || name === "schooling" || name === "degree") {
      filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === "age") {
      filteredValue = value.replace(/[^0-9]/g, '');
    }
    const error = validateField(name, filteredValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    setLocalData(prev => ({
      ...prev,
      [name]: filteredValue
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocalData(prev => ({
        ...prev,
        profileImage: URL.createObjectURL(file)
      }));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setLocalData(formData);
    setErrors({});
  };

  const handleSave = () => {
    const hasErrors = Object.values(errors).some(error => error !== "");
    if (!hasErrors) {
      setFormData(localData);
      setIsEditing(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Details</h1>

      {!isEditing ? (
        <div>
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={localData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="schooling">Schooling:</label>
              <input
                type="text"
                id="schooling"
                name="schooling"
                value={localData.schooling}
                onChange={handleChange}
              />
              {errors.schooling && <span className="error">{errors.schooling}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="degree">Degree:</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={localData.degree}
                onChange={handleChange}
              />
              {errors.degree && <span className="error">{errors.degree}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={localData.age}
                onChange={handleChange}
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="profileImage">Profile Picture:</label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="aboutMe">About Me:</label>
              <textarea
                id="aboutMe"
                name="aboutMe"
                value={localData.aboutMe}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </form>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      )}

      <div className="form-display">
        <h2>Bio Data</h2>
        <table className="bio-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{formData.name}</td>
            </tr>
            <tr>
              <th>Schooling</th>
              <td>{formData.schooling}</td>
            </tr>
            <tr>
              <th>Degree</th>
              <td>{formData.degree}</td>
            </tr>
          </tbody>
        </table>

        <h2>About Me</h2>
        {formData.profileImage && <img src={formData.profileImage} alt="Profile" className="profile-img" />}
        <div className="about-text">
          <p>{formData.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
