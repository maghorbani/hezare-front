import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Results extends Component {
	static propTypes = {
		items: PropTypes.array
	}

	render() {
		return (
			<div className="w-full">
				<div className="w-full my-2 h-32 rounded-lg shadow border bg-white"></div>
				<div className="w-full my-2 h-32 rounded-lg shadow border bg-white"></div>
				<div className="w-full my-2 h-32 rounded-lg shadow border bg-white"></div>
				<div className="w-full my-2 h-32 rounded-lg shadow border bg-white"></div>
				<div className="w-full my-2 h-32 rounded-lg shadow border bg-white"></div>
			</div>
		)
	}
}

