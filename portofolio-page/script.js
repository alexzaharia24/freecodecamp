/**
 * Created by Alexander on 10/3/2016.
 */
var scrollTo = function (element) {
    $('body').animate(
        {scrollTop: ($(element).offset().top - 70)},
        1000
    );
};