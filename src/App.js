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
					{
						/* <Day
						day="Monday"
						items={["CS 392-A", "CS 496-B", "Hold CS 284 OH"]}
						date={currentDate}
					/>
					<Day
						day="Tuesday"
						items={["BT 243-D", "CS 442-A", "SSMIF"]}
						date={currentDate}
					/>
					<Day
						day="Wednesday"
						items={["CS 392-A", "CS 496-B", "HSS 371-G", "CS Club!"]}
						date={currentDate}
					/>
					<Day
						day="Thursday"
						items={["BT 243-D", "CS 442-A", "SSMIF"]}
						date={currentDate}
					/>
					<Day
						day="Friday"
						items={[
							"CS 392-A",
							"CS 496-B",
							"HSS 371-G",
							"Hold CS 284 Lab",
							"SSMIF",
							"Orchestra!"
						]}
						date={currentDate}
					/>
					<Day day="Weekend" items={["Work", "Fun!"]} date={currentDate} /> */
						<Day
							day="Summer"
							items={[
								"Research Work",
								"Apply to internships",
								"Work on personal projects",
								"Have fun!"
							]}
							date={currentDate}
						/>
					}
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
