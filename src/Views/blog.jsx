import React, {useEffect} from 'react';
import Footer from '../Components/Layout/Footer/footer';

import './blog.scss';

import Articles from '../Articles';
//import ArticlesPlus from '../ArticlesPlus';

const Blog = ({setPageLoad}) => {
    const afficherPlus = () => {
        setShowMoreResults(true);
        document.querySelector('.boutonPlus').style.display = "none";
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setPageLoad(true);
    }, [])

    return (
        <>
        <div className="pageBlog">
            <h1>ARTICLES</h1>
            
            <Articles />
        </div>

        <Footer AnimationBloc7={true} />
        </>
    )
}

export default Blog;