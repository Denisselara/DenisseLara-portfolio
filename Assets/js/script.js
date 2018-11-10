<script type="text/javascript">
;( function( $ ) {

	$( '.swipebox' ).swipebox();

} )( jQuery );
</script>

$( '#gallery' ).click( function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'Assets/img/hairwoman.jpg', title:'My Caption' },
		{ href:'Assets/img/2.png', title:'My Second Caption' }
	] );
} );
