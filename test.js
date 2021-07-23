Cargame();

function clearSreen() {
  document.body.querySelector(
    '.result'
  ).innerHTML = "";
  document.getElementById("game").innerHTML = "";
  document.getElementById("pp").innerHTML = "";
}

function Cargame() {
  clearSreen();
  document.getElementById("game").innerHTML = "GAME STARTED";
  // car initial petrol
  let carinP = 30;
  //milage of car/KM
  const milage = 1;

  const endlocation = 100;
  //  pp=petrol pump at
  let destination = 0;
  const petrolpump = [15, 30, 45, 60, 75];
  for (let i = 0; i < 5; i++) {
    console.log("Petrol pump At: " + petrolpump[i]);
    document.getElementById("pp").innerHTML = "Petrol pump at: " + petrolpump;
  }

  //for counting step/Moves of car
  let step = 1;

  while (destination < endlocation) {

    //  genrate a random number 
    const random = Math.floor(Math.random() * 6) + 1  ;
    destination = (carinP - random < 0) ? destination + carinP : destination + random;
    carinP = (carinP - random < 0) ? 0 :  carinP - random;
    console.log("\nMOVE " + step + " - Car travelled " + random + " KM," + " Car At " + destination + " , Petrol remaining :" + carinP);


    /* document.getElementById("inpos").innerHTML = "MOVE  0 -, 0Kms travelled, position 0(initial), petrol remaining 30L "; */
    

   
    switch (destination) {

      case 15: {
        carinP += 20;
        console.log("Reached At Petrol Pump and fill 20ltr Petrol:" + carinP);
        break;
      }
      case 30: {
        carinP += 20;
        console.log("Reached At Petrol Pump and fill 20ltr Petrol:" + carinP);
        break;
      }

      case 45: {
        carinP += 20;
        console.log("Reached At Petrol Pump and fill 20ltr Petrol:" + carinP);
        break;
      }

      case 60: {
        carinP += 20;
        console.log("Reached At Petrol Pump and fill 20ltr Petrol:" + carinP);
        break;
      }
      case 75: {
        carinP += 20;
        console.log("Reached At Petrol Pump and fill 20ltr Petrol:" + carinP);
        break;
      }
    }
    
    document.body.querySelector(
      '.result'
    ).innerHTML += `<br>MOVE  ${step} - ${random}Kms travelled, position ${destination}, petrol remaining ${carinP}L
        <br/>`;


 step++;
    while (carinP <= 0) {
      console.log("GAME OVER  (Car Petrol tank is Empty you can not drive the car)");
      document.getElementById('gameover').innerHTML = "GAME OVER  (Car Petrol tank is Empty you can not drive the car)";
      process.exit(1);
    }

    if (destination >= 100) {
      console.log(" Car reached at location");
      document.getElementById('gameover').innerHTML = "Car reached at Destination";
    }
  }

}
