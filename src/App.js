import "./styles/app.css";
import { useEffect, useState } from "react";
import { setDisplay } from "./utils/day";
import { clock } from "./utils/clock";
import { quote } from "./utils/quote";
import { Helmet } from "react-helmet";
import Clock from "./components/Clock";
import Day from "./components/Day";
import QuickLinks from "./components/QuickLinks";

function App() {
	const [currentDay, setCurrentDay] = useState(0);
	const [currentDate, setCurrentDate] = useState(new Date());
	const updateCurrentDay = () => {
		const currentDate = new Date();
		let dayOfWeek = currentDate.getDay();
		// Adjust to start from Monday (1)
		dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
		setCurrentDay(dayOfWeek);
		setCurrentDate(currentDate);
	};
	useEffect(() => {
		updateCurrentDay();
		clock();
		quote();
	}, []);
	useEffect(() => {
		setDisplay({ currentDay });
	}, [currentDay]);
	return (
		<div className="App">
			<Helmet>
				<title>New Tab</title>
			</Helmet>
			<Clock />
			<div id="quoteArea"></div>
			<div id="rightSide">
				<div className="classes">
					<Day day="Monday" items={["Internship", "Gym"]} date={currentDate} />
					<Day day="Tuesday" items={["Internship", "Gym"]} date={currentDate} />
					<Day
						day="Wednesday"
						items={["Internship", "Gym"]}
						date={currentDate}
					/>
					<Day
						day="Thursday"
						items={["Internship", "Gym"]}
						date={currentDate}
					/>
					<Day day="Friday" items={["Internship", "Gym"]} date={currentDate} />
					<Day
						day="Weekend"
						items={["Sleep In", "Work", "Gym", "Fun!"]}
						date={currentDate}
					/>
				</div>
			</div>
			<QuickLinks
				links={[
					{ name: "Youtube", url: "https://youtube.com" },
					{ name: "Notion", url: "https://notion.so" },
					{ name: "Github", url: "https://github.com" },
					{ name: "Gmail", url: "https://gmail.com" },
					{ name: "Google Drive", url: "https://drive.google.com" }
				]}
			/>
		</div>
	);
}

export default App;
