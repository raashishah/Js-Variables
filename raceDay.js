let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 19;

registeredEarly && (runnerAge > 18) ? 
  raceNumber += 1000 : console.log("Underage");

if (registeredEarly && (runnerAge > 18)) {
  console.log(`Your race is at 9:30am, ${raceNumber}`);
} else if ((registeredEarly === false) && (runnerAge > 18)) {
   console.log(`Your race is at 11:00am, ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race is at 12:30pm, ${raceNumber}`);
}
