
//This function is called when the user presses the 'Calculate' button
function calculateDailySpendRate() {
    var input = document.getElementById("frm1");
    var res = parseFloat(input.elements[0].value); //Convert the values to floats and print them
    var text = res.toString();

    const endOfSemester = new Date(2021,11,17); //Keeps track of the end of the semester

//Store the last day of the semester
    y = endOfSemester.getFullYear();
    m = endOfSemester.getMonth() + 1;
    d = endOfSemester.getDate();

//Print the last day of the semester    
    document.getElementById("today").innerHTML = endOfSemester;
//    document.getElementById("today").innerHTML = "The semester ends on " + m + "/" + d + "/" + y; 
}
