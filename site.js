
//This function is called when the user presses the 'Calculate' button
function calculateDailySpendRate() {
    var input = document.getElementById("frm1");
    var res = parseFloat(input.elements[0].value); //Convert the values to floats and print them
    var text = res.toString();
      
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();

    document.getElementById("today").innerHTML = m + "/" + d + "/" + y; 
}
