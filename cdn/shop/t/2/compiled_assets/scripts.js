// translating
if (localStorage.getItem("mylang")) {
  // Retrieve the value from localStorage
  var lang = localStorage.getItem("mylang");
} else {
  // If the variable doesn't exist in localStorage, initialize it
  var lang = 'en';
}
//This function will be called when user click changing language
function translate(lng, tagAttr) {
  $(".select-language>img").attr("src", `cdn/shop/files/${lng}.svg`);
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
}
// $(document).ready(function () {
//   //This is id of HTML element (English) with attribute lng-tag
//   $("#enTranslator").click(function () {
//     translate('en', 'lng-tag');
//     lang = 'en';
//     localStorage.setItem("mylang", lang);
//   });
//   //This is id of HTML element (Italy) with attribute lng-tag
//   $("#itTranslator").click(function () {
//     translate('it', 'lng-tag');
//     lang = 'it';
//     localStorage.setItem("mylang", lang);
//   });
// });



function enTrans() {
    translate('en', 'lng-tag');
    lang = 'en';
    localStorage.setItem("mylang", lang);
  }

function itTrans() {
    translate('it', 'lng-tag');
    lang = 'it';
    localStorage.setItem("mylang", lang);
  }
  
$(document).ready(function () {
  //This is class of HTML elements (English) with attribute lng-tag
  $(".enTranslator").click(function () {
    translate('en', 'lng-tag');
    lang = 'en';
    localStorage.setItem("mylang", lang);
  });
  //This is class of HTML elements (Italy) with attribute lng-tag
  $(".itTranslator").click(function () {
    translate('it', 'lng-tag');
    lang = 'it';
    localStorage.setItem("mylang", lang);
  });
});
let translateMenu = (event) =>
{
    event.stopPropagation();
  $(".select-language-sub").toggle();
}



$(".select-language").on("click", function (event) {
    event.stopPropagation();
  $(".select-language-sub").toggle();
});
$(window).on("click", function () {
  $(".select-language-sub").hide();
});

