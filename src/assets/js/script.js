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
  let greet = Math.floor(currentTime.getHours() / 6);
  switch (greet) {
    case 0:
      return locale.get('greetings', 'goodNight');
      break;
    case 1:
      return locale.get('greetings', 'goodMorning');
      break;
    case 2:
      return locale.get('greetings', 'goodAfternoon');
      break;
    case 3:
      return locale.get('greetings', 'goodEvening');
      break;
  }
}

function loadFunctions() {
  // date();  
  greet();
}