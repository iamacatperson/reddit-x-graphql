import React from "react";

import "./ErrorPanel.scss";

export default function ErrorPanel(props) {

	const { error } = props;

	return (
		<div className="container">
			<div className="error-panel">
				<div className="row">
					<div className="col-12">
						<p>{error}</p>
					</div>
				</div>
			</div>
		</div>
	);

}