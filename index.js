// Code your solution in this file
function distanceFromHqInBlocks(somevalue){
  let headquaters = 42;
  return  Math.abs(somevalue-headquaters)


}
console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(somevalue){
  let blocks = distanceFromHqInBlocks(somevalue);
  return blocks * 264;
    
}

 

function distanceTravelledInFeet(start,destination) {
  const blocks = Math.abs(destination - start);
  return blocks * 264;
   }

//console.log(distanceTravelledInFeet(43));

function calculatesFarePrice(start,destination){
   const  distance = distanceTravelledInFeet(start,destination)
  if (distance <= 400){
    return 0;
  }
  else if ( distance > 400 && distance  <= 2000){
    const fare =(distance-400)*0.02
    return fare;

  }
  else if (distance >2000 && distance < 2500){
    return 25;
  } 
  else {
     return 'cannot travel that far'
  }



}