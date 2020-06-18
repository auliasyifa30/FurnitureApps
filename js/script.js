//event pada saat link diklik
//jquery tolong carikan saya suatu elemen dengan nama page-scroll, pada saat on maka click dan jalankan fungsi berikut ini
$('.page-scroll').on('click', function(e) {

	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	//swing dan linear adalah efek meng scroll dalam jquery
	$('html , body').animate({
  		scrollTop: elemenTujuan.offset().top - 50
 	});

 	e.preventDefault();

});


//menyimpan parallax

//untuk about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	//untuk jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//untuk portfolio
	//fungsi each digunakan untuk menampilkan foto disetiap 2000s
	if (wScroll > $('.portfolio').offset().top - 200) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		
	}
});