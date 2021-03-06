import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { update, logout } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import ErrorBox from '../components/ErrorBox';
import SuccessBox from '../components/SuccessBox';
import { listMyOrders } from '../actions/orderActions';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;
  const { userInfo } = userSignin;

  const myOrderList = useSelector((state) => state.myOrderList);

  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(update(userInfo._id, name, email, password));
  };
  const logoutHandler = () => {
    dispath(logout());
    props.history.push('/signin');
  };
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
    dispath(listMyOrders());

    return () => {
      //
    };
  }, [userInfo]);

  return (
    <div className="profile">
      <div className="profile-info content-margined">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <ul className="form-container">
              <li>
                <h2>Profile</h2>
              </li>
              {error && (
                <li>
                  <ErrorBox message={error} />
                </li>
              )}
              {success && (
                <li>
                  <SuccessBox message={success} />
                </li>
              )}
              {loading && (
                <li>
                  <LoadingBox />
                </li>
              )}
              <li>
                <label htmlFor="name">Your name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="password">Password </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
              <li>
                <button type="submit" className="button primary">Update Profile</button>
              </li>
              <li>
                <button
                  onClick={logoutHandler}
                  type="button"
                  className="button secondary text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>

  );
}
export default ProfileScreen;
