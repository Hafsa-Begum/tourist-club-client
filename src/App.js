import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import SingleTour from './components/Home/SingleTour/SingleTour';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import MyTour from './components/MyTour/MyTour';
import ManageBooking from './components/ManageBooking/ManageBooking';
import AddTour from './components/AddTour/AddTour';
import ApproveBooking from './components/ManageBooking/ApproveBooking/ApproveBooking';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/tours/:id'>
              <SingleTour></SingleTour>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path='/myTours'>
              <MyTour></MyTour>
            </PrivateRoute>
            <PrivateRoute exact path='/manageBooking'>
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <PrivateRoute path='/addTour'>
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute path='/manageBooking/:id'>
              <ApproveBooking></ApproveBooking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
