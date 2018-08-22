var plan = document.getElementsByClassName('plan')[0];
var body = document.getElementsByTagName('body')[0];
var scroll = document.getElementsByClassName('scroll-up')[0];
var popup = document.getElementsByClassName('popup')[0];
var popupTitle = popup.getElementsByClassName('popup__name')[0];
var popupStatus = popup.getElementsByClassName('popup__status')[0];
var popupFilter = popup.getElementsByClassName('popup__filter')[0];
var popupIcon = popup.getElementsByClassName('popup__icon')[0];
var popupController = popup.getElementsByClassName('popup__controller')[0];

var content = document.getElementsByClassName('content')[0];

plan.onscroll = function () {
  var scrolled = plan.scrollTop;
  scroll.style.opacity = 1 - (2 * scrolled) / 100;
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
