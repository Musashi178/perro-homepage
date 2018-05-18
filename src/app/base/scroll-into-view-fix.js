export function scrollIntoViewFix() {
	const offset = 56;

	const scrollIntoView = function (event) {
			event.preventDefault();
			$($(this).attr('href'))[0].scrollIntoView();
			scrollBy(0, -offset);
	};

	$('.navbar li a').click(scrollIntoView);
	$('.navbar .navbar-brand').click(scrollIntoView);
}
