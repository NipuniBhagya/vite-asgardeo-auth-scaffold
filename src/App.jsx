import "./App.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";

function App() {

    return (
        <Router>
            <Suspense>
                <Routes>
                    <Route path='/' element={ <LoginPage/> } key={ 0 } />
                    <Route path="/home" element={ <HomePage /> } key={ 1 } />                           
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
