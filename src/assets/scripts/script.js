$(document).ready(() => {
  console.log("The DOM is Loaded.");

    $('.direction.demo')
      .find('.buttons .button')
        .on('click', function() {
          var
            direction = $(this).data('direction')
          ;
          $(this).addClass('active').siblings().removeClass('active');
          if(direction === 'top' || direction === 'bottom') {
            $('.horizontal.button').addClass('disabled');
          }
          else {
            $('.horizontal.button').removeClass('disabled');
          }
        })
        .end()
        .children('.button')
        .on('click', function() {
          var
            transition = $(this).data('transition'),
            direction  = $('.direction.demo .buttons .button.active').data('direction'),
            dimPage    = $('.direction.demo .dim').checkbox('is checked')
          ;
          if( $(this).filter('.disabled').length === 0) {
            $('.' + direction + '.demo.sidebar')
              .not('.styled')
              .sidebar('setting', {
                dimPage          : dimPage,
                transition       : transition,
                mobileTransition : transition,
                scrollLock: true,
                returnScroll: true
              })
            ;
            $('.' + direction + '.demo.sidebar').not('.styled').sidebar('toggle');
          }

        })
    ;
});
