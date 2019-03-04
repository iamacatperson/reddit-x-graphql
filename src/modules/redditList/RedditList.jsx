import React from "react";
import PropTypes from "prop-types";

import RedditItem from "./redditItem/RedditItem.jsx";

import "./RedditList.scss";

export default function RedditList(props) {
    const { subredditsList, subredditTitle } = props;

    if (subredditsList) {
        if (subredditsList.length === 0) {
            return (
                <div className="reddit-list">
                    <p className="reddit-list__no-result">
                        No results found for this category.
                    </p>
                </div>
            );
        } else {
            return (
                <div className="reddit-list">
                    <ul className="reddit-list__container">
                        {subredditsList.map((subReddit, index) => {
                            return (
                                <RedditItem
                                    key={index}
                                    title={subReddit.title}
                                    url={subReddit.url}
                                    numComments={subReddit.numComments}
                                    author={subReddit.author.username}
                                    score={subReddit.score}
                                />
                            );
                        })}
                    </ul>

                    <p className="reddit-list__footer">
                        Only showing 50 results at most. Visit the{" "}
                        <a
                            href={`http://www.reddit.com/r/${subredditTitle}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            r/{subredditTitle}
                        </a>{" "}
                        page to continue reading!
                    </p>
                </div>
            );
        }
    } else {
        return (
            <ul className="reddit-list__container">
                {[1, 2, 3].map((item, index) => {
                    return (
                        <li key={index} className="reddit-list__item-loading">
                            <div className="reddit-list__item-loading-title" />
                            <div className="reddit-list__item-loading-body" />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

RedditList.propTypes = {
    subredditsList: PropTypes.array,
    subredditTitle: PropTypes.string,
};
