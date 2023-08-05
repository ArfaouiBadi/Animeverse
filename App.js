import React from 'react'
import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home"
import About from "./components/about/About"
import CategoriesHome from './components/allcategories/CategoriesHome';
import Contact from './contact/Contact'
import Footer from './components/common/footer/Footer';
function App() {
  return (
    <>
     <Router>
    <Header />
    <Switch>
    
          <Route path='/' exact component={Home} /> 
          <Route path='/about' exact component={About} /> 
          <Route path='/categories' exact component={CategoriesHome} /> 
          <Route path='/contact' exact component={Contact} /> 

        </Switch>
        <Footer />
    </Router>
    </>
  )
}

export default App