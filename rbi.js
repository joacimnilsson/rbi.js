
/*
        _       _         _       
       | |     (_)       (_)      
 _ __  | |__    _         _   ___ 
| '__| | '_ \  | |       | | / __|
| |    | |_) | | |  _    | | \__ \
|_|    |_.__/  |_| (_)   | | |___/
                        _/ |      
                       |__/  
Version: 0.9.3
Author: Joacim Nilsson
Website: http://joacimnilsson.se/rbi
Docs: http://joacimnilsson.se/rbi
Repo: https://github.com/joacimnilsson/rbi.js
*/
function rbi() {

    function isRetinaDisplay() {
        if (window.matchMedia) {
            var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
            return (mq && mq.matches || (window.devicePixelRatio > 1)); 
        }
    }

    function rbiUpdate() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            images = document.querySelectorAll('.rbi');

        [].forEach.call(images, itterate);

        function itterate(img) {
            var sm = 		 img.getAttribute('data-rbi-sm'),
            	md = 		 img.getAttribute('data-rbi-md'),
           	lg = 		 img.getAttribute('data-rbi-lg'),
            	xlg = 		 img.getAttribute('data-rbi-xlg'),
            	xxlg = 		 img.getAttribute('data-rbi-xxlg'),

                sm2x =       img.getAttribute('data-rbi-sm2x'),
                md2x =       img.getAttribute('data-rbi-md2x'),
                lg2x =       img.getAttribute('data-rbi-lg2x'),
                xlg2x =      img.getAttribute('data-rbi-xlg2x'),
                xxlg2x =     img.getAttribute('data-rbi-xxlg2x'),

            	size = 		 img.getAttribute('data-rbi-size'),
            	position = 	 img.getAttribute('data-rbi-position'),
            	attachment = img.getAttribute('data-rbi-attachment'),

            	style = img.style;

            if(isRetinaDisplay()) {

                var background =
                    (w > 1920 && (xxlg2x || xxlg || xlg2x  || xlg  || lg2x   || lg   || md2x   || md   || sm2x   || sm))   ||
                    (w > 1440 && (xlg2x  || xlg  || xxlg2x || xxlg || lg2x   || lg   || md2x   || md   || sm2x   || sm))   ||
                    (w > 1024 && (lg2x   || lg   || xlg2x  || xlg  || xxlg2x || xxlg || md2x   || md   || sm2x   || sm))   ||
                    (w > 640  && (md2x   || md   || lg2x   || lg   || xlg2x  || xlg  || xxlg2x || xxlg || sm2x   || sm))   ||
                    (w > 0    && (sm2x   || sm   || md2x   || md   || lg2x   || lg   || xlg2x  || xlg  || xxlg2x || xxlg));

            } else {

                var background =
                    (w > 1920 && (xxlg || xlg  || lg   || md   || sm)) 	 ||
                    (w > 1440 && (xlg  || xxlg || lg   || md   || sm)) 	 ||
                    (w > 1024 && (lg   || xlg  || xxlg || md   || sm)) 	 ||
                    (w > 640  && (md   || lg   || xlg  || xxlg || sm))   ||
                    (w > 0 	  && (sm   || md   || lg   || xlg  || xxlg));

            }

            style.backgroundImage = 'url("' + background + '")';
            style.backgroundSize = size;
            style.backgroundPosition = position;

            if(w < 768) {
            	attachment = 'scroll';
        	}

            style.backgroundAttachment = attachment;
        };
    }

    rbiUpdate();

    window.removeEventListener('resize', rbiUpdate)
    window.addEventListener('resize', rbiUpdate)
}
