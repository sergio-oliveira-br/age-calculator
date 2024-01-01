//demo

document.addEventListener("DOMContentLoaded", function()
{
      document.getElementById("demo").innerHTML = 11 + 6;
});

function test()
{
      alert("HELOOOUUU")
}


//MONTH

function getDOB()
{
      //declare error message
            //DAYS
            var errorD28 = "Oops! This month has only 28 days.";
            var errorD30 = "Oops! This month has only 30 days.";
            var errorD31 = "Oops! This month has only 31 days.";
            
            //MONTH
            var errorM = "Please enter a valid Month";
            
            //YEAR
            var errorY = "Please enter a valid Year";

      //declare the day today
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);

      //get the number of year
      let yearNumber = today.getFullYear();

      //get the number of month
      let monthNumber = today.getMonth();

      //get the number of the day today
      let dayNumber = today.getDate();

      //INPUT
            //Year
            let inputY = document.getElementById('inputY');
            let outputY = document.getElementById('outputY');

            //Month
            let inputM = document.getElementById('inputM');
            let outputM = document.getElementById('outputM');

            //Day
            let inputD = document.getElementById('inputD');
            let outputD = document.getElementById('outputD');

      //PROCESS
            //Year
            let resultY = yearNumber - inputY.value - 1;

            //Month
            let resultM = ((12 - inputM.value) + (monthNumber)); //I needed to increment 1, 'cause the count go from 0 to 11.

            //Day
            let resultD = (dayNumber - inputD.value) + 30; //need to consider the previous month to be right

      //OUTPUT
            //Year
            if(inputY.value > 2023 || inputY.value < 1)
            {
                  document.getElementById('errorY').innerHTML = errorY;
                  document.getElementById('errorY').style.color = 'red';
            }     
            else
            document.getElementById('errorY').innerHTML = " ";
            outputY.textContent = resultY;

            //Month
            if(inputM.value > 12 || inputM.value < 1)
            {
                  document.getElementById('errorM').innerHTML = errorM;
                  document.getElementById('errorM').style.color = 'red';

            }
            else
            document.getElementById('errorM').innerHTML = " ";
            outputM.textContent = resultM;
            //I need to change the colour

            //Day
            switch(parseInt(inputM.value))
            {
                  //For months who has 31 days.
                  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                        if(inputD.value > 31)
                        {
                              document.getElementById('errorD').innerHTML = 
                                    "Oops! This month has only 31 days.";

                              document.getElementById('errorD').style.color = 'red';
                        }
                        else
                        {
                              document.getElementById('errorD').innerHTML = " "

                              outputD.textContent = resultD;
                              outputD.style.color = '#844DF8';
                        }      
                  break;

                  case 2: 
                        if(inputD.value > 28)
                        {
                              document.getElementById('errorD').innerHTML = 
                                    "Oops! This month has only 28 days.";

                              document.getElementById('errorD').style.color = 'red';
            
                        }
                        else
                        {
                              document.getElementById('errorD').innerHTML = " ";

                              outputD.textContent = resultD;
                              outputD.style.color = '#844DF8';
                        }
                  break;

                  case 4: case 6: case 9: case 11: //there is an error!!!
                        if(inputD.value > 30)
                        {     
                              document.getElementById('errorD').innerHTML = 
                                    "Oops! This month has only 30 days.";

                              document.getElementById('errorD').style.color = 'red';
                        }
                        else
                        {
                              document.getElementById('errorD').innerHTML = " ";

                              outputD.textContent = resultD;
                              outputD.style.color = '#844DF8';
                        }

                  //default:
                        //outputD.textContent = resultD;      
            }         
}