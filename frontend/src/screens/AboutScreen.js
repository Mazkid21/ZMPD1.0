import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Blog from '../components/Blog';
import LoadingBox from '../components/LoadingBox';
import ErrorBox from '../components/ErrorBox';
import { listBlogs, listBlogCategories } from '../actions/blogActions';
import { listArticles } from '../actions/articleActions';
import Article from '../components/Article';

function AboutScreen(props) {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  useEffect(() => {
    dispatch(listArticles());
    return () => {
      //
    };
  }, []);
  const category = props.match.params.id ? props.match.params.id : '';
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const blogList = useSelector((state) => state.blogList);
  useEffect(() => {
    dispatch(listBlogs(category, searchKeyword, sortOrder));

    return () => {
      //
    };
  }, [dispatch, category]);

  const { loading, blogs, error } = blogList;

  const { loading: loadingArticles, articles, error: errorArticle } = articleList;

  return (
    <div class='container'>
    <div class='row middle-xs header'>
        <div class='col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
          <div class='menu-item '>
            <Link to="/work">Work</Link>
          </div>
        </div>
        <div class='first-xs first-sm first-md initial-order-lg initial-order-xl col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
          <div class='menu-item site-title'>
           <Link to="/">Bobby Moyer</Link>
          </div>
        </div>
        <div class='col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
          <div class='menu-item menu active'>
            <Link to="/about">About</Link>
          </div>
        </div>
    </div><div class="content">
    <div class='row start-xs middle-xs'>
        <div class='col-xs-12 col-sm-12 col-md-3 col-lg-3 info-photo'>
                                    <img src="assets/headshot.jpeg" alt="" />
                        </div>
        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-9 info-text'>
            <p>Hello! I am a writer, skier, and adventurer based in Denver, Co. I am currently a student in The New School's (NYC) Riggio Writing & Democracy program. I enjoy writing about culture, the human condition, and the great outdoors. You can find my selected writings <a href="work.html">here</a> </p>
            <p>I was born and raised in Aspen, CO, a unique cultural environment with a rich history in both sport and the arts. Growing up in Aspen encouraged my love for the outdoors and an appreciation for storytelling. Before attending The New School and shifting my focus to writing, I was a member of the University of Colorado's NCAA Division I Ski Team, where I was the Team Captain, a scholar-athlete, and 2x letter winner.</p>
            <p>If you are interested in working together, you can find me at <a  target="_blank" href="mailto:Iambobbymoyer@gmail.com">Iambobbymoyer@gmail.com</a>, or follow me on Instagram <a target="_blank" href="https://www.instagram.com/sonic.bob/?hl=en">@sonic.bob</a> and/or on Twitter <a target="_blank" href="https://twitter.com/Bobby_moyer13">@Bobby_moyer13</a>.</p>
          </div>
    </div>
</div>

  
</div> 
    
  );
}
export default AboutScreen;





