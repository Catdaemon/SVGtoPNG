# SVGtoPNG
Converts or downloads an SVG element as a PNG. I use this to save charts which have been generated with Vega and had their DOM messed with, which prevents the default exporter from working.

# Usage
## Trigger a PNG download
Simply provide an SVG element and a filename
```javascript
SVGtoPNG.downloadPNG(document.querySelector("#headc svg"), "chart.png");
```

## Get data-uri string
```javascript
SVGtoPNG.toPNGString(document.querySelector("#headc svg"), function(data) { console.log(data); });
```
