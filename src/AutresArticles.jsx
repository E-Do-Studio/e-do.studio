import React from "react";

import perso from "./Assets/img/blog/perso.svg";

class AutresArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: [] };
  }

  componentDidMount() {
    var url = window.location.pathname;
    url = url.replace("/blog/", "");
    url = url.replace("/", "");
    //console.log(url);

    fetch("https://www.e-do.studio/apiPHP/autres-articles.php/", {
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
          return (
            <a href={`/blog/` + item.slug + `/`} key={index}>
              <div className="article">
                <p className="category">{item.category}</p>
                <h2 className="title">{item.title}</h2>
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
                <span className="open">
                  Lire l'article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="13"
                    viewBox="0 0 24 13"
                    stroke="#000"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g>
                        <g>
                          <g>
                            <g>
                              <path
                                d="M-2.468 13.04L19.532 13.04"
                                transform="translate(-218.000000, -2064.000000) translate(0.000000, 1799.000000) translate(73.000000, 244.000000) translate(159.500000, 27.882149) rotate(-315.000000) translate(-159.500000, -27.882149) translate(149.000000, 16.882149) translate(8.532302, 13.039666) rotate(315.000000) translate(-8.532302, -13.039666)"
                              />
                              <g>
                                <path
                                  d="M4.012 1.039L10.012 7.039 4.012 13.039"
                                  transform="translate(-218.000000, -2064.000000) translate(0.000000, 1799.000000) translate(73.000000, 244.000000) translate(159.500000, 27.882149) rotate(-315.000000) translate(-159.500000, -27.882149) translate(149.000000, 16.882149) translate(7.000000, 0.166667) translate(7.012380, 7.039368) rotate(315.000000) translate(-7.012380, -7.039368)"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </a>
          );
        }.bind(this)
      );
    } else {
      return <p>Aucun autre article à afficher.</p>;
    }
  }
}

export default AutresArticles;
