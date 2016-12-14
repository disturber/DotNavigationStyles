
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
