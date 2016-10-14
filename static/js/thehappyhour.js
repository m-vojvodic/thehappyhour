'use strict';

// helper
const getRandomNumber = function(min, max) {
  return (Math.random() * (max - min + 1)) + min;
}

// randomizes the distort effect on each mouse enter
const distort = function() {
    const img = document.querySelector('.img-rally');
    const img_distort = document.querySelector('.img-rally-distort');

    img_distort.height = img.height;
    img_distort.width = img.width;

    var img_distort_html = '';
    let translate;

    for (var i = 0; i < img.height; i+= 2) {
        translate = getRandomNumber(-10, 10);
        img_distort_html += '<span class="img-rally-distort-wrap" style="width: '
                            + img.width
                            + 'px; transform: translate('
                            + translate
                            + 'px, '
                            + i
                            + 'px)">'
                            + '<span class="img-rally-distort-target" style="transform: translate('
                            + translate
                            + 'px, -'
                            + i
                            + 'px)">'
                            + '<img class="img-rally" src="static/img/rally.jpg">'
                            + '</span>'
                            + '</span>';
    }

    img.style.display = 'none';
    img_distort.style.display = 'inline';
    img_distort.innerHTML = img_distort_html;
}

// reverses the distort effect
const undistort = function() {
    const img = document.querySelector('.img-rally');
    const img_distort = document.querySelector('.img-rally-distort');

    img.style.display = 'inline';
    img_distort.style.display = 'none';
    img_distort.innerHTML = '';
}
