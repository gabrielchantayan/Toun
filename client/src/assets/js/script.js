import * as locale from './localeManager.js'  // Import Locale manager

// Date function for main page
async function  date() {
	// Get date and set options
	let currentDate = new Date();
	let dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	};

	// Set date to locale
	const loc = await locale.getLocale();

	let date = currentDate.toLocaleDateString(loc, dateOptions);
	return date;
}

async function greet() {
	let currentTime = new Date();
	let greet = Math.floor(currentTime.getHours() / 3);
	switch (greet) {
		case 7:
		case 8:
		case 0:
		case 1:
			return locale.get('greetings', 'goodNight');
		case 2:
		case 3:
			return locale.get('greetings', 'goodMorning');
		case 4:
		case 5:
			return locale.get('greetings', 'goodAfternoon');
		case 6:
			return locale.get('greetings', 'goodEvening');
	}
}



export { date, greet }