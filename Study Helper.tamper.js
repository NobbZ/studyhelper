// ==UserScript==
// @name		Study Helper
// @namespace	http://userscript.nobbz.de/
// @version		0.0.0
// @description	A small handfull of helpers for the game teacher-story
// @match		http://teacher-story.com/
// @copyright	2013+, Norbert “NobbZ” Melzer
// @author		Norbert “NobbZ” Melzer
// @require		http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var xpVal	= $(".bar").data("val");
var xpMax	= $(".bar").data("max");

$(".progressBar.teacherXP").text(xpVal + "/" + xpMax);
