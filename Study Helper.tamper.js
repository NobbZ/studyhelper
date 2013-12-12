// ==UserScript==
// @name        Study Helper
// @namespace   http://userscript.nobbz.de/
// @version     0.0.1
// @downloadURL https://github.com/NobbZ/studyhelper/raw/master/Study%20Helper.tamper.js
// @description A small handfull of helpers for the game teacher-story
// @match       http://teacher-story.com/
// @copyright   2013+, Norbert “NobbZ” Melzer
// @author      Norbert “NobbZ” Melzer
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var shVersion = GM_info.script.version;

console.log("Study Helper v" + shVersion + " started");

var xpVal	= $(".bar").data("val");
var xpMax	= $(".bar").data("max");

$(".progressBar.teacherXP").text(xpVal + "/" + xpMax + " (" + (xpMax - xpVal) + ")");

console.log("Study Helper v" + shVersion + " finished");