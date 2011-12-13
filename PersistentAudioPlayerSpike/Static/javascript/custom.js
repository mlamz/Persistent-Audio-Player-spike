/*
	
	Methods for the persistant player prototype
	
	7digital (c) 2011
	
*/

// wrap everything in an anonymous function
(function ($) {

	/* "use strict"; */

	var player, ajaxLoader, browserHistory;

	player = {

		// method to set up the player
		setUp: function () {

			$("#jquery_jplayer_1").jPlayer({

				ready: function () {

					$(this).jPlayer("setMedia", {

						m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
						oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
					});
				},

				swfPath: "/flash",
				supplied: "m4a, oga"

			});

			return this;

		}
	};

	ajaxLoader = {
		setUp: function () {

			$("a.page-content-link").on("click", function (event) {
				console.log("***Link clicked***");
				console.log("*This href is: " + this.href);
				ajaxLoader.loadPageContent(this.href);
				event.preventDefault();
			});
			return this;
		},
		loadPageContent: function (url) {
			console.log("***loadPageContent called***");
			console.log("*This url is: " + url);

			var artistName, matchExpression, result;

			matchExpression = /\/artist\/(\w+\/?)$/;
			result = url.match(matchExpression);
			console.log(result);

			if (!result) {

				console.log("no match");
				$("#page-content").html("");

			} else {

				artistName = result[1];

				$("#page-content").load(url, { artist: artistName });


			}
			History.pushState(null, null, url);
		}
	};

	browserHistory = {
		setUp: function () {

			window.addEventListener("popstate", function (event) {
				console.log("***Popstate changed***");
				console.log("callin ajax loader");

				ajaxLoader.loadPageContent(location.pathname);
			});

			return this;
		}
	};
	/**************************************

	Ready event

	**************************************/

	$(document).ready(function () {

		/*** should remove this and any firebug console logs before live deployment */
		try { console.assert(1); } catch (e) { console = { log: function () { }, assert: function () { } }; }
		/*****************************************************************************/

		player.setUp();
		ajaxLoader.setUp();
		browserHistory.setUp();

		return true;

	});

} (jQuery));
