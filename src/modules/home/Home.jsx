import React, { Component } from "react";

import "../../styles.scss";

import "./Home.scss";
import RedditList from "../redditList/RedditList.jsx"

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<div className="home">
				
				<div className="container home__container">

					<div className="row">
						<div className="col">
							<header>
								<h1>Reddit X GraphQL</h1>
							</header>

							<RedditList />
						</div>
					</div>

				</div>

			</div>
		);

	}
}

export default Home;