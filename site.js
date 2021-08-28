//(function( site, undefined ) {

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

/*
    timeout = 400;

    site.partypartyparty = function(e) {
	var partyers = document.getElementsByClassName('party');
	for(var i=0; i<partyers.length; i++) {
            var r = 0;
            var g = 0;
            var b = 0;
            var e = partyers[i];
	    e.style.setProperty('color', 'rgb('+ r +','+ g +',' + b + ')');

	    if (Math.random()*100 > 99) {
		e.innerText = 'PARTY! PARTY! PARTY!';
	    }
	    
	    this.timeout = Math.max(this.timeout * 0.9, 50);
	}

        window.setTimeout(site.partypartyparty, this.timeout);
    };

//}( window.site = window.site || {} ));

//site.partypartyparty();
*/
