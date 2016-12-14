// jQuery(document).ready( function($) ){

// }


// переходы по клику на кнопки

    // $(document).on('click', '.sidebar-link', function () {
        
    //     scrollToAnchor($(this));
    //     return false;
    // });

    // function scrollToAnchor(el) {
        
    //     var body = $('body,html');

    //     var elementClick = el.attr('data-href');

    //     var destination = $('[data-id="' + elementClick + '"]').offset().top;


    //     body.stop().animate({
    //         scrollTop: destination
    //     }, 400);
    // }



    $(document).ready(function () {
        $('.sidebar-link').click(
            function (event) {
                event.preventDefault();
                $('body, html').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
            }
        );

        $(window).scroll(scrollChange);
        scrollChange();

	});

    function scrollChange() {
	    var $active = getActiveLink();
		    if (!$active.hasClass('curent')) {
		        $('.sidebar-link').removeClass('curent');
		        $('.sidebar-link').parent('li').removeClass('curent-li');
		        $active.parent('li').addClass('curent-li');
		        $active.addClass('curent');
		    }
	}

	function getActiveLink() {
    var scrollPos = $(window).scrollTop();
    var $active = null;
    $('.sidebar-link').each(
        function () {
            var $this = $(this);
            var id = $this.attr('id').replace(/^.*\-(\d+)$/, '$1');
            var $that = $('#item-' + id);

            if (scrollPos + ($(window).height() / 2) > $that.offset().top) {
                $active = $this;
            }else {
                return $active;
            	}
        });
    return $active;
}