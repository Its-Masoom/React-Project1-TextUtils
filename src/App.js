import "./App.css";
import Navbar from "./components/Navbar.js";
import Alert from "./components/Alert.js";
import TextForm from "./components/TextForm.js";
// import About from "./components/About.js";
import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route
            path="/"
            element={ */}
              <TextForm
                showalert={showAlert}
                heading="Please Enter your Text to Analyze"
                mode={Mode}
              />
            {/* } */}
          {/* /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
