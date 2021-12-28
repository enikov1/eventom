var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {

  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

'use strict';

const user_control = document.querySelectorAll('.item_stroke__control');

if(user_control) {
	user_control.forEach(e => {

		let control_smart_wrap = e.querySelector('.control__smart_wrap');

		e.querySelector('.control__smart').addEventListener('click', function() {
			control_smart_wrap.classList.toggle('active');
		});
	});
}


const button_user_panel = document.querySelector('.user_panel__button'),
	  drop_user_panel = document.querySelector('.user_panel__drop');

button_user_panel.addEventListener('click', (event) => {
	button_user_panel.classList.toggle('active');
	drop_user_panel.classList.toggle('active_drop');
});

document.addEventListener('click', (event) => {
	const target = event.target;
	const its_menu = target == drop_user_panel || drop_user_panel.contains(target);
	const menu_is_active = drop_user_panel.classList.contains('active_drop');

	if(target.classList && !target.classList.contains('active')) {

		if (!its_menu && menu_is_active) {
			button_user_panel.classList.remove('active');
			drop_user_panel.classList.remove('active_drop');
		}
	}
});


// auth

const auth_close = document.querySelector('.window-close'),
	  window_popup = document.querySelector('.window_overlay');
if(auth_close) {
	auth_close.addEventListener('click', () => {
		window_popup.classList.remove('active');
	});
}



// article

var swiper = new Swiper(".article__images_thumb", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

		breakpoints: {
			0: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			500: {
				slidesPerView: 6
			},
			1000: {
				spaceBetween: 12,
				slidesPerView: 6,
			}
		}
      });
      var swiper2 = new Swiper(".article__images", {
        loop: true,
        spaceBetween: 10,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        thumbs: {
          swiper: swiper,
        },
      });

const button_show_phone = document.querySelector('._js-show_phone'),
	  text_phone = document.querySelector('.change_phone');

if(button_show_phone) {
	button_show_phone.addEventListener('click', (event) => {
		event.preventDefault();

		event.target.setAttribute('style', 'display: none');

		text_phone.classList.add('active');
	});
}


// field masks
const field_price = document.querySelector('._js_mask_price');
if(field_price) {
	var numberMask = IMask(
	field_price, {
		mask: Number,
		min: 0,
		max: 10000000,
		thousandsSeparator: ' '
	});
}

const field_phone = document.querySelector('._js_mask_phone');
if(field_phone) {
	var phoneMask = IMask(
	field_phone, {
		mask: '+{7} (000) 000 00 00'
	});
}

const field_date = document.querySelector('._js_mask_date');
if(field_date) {
	let dateMask = IMask(field_date, {
		mask: 'С DD.MM.YYYY',
		lazy: false,

		blocks: {
			DD: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 31
			},
			MM: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 12
			},
			YYYY: {
				mask: IMask.MaskedRange,
				from: 1980,
				to: 2022
			}
		}
	});
}

const field_dateto = document.querySelector('._js_mask_dateto');
if(field_dateto) {
	let dateMaskTo = IMask(field_dateto, {
		mask: 'До DD.MM.YYYY',
		lazy: false,

		blocks: {
			DD: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 31
			},
			MM: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 12
			},
			YYYY: {
				mask: IMask.MaskedRange,
				from: 1980,
				to: 2022
			}
		}
	});
}


// resize textarea

let textarea = document.querySelectorAll('._js_textarea');

if(textarea) {
	textarea.forEach(e => {
		e.addEventListener('keydown', () => {
			setTimeout(() => {
				e.style.cssText = 'height:auto;';
    			e.style.cssText = 'height:' + e.scrollHeight + 'px';
			}, 1);
		});
	});
}

// filter smart

const button_filter_search = document.querySelector('.filter_setting_active'),
	  item_filter_search = document.querySelectorAll('.filter_form .smart-filter');

if(button_filter_search) {
	button_filter_search.addEventListener('click', () => {
		button_filter_search.classList.toggle('open_filter');

		if(item_filter_search) {
			item_filter_search.forEach(e => {
				if(e.getAttribute('style')) {
					e.removeAttribute('style');
				} else e.setAttribute('style', 'display: block !important;');
			});
		}
	});
}

// mobile menu

const button_mobile_menu = document.querySelector('.burger'),
	  header = document.querySelector('.header'),
	  profile_mobile = document.querySelector('.profile_mobile');

button_mobile_menu.addEventListener('click', () => {
	button_mobile_menu.classList.toggle('burger_active');

	profile_mobile.classList.toggle('active');
});

function scrollHeader() {

	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	let mediaWidth = window.innerWidth;

	if(mediaWidth < 768) {
		header.classList.add('header_fixed');
		document.querySelector('body').classList.add('header_scroll');
	} else {
		header.classList.remove('header_fixed');
		document.querySelector('body').classList.remove('header_scroll');
	}
}

if(window.innerWidth < 768) {
	scrollHeader();
}

window.addEventListener('resize', () => {
	scrollHeader();
});

// maps

const locale = document.querySelectorAll('.map_control__iframe .locale'),
	  localeParent = document.querySelector('.map_control__iframe'),
      locale_item = document.querySelector('.map_control__iframe .locale__item');

const localePosition = () => {
	if(window.innerWidth >= 768) {
		locale.forEach(e => {
			e.addEventListener('click', () => {
				let pos = e.getBoundingClientRect();
				let posParent = localeParent.getBoundingClientRect();

				let posTop = pos.top - posParent.top - locale_item.clientHeight + 16;
				let posLeft = pos.left - posParent.left - locale_item.clientWidth + 18;

				// console.log(locale_item);
				locale_item.setAttribute('style', `top: ${posTop}px; left: ${posLeft}px;`);
				locale_item.classList.add('active');
			});
		});
	} else {
		locale.forEach(e => {
			e.addEventListener('click', () => {
				locale_item.classList.add('active');
			});
		});
	}
}

if(localeParent && locale_item) {
	localePosition();

	window.addEventListener('resize', () => {
		localePosition();

		locale_item.removeAttribute('style');
		locale_item.classList.remove('active');
	});
}


