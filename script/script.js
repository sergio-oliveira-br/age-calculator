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
            let resultY = yearNumber - inputY.value;

            //Month
            let resultM = monthNumber - inputM.value + 1; //I needed to increment 1, 'cause the count go from 0 to 11.

            //Day
            var resultD = dayNumber - inputD.value;

      //OUTPUT
            //Year
            if(inputY.value > 2023 || inputY.value < 1)
            {
                  alert("Oops! It looks like there's an issue in the year.");
            }
            outputY.textContent = resultY;

            //Month
            if(inputM.value > 12 || inputM.value < 1)
            {
                  alert("Oops! Invalid Month.");
            }
            else
            outputM.textContent = resultM;
            //i need to change the colour

            //Day
            switch(parseInt(inputM.value))
            {
                  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                        if(inputD.value > 31)
                        {
                             alert("Oops! This Month has only 30 days.")
                             outputD.textContent = "!--";
                             outputD.style.color = '#844DF8';
                        }
                        else
                        {
                              outputD.textContent = resultD;
                              outputD.style.color = '#844DF8';
                        }      
                  break;

                  case 2: 
                        if(inputD.value > 28)
                        {
                              alert("Oops! This Month has only 28 days.")
                              outputD.textContent = "-!-";
                              outputD.style.color = '#844DF8';
                        }
                        else
                        {
                              outputD.textContent = resultD;
                              outputD.style.color = '#844DF8';
                        }
                  break;

                  case 4: case 6: case 9: case 11: //there is a error!!!
                        if(inputD.valeu > 30)
                        {     
                              alert("Oops! This Month has only 30 days.")
                              outputD.textContent = "--!";
                              outputD.style.color = '#844DF8';
                        }
                        else
                        {
                              outputD.textContent = resultD;
                              outputD.style.color = '#844DF8';
                        }

                  default:
                        //outputD.textContent = resultD;      
            }    
            
      
      //test
      //outputD.textContent = dayNumber;
      
      
}


/*
// START HERE
function outputmonth()
{
      //getting input from html input element
      let M = document.getElementById("inputM").value;

      // Getting current date and calculating the difference 
      let now = new Date(document.getElementById("cdate").value); 
      console.log(now); 

      let monthDiff = now.getMonth() - month; 

      if (yearDiff < 0) console.log("invalid date"); 
            else if 
            (monthDiff > 0) 
            { 
                  console.log(yearDiff); 
            } 
            else if (monthDiff === 0 && dateDiff >= 0) 
            { 
                  console.log(yearDiff); 
            } 
            else 
            { 
                  yearDiff = yearDiff - 1; 
                  if (monthDiff <= 0) 
                  if (dateDiff > 0) monthDiff = 12 + monthDiff; 
                  else monthDiff = 11 - monthDiff; 
            } 
            if (dateDiff < 0) { 
                  dateDiff = 30 + dateDiff; 
                  monthDiff -= 1; 
            } 
  


}


*/
