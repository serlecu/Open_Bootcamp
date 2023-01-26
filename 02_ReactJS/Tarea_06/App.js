import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Root from './pages/root';
import HomePage from './pages/homePage';
import Error from './pages/errorPage';
import AboutPage from './pages/aboutPage';

import ProtectedRoute from './pages/protectedRoute';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

import Dashboard from './pages/auth/dashboard';
import TasksPage from './pages/auth/tasksPage';


function App() {

    const testCredentials = {
        email: 'asdf@asdf.as',
        password: '12345678'
    }
    
    // localStorage.setItem('credentials', testCredentials); //Simular que HAY CREDENCIALES  de login
    localStorage.removeItem('credentials'); //Simular que NO hay CREDENCIALES de login
    let isLogged = localStorage.getItem('credentials');
    
    console.log('isLogged= ', localStorage.getItem('credentials'));

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Root />}>

                    <Route index
                        element={<HomePage />} />
                    <Route path="about"
                        element={<AboutPage />} />

                    <Route path="login"
                        element={<LoginPage />} />
                    <Route path="register"
                        element={<RegisterPage />} />

                    <Route path="dashboard"
                        element={
                            <ProtectedRoute isLogged={isLogged}>
                                <Dashboard />
                                <TasksPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="*"
                        element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
