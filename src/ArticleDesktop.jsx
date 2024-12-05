import React from "react";

//import lucas from 'Assets/img/blog/lucas.jpg';
//import share from 'Assets/img/blog/share.svg';
import perso from "./Assets/img/blog/perso.svg";

class ArticleDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: [] };
  }

  componentDidMount() {
    var url = window.location.pathname;
    url = url.replace("/blog/", "");
    url = url.replace("/", "");
    //console.log(url);

    fetch("https://www.e-do.studio/apiPHP/article.php/", {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
    })
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((result) => {
        //console.log(result);
        this.setState({
          article_rs: result,
        });
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }

  render() {
    const articlesFound = this.state.article_rs && this.state.article_rs.length;
    if (articlesFound) {
      return this.state.article_rs.map(
        function (item, index) {
          let options = { day: "numeric", month: "long", year: "numeric" };
          let date = new Date(item.date);
          date = date.toLocaleDateString("fr-FR", options);
          let pictures = item.other_pictures.split(";");
          function otherPictures() {
            if (pictures.length < 2) {
              return <img className="otherPicture" src={item.other_pictures} />;
            } else {
              return (
                <div className="otherPicturesFlex">
                  {pictures.map((element) => (
                    <img className="otherPictures" src={element} />
                  ))}
                </div>
              );
            }
          }
          return (
            <div className="flexContent" key={index}>
              <div className="leftMenu column">
                {item.author_picture ? (
                  <img
                    src={item.author_picture}
                    className="authorPicture"
                    alt="Auteur de l'article"
                  />
                ) : (
                  <div className="imgBox">
                    <img
                      src={perso}
                      className="perso"
                      alt="Auteur de l'article"
                    />
                  </div>
                )}
                <span className="author">{item.author}</span>
                <br />
                <span className="team">E-Do Team</span>
                <br />
                <span className="date">{date}</span>
                <br />
                {/*<span className="share">Partager <img src={share} alt="Partager l'article" /></span>*/}
              </div>
              <div className="mainArticleContent column">
                <h2 className="category">{item.category}</h2>
                <h1 className="articleTitle">{item.title}</h1>
                <img className="mainPicture" src={item.main_picture} />
                <p className="articleContent">{item.post_content}</p>
                {otherPictures()}
              </div>
            </div>
          );
        }.bind(this)
      );
    } else {
      return <p>Impossible de charger l'article.</p>;
    }
  }
}

export default ArticleDesktop;
