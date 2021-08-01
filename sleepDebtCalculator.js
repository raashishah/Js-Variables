const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 9;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default: 
      return 'Invalid day?'
      break;
  }
}

const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');



const getIdealSleepHours = idealHours =>
  idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours) {
    return 'You slept the perfect amount';
  } 
  if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. Good job.');
  }
  if (actualSleepHours < idealSleepHours ) {
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else {
    return `Error`
  }
};

calculateSleepDebt();

