let images = document.querySelectorAll('.slider img');
let current = 0;

function slider() {
	for (let i=0; i < images.length; i++) {
		images[i].classList.add('opacity0');
	}
		images[current].classList.remove('opacity0')
		if (current++ == images.length) {
			current = 0;
		}
}

//document.querySelector('.slider').onclick = slider
document.querySelector('.btn-left').onclick = function(){
	current--;
	if (current < 0) current = images.length - 1;
	for (let i = 0; i < images.length; i++) {
		images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
}
document.querySelector('.btn-right').onclick = function () {
	console.log('hi')
	current++;
	if (current >= images.length) current = 0;
	for (let i = 0; i < images.length; i++) {
		images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
}

/*const bullets = $(".bullets div")
bullets.each()
.on('click', () => {
	alert('hello')
})*/

$( ".bullets div" ).each(function(index) {
    $(this).on("click", function(){
        for (let i=0; i < images.length; i++) {
		images[i].classList.add('opacity0');
	}
		images[index].classList.remove('opacity0')
    });
});

