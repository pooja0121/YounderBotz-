// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from "react";
import BioPage from "./BioPage";
import AboutPage from "./AboutPage";
import FormPage from "./FormPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [formData, setFormData] = useState({
    name: "Pooja",
    schooling: "ABC Matriculation School",
    degree: "Bachelor of Computer Science",
    age: "20",
    profileImage: null,
    aboutMe: "I am a passionate learner and aspiring developer. I love creating web applications using HTML, CSS, and JavaScript. I enjoy solving problems and improving my skills every day."
  });

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("about"); }}>About Me</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("form"); }}>Form</a></li>
        </ul>
      </nav>

      {page === "home" && <BioPage formData={formData} />}
      {page === "about" && <AboutPage formData={formData} setFormData={setFormData} />}
      {page === "form" && <FormPage formData={formData} setFormData={setFormData} />}
    </>
  );
}

export default App;

