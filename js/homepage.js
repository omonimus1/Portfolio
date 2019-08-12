// Initialize the mobile-sidebar for the header

<script>
        <!-- this part is important! -->
        $(document).ready(function () {
          $(".button-collapse").sideNav();
        });
</script>

<script>
    $('.round').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.arrow').toggleClass('bounceAlpha');
    });
</script>