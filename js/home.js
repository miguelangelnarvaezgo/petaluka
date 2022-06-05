import * as content from "_content.js";
import * as scroll from "_scrollSmooth.js";
import * as nav from "_nav.js";
import * as start from "_toStart.js";
// import * as app from "_app.js";

window.onload = function () {
  const home = content.content.home;
  content.article01InyectContent(home);
  scroll.scrollSmooth('.a-menu-item', ['#article-0', '#article-1', '#article-2', '#article-3']);
  scroll.scrollSmooth('#a-to-start', ['body']);
}

window.onscroll = function() {
  nav.navOnOffScrollControl();
  nav.navSwitchStyles();
  start.toStartOnOffScrollControl();
};
