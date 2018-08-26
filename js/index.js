var plan = document.getElementsByClassName('plan')[0];
var body = document.getElementsByTagName('body')[0];
var scroll = document.getElementsByClassName('scroll-up')[0];
var popup = document.getElementsByClassName('popup')[0];
var popupTitle = popup.getElementsByClassName('popup__name')[0];
var popupStatus = popup.getElementsByClassName('popup__status')[0];
var popupFilter = popup.getElementsByClassName('popup__filter')[0];
var popupIcon = popup.getElementsByClassName('popup__icon')[0];
var popupController = popup.getElementsByClassName('popup__controller')[0];
var mobileFilter = document.getElementsByClassName('mobile-filter')[0];

var area = {
  scripts: document.getElementsByClassName('scripts')[0],
  devices: document.getElementsByClassName('devices')[0]
};

var pagination = {
  scripts: $('.pagination__scripts'),
  devices: $('.pagination__devices'),
};

var content = document.getElementsByClassName('content')[0];

plan.onscroll = function () {
  var scrolled = plan.scrollTop;
  scroll.style.opacity = 1 - (2 * scrolled) / 100;
}

function openFilter() {
  mobileFilter.className = 'mobile-filter mobile-filter_opened';
  content.className = "content content_blured";
}

function closeFilter() {
  mobileFilter.className = 'mobile-filter';
  content.className = "content";
}

function selectFilter(el, selected) {
  var text = el.innerHTML;
  $('.mobile-filter__list-item_selected').removeClass('mobile-filter__list-item_selected');
  el.className = 'mobile-filter__list-item mobile-filter__list-item_selected';

  $('.filter__choose').text(text);
  $(`#${selected}`).prop('checked', true);
}

function showPopup(el, type, control) {
  var name = el.getElementsByClassName('card__name')[0].innerHTML;
  var status = el.getElementsByClassName('card__status')[0].innerHTML;
  popupTitle.innerHTML = name;
  popupStatus.innerHTML = status;
  popupIcon.className = `popup__icon popup_type_${type}`
  popupIcon.getElementsByClassName('icon')[0].className = `icon icon__${type}`

  if (control) {
    popupController.className = `popup__controller controller_type_${control}`;
    popupFilter.className = `popup__filter popup__filter_type_${control}`;
  }
  else {
    popupController.className = `popup__controller`;
    popupFilter.className = 'popup__filter';
  }

  popup.className = "popup popup__opened";
  content.className = "content content_blured";

  body.className = "content_no-scroll";
}

function closePopup(el) {
  popup.className = "popup popup_hidden";
  content.className = "content";

  body.className = "";

}

function check(el, part) {
  if(el.clientWidth + el.scrollLeft == el.scrollWidth) {
    pagination[part].children('.arrow_mirror').removeClass('arrow_active')
  } else pagination[part].children('.arrow_mirror').addClass('arrow_active');

  if(el.scrollLeft == 0) {
    pagination[part].children('.arrow').first().removeClass('arrow_active')
  } else pagination[part].children('.arrow').first().addClass('arrow_active');

}

function scrollBack(part) {
  $(`.${part}`).animate({
    scrollLeft: area[part].scrollLeft - 645
  }, 300);
}

function scrollForward(part) {
  $(`.${part}`).animate({
    scrollLeft: area[part].scrollLeft + 645
  }, 300);
}
