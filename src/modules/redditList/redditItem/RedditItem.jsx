import React from "react";
import PropTypes from "prop-types";

import "./RedditItem.scss";

export default function RedditItem(props) {
    const { title, score, url, author, numComments } = props;

    function kFormatter(num) {
        return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
    }

    return (
        <li className="reddit-item">
            <div className="reddit-item__container">
                <div className="row">
                    <div className="col-2 col-md-1 col-lg-1">
                        <div className="reddit-item__score-container">
                            <div className="reddit-item__score">
                                <span>{kFormatter(score)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-11 col-lg-11">
                        <p className="reddit-item__author">
                            Posted by: {author}
                        </p>
                        <h3>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {title}
                            </a>
                        </h3>

                        <p className="reddit-item__num-comments">
                            {numComments} comments
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
}

RedditItem.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    numComments: PropTypes.number.isRequired,
};
