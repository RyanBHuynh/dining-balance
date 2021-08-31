//This JavaScript file contains code for the MU Dining Balance website

//WARNING! GLOBAL VARIABLES:
//This is done so that these variables don't have to be changed in multiple spots
//They are const so they cannot be modified
const semesterEndDate = new Date(2021,11,17); //Keeps track of the end of the semester
const today = new Date(); //Get today's date

//This function takes in two Date values and returns the number of days between them
function calculateDaysBetweenDates(startDate,endDate) {
    const millisecondsInOneDay = 1000*86400; //Use this to calculate the number of days left in the semester
    let numDays = Math.ceil((endDate.getTime()-startDate.getTime())/millisecondsInOneDay);
    return numDays + 1;
}

//This function is called when the site loads
function onload() {
    const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}; //Set options for how the date is printed

//Print today's date
    document.getElementById("today").innerHTML = "Today is " + today.toLocaleDateString("en-US",options) + ".";

//Print the last day of the semester    
    document.getElementById("endOfSemester").innerHTML = "The semester ends on " + semesterEndDate.toLocaleDateString("en-US",options) + ".";

//Find how many days there are until end of the semester
    const daysUntilSemesterEnd = calculateDaysBetweenDates(today,semesterEndDate);

    if(daysUntilSemesterEnd > 1)
        document.getElementById("daysUntilEnd").innerHTML = "There are " + daysUntilSemesterEnd + " days left in the semester.";
        
    if(daysUntilSemesterEnd == 1)
        document.getElementById("daysUntilEnd").innerHTML = "Today is the last day of the semester.";
    
    if(daysUntilSemesterEnd < 1)
        document.getElementById("daysUntilEnd").innerHTML = "The semester has ended.";
}

//This function is called when the user presses the 'Calculate' button
function calculateDailySpendRate() {
    let daysLeft = calculateDaysBetweenDates(today,semesterEndDate);
    if(daysLeft <= 0) {
        document.getElementById("result").innerHTML = "Sorry, the semester has already ended.";   
    }

    else {
        let input = document.getElementById("frm1");
        let currentBalance = parseFloat(input.elements[0].value); //Convert the values to floats and print them
        let res = (currentBalance / daysLeft).toFixed(2); //Round result to 2 decimal places
        
        if(Number.isNaN(currentBalance)) { //Check if the current balance is an invalid number
            document.getElementById("result").innerHTML = "Error: an invalid value was entered.";
        }

        else if(currentBalance < 0) { //Check if the user entered a negative balance
            document.getElementById("result").innerHTML = "Error: a negative balance was entered.";
        }

        else if(currentBalance >= 100000) { //Check if the user entered a balance greater than $100k
            document.getElementById("result").innerHTML = "Are you sure you have that much in your dining account?";
        }

        else {
            let output = res.toString(); //Convert res to a string
            document.getElementById("result").innerHTML = "You can spend $" + output + " per day on average";
        }
    }
}

window.onload = onload; //Call onload function when the site loads
