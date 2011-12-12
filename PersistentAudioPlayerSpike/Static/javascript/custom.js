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

			$(".artist-link").on("click", function (event) {

				var artistName, url, matchExpression, result;

				url = this.href;
				matchExpression = /\/artist\/(\w+\/?)$/;
				result = url.match(matchExpression);
				artistName = result[1];
				
				$("#page-content").load(this.href, { artist: artistName });
				History.pushState({ foo: "bar" }, $(this).attr("title"), this.href);
				event.preventDefault();
			});
			return this;
		}
	};

	browserHistory = {
		setUp: function () {

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

	// close the anonymous function wrapper
	// and invoke it now

} (jQuery));
