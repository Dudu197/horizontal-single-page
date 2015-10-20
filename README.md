<h1>Horizontal Single Page</h1>
<h2>How to use:</h2>
<div class="highlight highlight-source-js">
	<pre>
		$("body").horizontal({ // This will apend the carousel to body
			order: [["#index", "/"], ["#page-one", "/one"], ["#page-two", "/two"]]
			// The order of the pages, being an Array of Array, where
			// the second Array is formed by frame's id and frame's url.
	        frame: ".frame", // A class (or other attribute of your preference)
	        to be the frames
	        ready: function(){}, // Callback after render all,
	        // use this instead $(document).ready
	        minWidth: 767 // The minimun width for the single page work.
	        // If the page width is less than stated, it will work as a normal page
		});
	</pre>
</div>