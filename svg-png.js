var SVGtoPNG = {
    toPNGString: function(svg, callback) {
        // Create a temporary canvas of the correct size
        var bbox = svg.getBoundingClientRect();
        var canvas = document.createElement("canvas");
            canvas.width = bbox.width;
            canvas.height= bbox.height;
        // Get the rendering context for the canvas we created
        var context = canvas.getContext('2d');

        // Get data from the SVG element
        var svgString = new XMLSerializer().serializeToString(svg);

        // Create an Image and render it to the canvas
        var img = new Image();
        img.onload = function () {
            // Render the image
            context.drawImage(this, 0, 0);
            // Return the PNG data url to the callback function
            callback(canvas.toDataURL());
            // Destroy the temporary canvas
            canvas.remove();
        }
        img.src = 'data:image/svg+xml;charset=utf8,' + encodeURIComponent(svgString);
    },

    downloadPNG: function(svg, filename) {
        this.toPNGString(svg, function(image) {
            var a = document.createElement('a');
            a.href = image;
            a.setAttribute('download', filename);
            a.click();
            a.remove();
        });
    }
};
