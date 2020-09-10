import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import LoadingBox from '../components/LoadingBox';
import ErrorBox from '../components/ErrorBox';
// import { listProducts } from '../actions/productActions';
// import Product from '../components/Product';

function HomeScreen(props) {
  const category = props.match.params.id ? props.match.params.id : '';
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const productList = useSelector((state) => state.productList);
  // useEffect(() => {
  //   dispatch(listProducts(category, searchKeyword, sortOrder));
  //   return () => {
  //     //
  //   };
  // }, [dispatch, category]);
  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(listProducts(category, searchKeyword, sortOrder));
  // };

  // const sortHandler = (e) => {
  //   setSortOrder(e.target.value);
  //   dispatch(listProducts(category, searchKeyword, e.target.value));
  // };
  // const { loading, products, error } = productList;
  return (
    <>
      <div className="grid">
        {/* <!-- Left side --> */}
        <div id="photo" className="column effect-hover">
          <div className="content photo">
            <i className="fa fa-camera" aria-hidden="true" />
            <h2>
              Go
              <span>photo</span>
            </h2>
            <h3>Do something amazing</h3>
            <p>And Click</p>
          </div>
        </div>
        {/* <!--Right side--> */}
        <div id="dev" className="column effect-hover">
          <div className="content">
            <i className="fa fa-code effect-hover" aria-hidden="true" />
            <h2>
              Go
              <span>dev</span>
            </h2>
            <h3>Do something amazing</h3>
            <p>And Click</p>
          </div>
        </div>
        {/* <!--Logo--> */}
        <div id="logo">

          <img src="images/logoBW.png" />
        </div>

      </div>

      {/* <!--photo side content--> */}
      <div id="photo-overlay" className="overlay">

        <div className="wrapper">
          <div className="sidebar">

            <div className="title">
              PHOTOGRAPHY
              <i className="icon fa fa-bars" />
            </div>
            <ul className="nav">
              {/* <!-- <li className="nav-li">
                      <a href="#home" className="active">Intro</a>
                  </li> --> */}
              <li className="nav-li">
                <a href="#work" className="">Work</a>
              </li>
              <li className="nav-li">
                <a href="#shop" className="">Shop</a>
              </li>
              <li className="nav-li">
                <a href="#about" className="">About</a>
              </li>
              <li className="nav-li">
                <a href="#location" className="">Contact</a>
              </li>
              <li className="nav-li">
                <a href="#" className="close-icon">Home</a>
              </li>
            </ul>

          </div>
          <div className="content">

            <main>
              <header className="section-1" id="home">
                <div className="title-header">
                  <h1>Zach Maraziti</h1>
                  <h2>Photographer</h2>
                </div>

              </header>

              <section id="work" className="scroll-to">
                <header>
                  <h3>Recent work</h3>
                </header>
                <div className="portfolioImgs">

                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/jjnb4z1enizk8d6/CI3A6098-Edit-Edit-2.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/jjnb4z1enizk8d6/CI3A6098-Edit-Edit-2.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/tor402zjvwoams2/CI3A8441.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/tor402zjvwoams2/CI3A8441.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/unqnfucn9b5r4ft/CI3A1969.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/unqnfucn9b5r4ft/CI3A1969.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/fgavvtt749cmeev/DSC00771.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/fgavvtt749cmeev/DSC00771.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/ahqksjbywj0oeq4/CI3A2197.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/ahqksjbywj0oeq4/CI3A2197.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/9rdvlcph123bcdr/DSC00378.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/9rdvlcph123bcdr/DSC00378.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/0kvwtovyll05pn4/CI3A2209.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/0kvwtovyll05pn4/CI3A2209.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/unqnfucn9b5r4ft/CI3A1969.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/unqnfucn9b5r4ft/CI3A1969.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/5ityztivyy38xx8/CI3A2062-5.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/5ityztivyy38xx8/CI3A2062-5.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/u1so9t2wi78isnj/CI3A3100.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/u1so9t2wi78isnj/CI3A3100.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/y6geq93ok72s0xk/CI3A3992.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/y6geq93ok72s0xk/CI3A3992.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/mxswubx3ys03nh5/CI3A4450-Edit-2.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/mxswubx3ys03nh5/CI3A4450-Edit-2.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/hk496frymd6elzv/CI3A4611-Edit.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/hk496frymd6elzv/CI3A4611-Edit.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/hgzdxr6vxcuo03x/CI3A5982.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/hgzdxr6vxcuo03x/CI3A5982.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/wfvnojm51758gju/CI3A7156.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/wfvnojm51758gju/CI3A7156.jpg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/s539e9bu3vj2rkn/File%20Mar%2027%2C%2017%2002%2018.jpeg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/s539e9bu3vj2rkn/File%20Mar%2027%2C%2017%2002%2018.jpeg?raw=1"
                      alt=""
                    />
                  </a>
                  <a
                    className="grouped_elements fancyboxPhoto"
                    href="https://www.dropbox.com/s/1y769013vg9hye5/NYEfirework2.jpg?raw=1"
                  >
                    <img
                      src="https://www.dropbox.com/s/1y769013vg9hye5/NYEfirework2.jpg?raw=1"
                      alt=""
                    />
                  </a>

                </div>

              </section>

              <section id="shop" className="scroll-to">
                <header>
                  <h3>Shop</h3>
                </header>

                <img src="images/comingSoon.png" />
              </section>

              <section id="about" className="scroll-to">
                <header>
                  <h3>About Me</h3>
                </header>

                <section className="about-content">
                  <p>
                    <span id="lead">Hello. My name is Zach Maraziti, owner of ZMPD.</span>
                    {' '}
                    My love of photography began at
                    an early age while watching my Mother shoot and develop her own film. Some of my early childhood
                    experiences include working alongside her on the development process and learning how to compose photos
                    through observation of her work.
                  </p>

                  <p>
                    {' '}
                    As a teenager, I would spend most of my summers at the Anderson Ranch Arts Center. My mother worked at
                    the Ranch and while she ran art classes and workshops, I would venture to the photography building.
                    Through those experiences, I was fortunate enough to learn from the artists creating in the studio and
                    be exposed to unique styles of photography.
                    {' '}
                  </p>

                  <p>
                    Shooting photos has always been one of my biggest passions in life, and it is obvious to me that this
                    began with the exposure I had to art and photography at an early age. I am grateful not only for those
                    memories and experiences but to be able to carry that passion into my career. Projects I’ve worked on
                    range from photographing and videoing skiing in Japan for Polartec to shooting a statue of a bear at the
                    Marron Bells for the Buddy Program to Xgames photos for the ESPN. While my main focus is shooting
                    landscapes, I am always open to new opportunities. If you have an idea in mind, please feel free to
                    reach out to me via email and we’ll begin a conversation about your vision.
                  </p>

                </section>
              </section>

              <section id="location" className="scroll-to">
                <header>
                  <h3>Contact Info</h3>
                </header>
                <div className="contact-info myrow-halves">
                  <div className="col">
                    <i className="fa fa-mobile fa-3x" aria-hidden="true" />
                    <p>Mobile | 970.452.9404</p>
                  </div>
                  <div className="col">
                  <a to="mailto:ziti@zachmarazitiphotography.com">
                    <i className="fa fa-envelope fa-3x" aria-hidden="true" />
                   
                    <p>E-mail | zach@zmpd.app</p>
                    </a>
                  </div>
                </div>

              </section>

              {/* <section id="contact" className="scroll-to">
                <header>
                  <h5>Or, feel free to drop me a line below</h5>
                </header>

                <form className="col" method="post" name="myemailform" action="email.php">
                  <fieldset>
                    <legend htmlFor="name">Name</legend>
                    <input type="text" id="name" name="name" />
                    <legend htmlFor="mail">E-mail</legend>
                    <input type="text" id="email" name="email" />
                    <legend htmlFor="msg">Message</legend>
                    <textarea id="msg" name="message" />

                    <input type="submit" name="submit" value="Send" className="link-btn-solid" />
                  </fieldset>
                </form>

                <script language="JavaScript">
                  // Code for validating the form
                  // Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
                  // for details
                  var frmvalidator = new Validator("myemailform");
                  frmvalidator.addValidation("name", "req", "Please provide your name");
                  frmvalidator.addValidation("email", "req", "Please provide your email");
                  frmvalidator.addValidation("email", "email", "Please enter a valid email address");
                </script>
              </section> */}

              <footer>

                <div className="myrow">
                  <div className="col">
                    Copy &copy ZMPD 2019
                  </div>
                </div>

              </footer>

            </main>

          </div>
        </div>

      </div>
      {/* <!--dev side content--> */}
      <div id="dev-overlay" className="overlay">
        <div className="wrapper">
          <div className="sidebar">

            <div className="title">
              DEVELOPMENT
              <i className="icon fa fa-bars" />
            </div>
            <ul className="nav">
              {/* <!-- <li className="nav-li">
                          <a href="#homeDev" className="active">Intro</a>
                      </li> --> */}

              <li className="nav-li">
                <a href="#workDev" className="">portfolio</a>
              </li>
              <li className="nav-li">
                <a href="#aboutDev" className="">About</a>
              </li>
              <li className="nav-li">
                <a href="#devTech" className="">Technology</a>
              </li>
              <li className="nav-li">
                <a href="#locationDev" className="">Contact</a>
              </li>
              <li className="nav-li">
                <a href="#" className="close-icon">Home</a>
              </li>

            </ul>

            <div className="close-icon">
              <div />
              <div />
            </div>

          </div>
          <div className="content">

            <main>
              <header className="section-1" id="homeDev">
                <div className="title-header">
                  <h1>Zach Maraziti</h1>
                  <h2>Full Stack Developer</h2>
                </div>

              </header>

              <section id="workDev" className="scroll-to">
                <header>
                  <h3>Recent work</h3>
                </header>

                <div className="row">
                  <section className="gallery">
                    <div className="row">
                      <ul>
                        <a href="#" className="close" />
                        <li>
                          <a href="#item01">
                            <img src="images/WileyMaple.png" alt="" />
                          </a>
                        </li>

                        <li>
                          <a href="#item02">
                            <img src="images/aspenDailyNews.png" alt="" />
                          </a>
                        </li>

                        <li>
                          <a href="#item03">
                            <img src="images/BobbyMoyer.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a className="image" href="#item04">
                            <img src="images/liftOne.png" alt="" />
                          </a>
                        </li>
                        {/* <li>
                      <a className="image" href="#item05">
                        <img src="images/brit.png" alt="" />
                      </a>
                    </li> */}

                      </ul>
                    </div>

                    <div id="item01" className="port">

                      <div className="row">
                        <img src="images/WileyMaple.png" alt="" />
                        <div className="description">
                          <h1>Wiley Maple</h1>
                          <p>Full stack responsive web app built for Olympic skiier. Built with React, NodeJS, Express, MongoDB.</p>
                        </div>

                      </div>
                    </div>

                    <div id="item02" className="port">

                      <div className="row">
                        <img src="images/aspenDailyNews.png" alt="" />
                        <div className="description">
                          <h1>Aspen Daily News</h1>
                          <p>Custom CSS, backend data migration, hosting transfer CMS training and implamentiation, consultant, leasion. </p>
                        </div>

                      </div>

                    </div>

                    <div id="item03" className="port">

                      <div className="row">
                        <img src="images/BobbyMoyer.png" alt="" />
                        <div className="description">
                          <h1>Bobby Moyer</h1>
                          <p>Full stack web app built for an Author. Built with React, NodeJS, Express, MongoDB.</p>
                        </div>

                      </div>

                    </div>

                    <div id="item04" className="port">

                      <div className="row">
                        <img src="images/liftOne.png" alt="" />
                        <div className="description">
                          <h1>Political Campaign</h1>
                          <p>Full stack web app built for a Politcal Campaign. Built with Angular, NodeJS, Express, MongoDb, Handlebars.js</p>
                        </div>

                      </div>

                    </div>

                    {/* <div id="item05" className="port">

                      <div className="row">
                        <div className="description">
                      <h1>Political Campaign </h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
                    </div>
                        <img src="images/brit.png" alt="" />
                      </div>

                    </div> */}

                  </section>

                </div>
              </section>

              <section id="aboutDev" className="scroll-to about-content">
                <header>
                  <h3>About Me</h3>
                </header>

                <p>
                  <span id="lead">Hello. My name is Zach Maraziti.</span>
                  {' '}
                  I am a Full Stack developer from Aspen, Colorado based out of Portland Oregon.
                  I am passionate about building excellent software that improves the lives of those around me.
                  I specialize in creating software for clients ranging from individuals and small-businesses.
                  I've always been drawn to the overlap between design and development. My skills are broad: from
                  photography to design, front end to back end development. I enjoy each aspect, and love building sites &
                  mobile apps from start to finish.
                  If you are intrested in working together, you can find my contact info below.
                </p>
                <br />
              </section>

              <section id="devTech">
                <header>
                  <h3>Tech I Love</h3>
                </header>
                <div className="row">

                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-html5-plain-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-css3-plain-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-javascript-plain" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-nodejs-plain-wordmark" /></h1>

                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-angularjs-plain" /></h1>

                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-react-original-wordmark" /></h1>

                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-jquery-plain-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-gulp-plain" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-express-original-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-mongodb-plain-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-postgresql-plain-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-typescript-plain" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-mocha-plain" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-sass-original" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-photoshop-line" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-github-plain-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-wordpress-plain-wordmark" /></h1>
                  </div>
                  <div className="col s6 m2 l2">
                    <h1><i className="devicon-bootstrap-plain-wordmark" /></h1>
                  </div>
                </div>
              </section>

              <section id="locationDev" className="scroll-to">
                <header>
                  <h3>Contact Info</h3>
                </header>
                <div className="contact-info myrow-halves">
                  <div className="col">
                    <i className="fa fa-mobile fa-3x" aria-hidden="true" />
                    <p>Mobile | 970.452.0404</p>
                  </div>
                  <div className="col">
                  <a to="mailto:ziti@zachmarazitiphotography.com">
                    <i className="fa fa-envelope fa-3x" aria-hidden="true" />
                   
                    <p>E-mail | zach@zmpd.app</p>
                    </a>
                  </div>
                </div>

              </section>

              {/* <section id="contactDev" className="scroll-to">
                <header>
                  <h5>Or, feel free to drop me a line below</h5>
                </header>

                <form className="col" method="post" name="myemailform" action="email.php">
                  <fieldset>
                    <legend htmlFor="name">Name</legend>
                    <input type="text" id="name" name="name" />
                    <legend htmlFor="mail">E-mail</legend>
                    <input type="text" id="email" name="email" />
                    <legend htmlFor="msg">Message</legend>
                    <textarea id="msg" name="message" />

                    <input type="submit" name="submit" value="Send" className="link-btn-solid" />
                  </fieldset>
                </form>

                <script language="JavaScript">
                  // Code for validating the form
                  // Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
                  // for details
                  var frmvalidator = new Validator("myemailform");
                  frmvalidator.addValidation("name", "req", "Please provide your name");
                  frmvalidator.addValidation("email", "req", "Please provide your email");
                  frmvalidator.addValidation("email", "email", "Please enter a valid email address");
                </script>
              </section> */}

              <footer>

                <div className="myrow">
                  <div className="col">
                    Copy &copy ZMPD 2019
                  </div>
                </div>

              </footer>

            </main>

          </div>
        </div>

      </div>
    </>
  );
}
export default HomeScreen;
