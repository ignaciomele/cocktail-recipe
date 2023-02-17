import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './components/welcome/Welcome';
import AddCocktail from './components/addCocktail/AddCocktail'
import CocktailsList from './components/cocktailsList/CocktailsList';
import Login from './components/login/Login';

function App() {
  return (    
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path="/add-cocktail" element={<AddCocktail />} />
          <Route path="/cocktails-list" element={<CocktailsList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>       
    </div>
  );
}

export default App;
