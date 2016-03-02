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

    function rbiUpdate() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            images = document.querySelectorAll('.rbi');

        [].forEach.call(images, itterate);

        function itterate(img) {
            var small = 	img.getAttribute('data-rbi-small'),
            	medium = 	img.getAttribute('data-rbi-medium'),
           	large = 	img.getAttribute('data-rbi-large'),
            	xlarge = 	img.getAttribute('data-rbi-xlarge'),
            	xxlarge = 	img.getAttribute('data-rbi-xxlarge'),
            	size = 		img.getAttribute('data-rbi-size'),
            	position = 	img.getAttribute('data-rbi-position'),
            	style = 	img.style,
            	background =
                (w > 1920 	&& 	(xxlarge 	|| xlarge 	|| large 	|| medium 	|| small)) 	||
                (w > 1440 	&& 	(xlarge 	|| xxlarge 	|| large 	|| medium 	|| small)) 	||
                (w > 1024 	&& 	(large 		|| xlarge 	|| xxlarge 	|| medium 	|| small)) 	||
                (w > 640 	&& 	(medium 	|| large 	|| xlarge 	|| xxlarge 	|| small)) 	||
                (w > 0 		&& 	(small 		|| medium 	|| large 	|| xlarge 	|| xxlarge))

            style.backgroundImage = 'url("' + background + '")';
            style.backgroundSize = size;
            style.backgroundPosition = position;
        };
    }

    rbiUpdate();

    window.removeEventListener('resize', rbiUpdate)
    window.addEventListener('resize', rbiUpdate)
}
