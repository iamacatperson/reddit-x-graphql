import React from "react";
import PropTypes from "prop-types";

import "./Toolbox.scss";

export default function ToolBox(props) {
    const {
        sortBy,
        hasTimeInterval,
        timeInterval,
        changeSort,
        changeTime,
        searchQuery,
        search,
    } = props;

    return (
        <div className="toolbox">
            <div className="container toolbox__container">
                <input
                    className="toolbox__search"
                    type="text"
                    value={searchQuery}
                    onKeyPress={search}
                    placeholder="Search a topic... "
                />

                <div className="toolbox__sort-group">
                    <p>Sort</p>
                    <select
                        value={sortBy}
                        onChange={changeSort}
                        className="toolbox__sort"
                    >
                        <option value="hot">Hot</option>
                        <option value="new">New</option>
                        <option value="controversial">Controversial</option>
                        <option value="top">Top</option>
                        <option value="rising">Rising</option>
                    </select>

                    {hasTimeInterval && (
                        <div className="toolbox__time-container">
                            <select
                                value={timeInterval}
                                onChange={changeTime}
                                className="toolbox__time"
                            >
                                <option value="hour">Past Hour</option>
                                <option value="day">Past 24 Hours</option>
                                <option value="week">Past Week</option>
                                <option value="month">Past Month</option>
                                <option value="year">Past Year</option>
                                <option value="all">Of All Time</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

ToolBox.propTypes = {
    sortBy: PropTypes.string.isRequired,
    timeInterval: PropTypes.string.isRequired,
    hasTimeInterval: PropTypes.bool.isRequired,
    changeSort: PropTypes.func.isRequired,
    searchQuery: PropTypes.func,
    search: PropTypes.func.isRequired,
};
