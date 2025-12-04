import React, { useState } from "react";
import "./App.css";

function AboutPage({ formData, setFormData }) {
  const [image, setImage] = useState(null);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setFormData(prev => ({
      ...prev,
      profileImage: image
    }));
    setImage(null);
  };

  return (
    <div>
      <div className="about-container">
        <h1>About Me</h1>

        {/* Profile Upload Section */}
        <div className="profile-section">
          <label className="upload-btn">
            Upload Profile Picture
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>

          {/* Image Preview */}
          {image && (
            <div>
              <img src={image} alt="Profile Preview" className="profile-img" />
              <button className="save-btn" onClick={handleSave}>Save</button>
            </div>
          )}

          {/* Saved Image */}
          {formData.profileImage && !image && <img src={formData.profileImage} alt="Profile" className="profile-img" />}
        </div>

        {/* About Me as full paragraph */}
        <div className="about-text">
          <p>{formData.aboutMe}</p>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;

