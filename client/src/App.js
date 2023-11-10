import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import UserLogin from './components/pages/Login/UserLogin';
import Register from './components/pages/Login/Registration';
import Home from './components/pages/Home';
import Nutrition from './components/pages/Nutrition/Nutrition';
import Recipes from './components/pages/Recipes/RecipeOC';
import Log from './components/pages/Logbook/Logbook';

function App() {
return (
    <>
        <Router>
            <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/log" element={<Log />} /> 
            </Routes>
            </div>
    </Router >
        </>
    );
}

export default App;
