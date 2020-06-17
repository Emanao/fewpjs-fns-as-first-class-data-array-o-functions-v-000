let routine = []
const wakeDog = function (dogName, dogBreed) {
  return`Wake ${dogName} the ${dogBreed}`;
}
routine[0]= wakeDog;
const leashDog = function (dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`;
}
routine[1]= leashDog;
const walkToPark = function (dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}
routine[2]= walkToPark;
const throwFrisbee = function (dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
routine[3]= throwFrisbee;
const walkHome = function (dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`;
}
routine[4]= walkHome;
const unleashDog = function (dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`;
}
routine[5]= unleashDog;

function exerciseDog (dogName, dogBreed){
  const exerciseDogPractice=[];
  for (const fnc of routine){
    exerciseDogPractice.push(fnc(dogName, dogBreed));
  }
  return exerciseDogPractice;
}
