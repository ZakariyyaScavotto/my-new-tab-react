import React from "react"
import "../styles/day.css"
class Day extends React.Component {
	render() {
		const { day, items, date } = this.props
		const dateString = date.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		})
		return (
			<div className={day.toLowerCase()}>
				<h1>{dateString}</h1>
				<div className={`container${day}`}>
					{items.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</div>
		)
	}
}

export default Day
