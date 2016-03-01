/*
         _       _         _       
        | |     (_)       (_)      
  _ __  | |__    _         _   ___ 
 | '__| | '_ \  | |       | | / __|
 | |    | |_) | | |  _    | | \__ \
 |_|    |_.__/  |_| (_)   | | |___/
                         _/ |      
                        |__/       
 Version: 0.9
  Author: Joacim Nilsson
 Website: http://joacimnilsson.se/rbi
    Docs: http://joacimnilsson.se/rbi
    Repo: https://github.com/joacimnilsson/rbi.js
 */
function rbi() {
	
	function erbi() {
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
		    imgs = document.querySelectorAll('.rbi');

		[].forEach.call(imgs, function(img) {
			var s = 		img.style,
			    small = 		img.getAttribute('data-rbi-small'),
			    medium = 		img.getAttribute('data-rbi-medium'),
			    large = 		img.getAttribute('data-rbi-large'),
			    xlarge = 		img.getAttribute('data-rbi-xlarge'),
			    xxlarge = 		img.getAttribute('data-rbi-xxlarge'),
			    size = 		img.getAttribute('data-rbi-size'),
			    position = 		img.getAttribute('data-rbi-position'),
			    background = 	"";
			
			if(w <= 640) {
				if(small != "" && small != null){
					background = small;
				} else if(medium != "" && medium != null) {
					background = medium;
				} else if(large != "" && large != null) {
					background = large;
				} else if(xlarge != "" && xlarge != null) {
					background = xlarge;
				} else if(xxlarge != "" && xxlarge != null) {
					background = xxlarge;
				}
			}
			
			if(w >= 641 && w <= 1024) {
				if(medium != "" && medium != null) {
					background = medium;
				} else if(large != "" && large != null) {
					background = large;
				} else if(xlarge != "" && xlarge != null) {
					background = xlarge;
				} else if(xxlarge != "" && xxlarge != null) {
					background = xxlarge;
				} else if(small != "" && small != null){
					background = small;
				}
			}
			
			if(w >= 1025 && w <= 1440) {
				if(large != "" && large != null) {
					background = large;
				} else if(xlarge != "" && xlarge != null) {
					background = xlarge;
				} else if(xxlarge != "" && xxlarge != null) {
					background = xxlarge;
				} else if(medium != "" && medium != null) {
					background = medium;
				} else if(small != "" && small != null) {
					background = small;
				}
			}
			
			if(w >= 1441 && w <= 1920) {
				if(xlarge != "" && xlarge != null) {
					background = xlarge;
				} else if(xxlarge != "" && xxlarge != null) {
					background = xxlarge;
				} else if(large != "" && large != null) {
					background = large;
				} else if(medium != "" && medium != null) {
					background = medium;
				} else if(small != "" && small != null) {
					background = small;
				}
			}
			
			if(w >= 1921) {
				if(xxlarge != "" && xxlarge != null) {
					background = xxlarge;
				} else if(xlarge != "" && xlarge != null) {
					background = xlarge;
				} else if(large != "" && large != null) {
					background = large;
				} else if(medium != "" && medium != null) {
					background = medium;
				} else if(small != "" && small != null) {
					background = small;
				}
			}
			
			s.backgroundImage = 'url("' + background + '")';
			s.backgroundSize = size;
			s.backgroundPosition = position;
		});
	}
	
	erbi();

	window.onresize = function(event) {
		erbi();
	};
}
