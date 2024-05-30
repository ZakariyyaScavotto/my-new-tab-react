const show = (classname) => {
	const elements = document.getElementsByClassName(classname);
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
};
const hide = (classname) => {
	const elements = document.getElementsByClassName(classname);
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}
};
export const setDisplay = (day) => {
	show("Summer");
	hide("monday");
	hide("tuesday");
	hide("wednesday");
	hide("thursday");
	hide("friday");
	hide("weekend");
	/*
	if (day["currentDay"] === 1) {
		show("monday")
		hide("tuesday")
		hide("wednesday")
		hide("thursday")
		hide("friday")
		hide("weekend")
	} else if (day["currentDay"] === 2) {
		hide("monday")
		show("tuesday")
		hide("wednesday")
		hide("thursday")
		hide("friday")
		hide("weekend")
	} else if (day["currentDay"] === 3) {
		hide("monday")
		hide("tuesday")
		show("wednesday")
		hide("thursday")
		hide("friday")
		hide("weekend")
	} else if (day["currentDay"] === 4) {
		hide("monday")
		hide("tuesday")
		hide("wednesday")
		show("thursday")
		hide("friday")
		hide("weekend")
	} else if (day["currentDay"] === 5) {
		hide("monday")
		hide("tuesday")
		hide("wednesday")
		hide("thursday")
		show("friday")
		hide("weekend")
	} else {
		hide("monday")
		hide("tuesday")
		hide("wednesday")
		hide("thursday")
		hide("friday")
		show("weekend")
	}
	*/
};
