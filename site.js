(function( site, undefined ) {

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

}( window.site = window.site || {} ));

site.partypartyparty();

