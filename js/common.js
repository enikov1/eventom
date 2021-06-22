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

const auth_close = document.querySelector('.auth_wrap-close'),
	  window_popup = document.querySelector('.window_overlay');
if(auth_close) {
	auth_close.addEventListener('click', () => {
		window_popup.classList.remove('active');
	});
}



// article

var swiper = new Swiper(".article__images_thumb", {
        // loop: true,
        spaceBetween: 12,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
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