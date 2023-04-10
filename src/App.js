import { useState } from 'react';
import './App.css';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

function App() {


  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>


        <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/create' element={<CreatePost />} />
          </Route>

          <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/details/:id' element={<DetailView />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
