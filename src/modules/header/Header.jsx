import React from "react";

import "./Header.scss";

export default function Header(props) {
    const { subredditTitle } = props;

    return (
        <header className="header">
            <h1>
                <span className="header__reddit">Reddit</span> X{" "}
                <span className="header__graphql">GraphQL</span>
            </h1>
            <h2>
                <a
                    href={`http://www.reddit.com/r/${subredditTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    r/{subredditTitle}
                </a>
            </h2>
        </header>
    );
}
