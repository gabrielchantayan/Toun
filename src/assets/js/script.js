import * as locale from './localeManager.js'  // Import Locale manager

// Date function for main page
export function date() {
  // Get date and set options
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  // Set date to locale
  let date = currentDate.toLocaleDateString(locale.getLocale(), dateOptions);
  return date;
}

export function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 3);
  switch (greet) {
    case 7:
    case 8:
    case 0:
    case 1:
      return locale.get('greetings', 'goodNight');
      break;
    case 2:
    case 3:
      return locale.get('greetings', 'goodMorning');
      break;
    case 4:
    case 5:
      return locale.get('greetings', 'goodAfternoon');
      break;
    case 6:
      return locale.get('greetings', 'goodEvening');
      break;
  }
}

function loadFunctions() {
  // date();  
  greet();
}