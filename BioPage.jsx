import React from "react";

function BioPage({ formData }) {
  return (
    <div>
      {/* Page wrapper (no full screen empty space) */}
      <div className="page-wrapper">
        <div className="container">

          <h1>Bio Data</h1>

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

              <tr>
                <th>Age</th>
                <td>{formData.age}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
}

export default BioPage;
