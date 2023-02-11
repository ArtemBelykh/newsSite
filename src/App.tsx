import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import News from "./Pages/News/News";
import SignIn from "./Pages/Auth/SignIn";
import Dashboard from "./Pages/Auth/Dashboard";
import Posts from "./Pages/Posts/Posts";
import PostOne from "./Pages/Posts/PostOne";
import AboutUs from "./Pages/About/AboutUs";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import SignUp from "./Pages/Auth/SignUp";
import Footer from "./Components/Footer/Footer";


const App = (): JSX.Element => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<News/>}/>
                <Route path='/logIn' element={<SignIn/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/post/category/:id' element={<Posts/>}/>
                <Route path='/post/:id' element={<PostOne/>}/>
                <Route path='/about' element={<AboutUs />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>

            <Footer />
        </div>
    );
};

export default App;