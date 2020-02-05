import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route} from "react-router-dom";

import Main from "./components/main.component"
// import Hello from "./components/hello.component"
import "./styles2.scss"
// import "./visionboard.js"
// import $ from "jquery"
// import ExercisesList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercise.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";

function App() {
  return (
      <div className="container">
        <Main />
      </div>
  );
}

export default App;