//This function is called when the site loads
function onload() {
    const endOfSemesterDate = new Date(2021,11,17); //Keeps track of the end of the semester

//Store the last day of the semester
    const y = endOfSemesterDate.getFullYear();
    const m = endOfSemesterDate.getMonth() + 1;
    const d = endOfSemesterDate.getDate();

//Print the last day of the semester    
    document.getElementById("endOfSemester").innerHTML = "The semester ends on " + m + "/" + d + "/" + y; 
}

//This function is called when the user presses the 'Calculate' button
function calculateDailySpendRate() {
    var input = document.getElementById("frm1");
    var res = parseFloat(input.elements[0].value); //Convert the values to floats and print them
    var text = res.toString();

    onload();
}

window.onload = onload; //Call onload function when the site loads
