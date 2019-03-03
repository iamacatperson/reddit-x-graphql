import React, { Component } from "react";
import axios from "axios";

import RedditList from "../redditList/RedditList.jsx";
import ToolBox from "../toolBox/ToolBox.jsx";
import Header from "../header/Header.jsx";
import ErrorPanel from "../errorPanel/ErrorPanel.jsx";

import "../../styles.scss";

import "./Home.scss";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subreddits: null,
			sortBy: "new",
			timeInterval: "day",
			searchQuery: "javascript",
			hasTimeInterval: false,
			error: null
		};

		this.handleSortChange = this.handleSortChange.bind(this);
		this.handleTimeIntervalChange = this.handleTimeIntervalChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		this.getSubreddit();
	}

	/**
     * gets subreddits from GraphQLHub
     */
	async getSubreddit() {
		const { sortBy, searchQuery, timeInterval, hasTimeInterval } = this.state;
		const sortByListings = `${sortBy}Listings`;
		let timeIntervalProperty = "";

		if(hasTimeInterval) {
			timeIntervalProperty = `timeInterval: ${timeInterval}`;
		}

		const query = `{ reddit { subreddit(name: "${searchQuery}"){ ${sortByListings}(limit: 50, ${timeIntervalProperty}) { title author { username } url score numComments } } } }`;

		this.setState({
            error: null
        });

		try {
			const subreddits = await axios({
				url: "https://www.graphqlhub.com/graphql",
				method: "get",
				params: {
					query
				}
			});

			this.setState({
	            subreddits: subreddits.data.data.reddit.subreddit[sortByListings]
	        });
		} catch (err) {
			this.setState({
	            error: "Sorry, something went wrong or we can't find that subreddit. :("
	        });
		}
	
	}

	/**
     * resets subbredits list to null
     */
	resetSubreddit() {
		this.setState({ subreddits: null });
	}

	/**
     * handles search
     * @param {object} event		event object
     */
    handleSearch(event) {
    	/* prevents white space input */
    	if (event.charCode === 32) { // Space Key
	    	event.preventDefault();
	    }

    	if (event.charCode === 13) { // Enter Key
	      	this.setState({ searchQuery: event.target.value }, () => {
	      		this.resetSubreddit();
	            this.getSubreddit();
	        });
	    }
    }

    /**
     * handles change in timeInterval in local state
     * @param {object} event		event object
     */
    handleTimeIntervalChange(event) {
    	this.setState({ timeInterval: event.target.value }, () => {
    		this.resetSubreddit();
            this.getSubreddit();
        });
    }
	
	/**
     * handles change in sorting order in local state
     * @param {object} event		event object
     */
    handleSortChange(event) {
    	const targetValue = event.target.value;

    	if(targetValue === "controversial" || targetValue === "top") {
    		this.setState({ 
	        	hasTimeInterval: true
	        })
    	} else {
    		this.setState({ 
	        	hasTimeInterval: false
	        })
    	}

        this.setState({ 
        	sortBy: targetValue
        }, () => { 
        	this.resetSubreddit();
            this.getSubreddit();
        });
    }

	render() {

		const { subreddits, searchQuery, sortBy, timeInterval, hasTimeInterval, error } = this.state;

		return (
			<div className="home">

				<Header subredditTitle={searchQuery} />

				<ToolBox hasTimeInterval={hasTimeInterval} changeSort={this.handleSortChange} changeTime={this.handleTimeIntervalChange} search={this.handleSearch} sortBy={sortBy} timeInterval={timeInterval} />

				{error && <ErrorPanel error={error} />}
				
				<div className="container home__container">
					<RedditList subredditsList={subreddits} subredditTitle={searchQuery} />
				</div>

			</div>
		);
	}
}

export default Home;