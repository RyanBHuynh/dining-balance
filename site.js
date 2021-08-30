
//This function is called when the user presses the 'Calculate' button
function calculateDailySpendRate() {
    var input = document.getElementById("frm1");
    var res = parseFloat(input.elements[0].value); //Convert the values to floats and print them
    var text = res.toString();

    today = new Date(); //Keeps track of today's date
    var endOfSemester = new Date(today.getFullYear,11,17); //Keeps track of the end of the semester

//Store the last day of the semester
    y = endOfSemester.getFullYear();
    m = endOfSemester.getMonth() + 1;
    d = endOfSemester.getDate();

    document.getElementById("today").innerHTML = "The semester ends on " + m + "/" + d + "/" + y; 
}
