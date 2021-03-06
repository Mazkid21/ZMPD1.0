import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/BlogScreen';
import ProfileScreen from './screens/ProfileScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { listBlogCategories } from './actions/blogActions';
import LoadingBox from './components/LoadingBox';
import ErrorBox from './components/ErrorBox';
import AdminBlogsScreen from './screens/BlogsScreen';
import AdminArticlesScreen from './screens/ArticlesScreen';
import AboutScreen from './screens/AboutScreen';
import WorkScreen from './screens/WorkScreen';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const blogCategoryList = useSelector(state => state.blogCategoryList);
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const { categories, loading, error } = blogCategoryList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listBlogCategories());
    return () => {
      //
    };
  }, []);
  const openSidebar = () =>
    document.querySelector('.sidebar').classList.add('open');
  const closeSidebar = () =>
    document.querySelector('.sidebar').classList.remove('open');

  return (
    <BrowserRouter>
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <PrivateRoute
        userInfo={userInfo}
        path="/profile"
        component={ProfileScreen}
      />

      <Route path="/blog/:id" component={DetailsScreen} />

      <PrivateRoute
        userInfo={userInfo}
        path="/blogs"
        component={AdminBlogsScreen}
      />

      <PrivateRoute
        userInfo={userInfo}
        path="/articles"
        component={AdminArticlesScreen}
      />

      <Route path="/category/:id" component={HomeScreen} />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/about" component={AboutScreen} />
      <Route path="/work" component={WorkScreen} />
      {/* <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button type="button" onClick={openSidebar}>
              &#9776;
            </button>
            <Link to="/">amazona</Link>
          </div>
          <div>
            {userInfo ? (
              <>
                <Link className="header-link" to="/profile">
                  {userInfo.name}
                </Link>
                {userInfo.isAdmin && (
                  <div className="dropdown">
                    <Link className="header-link" to="#admin">
                      Admin
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link className="header-link" to="/blogs">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link className="header-link" to="/orders">
                          Orders
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link className="header-link" to="/signin">
                {' '}
                Sign in
              </Link>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <ul className="categories">
            <li>
              <h3>Shopping Categories</h3>
              <button
                type="button"
                className="sidebar-menu-close"
                onClick={closeSidebar}
              >
                x
              </button>
            </li>
            {loading ? (
              <li>
                <LoadingBox />
              </li>
            ) : error ? (
              <li>
                <ErrorBox message={error} />
              </li>
            ) : categories.length === 0 ? (
              <li className="empty-list">There is no categories.</li>
            ) : (
              categories.map(x => (
                <li key={x}>
                  <Link onClick={closeSidebar} to={`/category/${x}`}>
                    {x}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        <main onClick={closeSidebar} className="main">
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <PrivateRoute
            userInfo={userInfo}
            path="/profile"
            component={ProfileScreen}
          />

          <Route path="/blog/:id" component={DetailsScreen} />

          <PrivateRoute
            userInfo={userInfo}
            path="/blogs"
            component={AdminBlogsScreen}
          />

          <Route path="/category/:id" component={HomeScreen} />
          <Route path="/" exact component={HomeScreen} />
        </main>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
