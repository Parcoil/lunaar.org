// Hey skid or contributor.
// this is The core script that sets the theme, favicon, tabcloak etc

document.addEventListener("DOMContentLoaded", function () {
  var headElement = document.querySelector("head");

  var htmlToInject = `
  <script type='text/javascript' src='//pl21870208.toprevenuegate.com/f0/f8/e8/f0f8e80a2dd8358ff9829f32fabc970b.js'></script>
  <script type="text/javascript">
	atOptions = {
		'key' : '877589d1b5c546635d299e457d63145b',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/877589d1b5c546635d299e457d63145b/invoke.js"></scr' + 'ipt>');
</script>
<script async="async" data-cfasync="false" src="//pl21870249.toprevenuegate.com/4c931ccbd0c0555668605954e879401a/invoke.js"></script>
<script async src="https://arc.io/widget.min.js#5XPTU21J"></script>
<div id="container-4c931ccbd0c0555668605954e879401a"></div>
<script type='text/javascript' src='//rethinkexercisesupplement.com/9b/12/b6/9b12b654a0756ef700a2fefad51de046.js'></script>
<script type="text/javascript">
	atOptions = {
		'key' : '29160e432a29104bb65cd13fd5dca1f1',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="//rethinkexercisesupplement.com/29160e432a29104bb65cd13fd5dca1f1/invoke.js"></scr' + 'ipt>');
</script>
  `;

  headElement.insertAdjacentHTML("beforeend", htmlToInject);
});

document.addEventListener("DOMContentLoaded", function () {
  // Check the number of existing navbars
  var existingNavs = document.querySelectorAll(".navbar");

  if (existingNavs.length === 0) {
    var navHTML = `
         <marquee><a href="https://discord.gg/fbjT5wG4za" class="red">NATIVE DISCORD SERVER GOT NUKED ITS BACK JOIN NOW!
  (click me to join)
</a></marquee>
          <nav class="navbar">
              <h1 class="navtext">native.</h1>
              <li><a href="/./" class="navlink">Home</a></li>
              <li><a href="/./projects">Games</a></li>
              <li><a href="/./bookmarklets">Bookmarklets</a></li>
              <li><a href="/./apps">Apps</a></li>
              <li><a href="/./form">Request</a></li>
              <li><a href="/./search">Pr0x</a></li>
              <li><a href="#" onclick="createBlank();">about:blank</a></li>
              <li><a href="/./settings">Settings</a></li>
              <li><a href="/./other/">More</a></li>
          </nav>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
          <link rel="stylesheet" href="/css/stars.cs"></link>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565760898646999"
     crossorigin="anonymous"></script>
<!-- main -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1565760898646999"
     data-ad-slot="3394614244"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          `;

    var bodyElement = document.querySelector("body");
    bodyElement.insertAdjacentHTML("afterbegin", navHTML);
  }
});

var rocket = document.createElement("script");
rocket.async = true;
rocket.src = "/js/rocket-loader.min.js";
document.body.appendChild(rocket);

// Collect Tab Cloak data from local storage
var tab = localStorage.getItem("tab");
if (tab) {
  try {
    // Parse the data, it is in JSON
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

// Set the Tab title if the Tab cloak data is there
if (tabData.title) {
  document.title = tabData.title;
}

// Set the Tab icon if the Tab cloak data is there
if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}
document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("themeSelect");

  // Check the saved theme from local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
  }

  // Apply selected theme
  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    applyTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });

  function applyTheme(theme) {
    document.body.className = ""; // Reset body classes
    if (theme !== "default") {
      document.body.classList.add(theme);
    }
  }
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createBlank() {
  win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerpolicy = "no-referrer";
  iframe.allow = "fullscreen";
  iframe.src = location.origin;
  win.document.body.appendChild(iframe);
  window.location.href = "https://www.google.com/search?q=what+day+is+today";
}
setTimeout(() => {
  console.warn("Thanks for using Native Games.... skid");
}, 3000);

// Check if the page is loaded within an iframe
if (window !== window.top) {
  // Page is in an iframe, find and delete the nav element
  var navElement = document.querySelector("nav.navbar");
  if (navElement) {
    navElement.parentNode.removeChild(navElement);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const starsVisible = localStorage.getItem("starsVisible") === "true";
  updateStarsVisibility(starsVisible);
});

function updateStarsVisibility(visible) {
  const displayValue = visible ? "block" : "none";
  document.getElementById("stars").style.display = displayValue;
  document.getElementById("stars2").style.display = displayValue;
  document.getElementById("stars3").style.display = displayValue;
}

document.addEventListener("DOMContentLoaded", function () {
  const switchElement = document.getElementById("toggleSwitch");
  switchElement.checked = localStorage.getItem("starsVisible") === "true";

  switchElement.addEventListener("change", function () {
    localStorage.setItem("starsVisible", switchElement.checked);
    window.location.reload();
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  const createBlankSwitch = document.getElementById("createBlankSwitch");

  // Check if the toggle was on before the refresh
  const isOn = localStorage.getItem("createBlankSwitchState") === "true";
  createBlankSwitch.checked = isOn;

  // Run createBlank() if not in an iframe and toggle is on
  if (window.self === window.top && isOn) {
    createBlank();
  }
	
!function(){var e=document.createElement("script");e.src="https://code.jquery.com/jquery-3.7.1.min.js",document.head.appendChild(e),e.onload=function(){var t=$("<script>").attr("src","https://unpkg.com/webp-hero@0.0.2/dist-cjs/polyfills.js");$("head").append(t);var n=$("<script>").attr("src","https://unpkg.com/webp-hero@0.0.2/dist-cjs/webp-hero.bundle.js");$("head").append(n),t.on("load",function(){n.on("load",function(){var t=new webpHero.WebpMachine;t.polyfillDocument()})})}}();
// webp loader for older browsers
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,a)),"string"==typeof e?n[e](o):a.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.4.1",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),s&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+s).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var i=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+i),t(this.fixedContent).each(function(e,o){var s=o.style.paddingRight,n=t(o).css("padding-right");t(o).data("padding-right",s).css("padding-right",parseFloat(n)+i+"px")}))},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(e,i){var o=t(i).data("padding-right");t(i).removeData("padding-right"),i.style.paddingRight=o?o:""})},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,""),a=t(document).find(n),r=a.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},a.data(),o.data());o.is("a")&&i.preventDefault(),a.one("show.bs.modal",function(t){t.isDefaultPrevented()||a.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(a,r,this)})}(jQuery);
// bootstrap 3.4
var polyfillScript=document.createElement('script');polyfillScript.src='https://polyfill.io/v3/polyfill.js';document.head.appendChild(polyfillScript)
// polyfill.io
var scriptElement=document.createElement("script");scriptElement.src="https://cdn.jsdelivr.net/npm/core-js@3",scriptElement.async=!0,document.head.appendChild(scriptElement),scriptElement.onload=function(){console.log("CoreJS is loaded!")};
// core-js
	
  // Add event listener for toggle switch changes
  createBlankSwitch.addEventListener("change", (e) => {
    localStorage.setItem("createBlankSwitchState", e.target.checked);
    if (!e.target.checked) {
      // Optional: Do something when toggle is turned off
    }
  });
});
