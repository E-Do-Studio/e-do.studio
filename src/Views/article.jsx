import React, { useEffect } from "react";
import Footer from "../Components/Layout/Footer/footer";

import { useMediaQuery } from "@react-hook/media-query";

import "./article.scss";
import "./autres-articles.scss";

import PostDesktop from "../ArticleDesktop";
import PostMobile from "../ArticleMobile";
import AutresArticles from "../AutresArticles";

const Article = ({ setPageLoad }) => {
  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);
  }, []);

  return (
    <>
      <div className="pageArticle">
        <h3>ARTICLE</h3>

        {!matches ? <PostMobile /> : <PostDesktop />}
      </div>
      <div className="autresArticles">
        <h4>Découvrez d’autres articles</h4>
        <div className="flexContainer">
          <AutresArticles />
        </div>
      </div>
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Article;
