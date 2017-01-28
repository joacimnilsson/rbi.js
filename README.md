# rbi.js
rbi.js let's you control background images responsively!

## Step 1
Add http://domain.com/path/to/rbi.min.js before ```</head>```

## Step 2
Include it in any div and add the rbi class with the data-attributes shown down below 
```html
<div class="{your classes here} rbi"
	data-rbi-sm="{image src}"
	data-rbi-md="{image src}"
	data-rbi-lg="{image src}"
	data-rbi-xlg="{image src}"
	data-rbi-xxlg="{image src}"

	data-rbi-sm2x="{retina image src}"
	data-rbi-md2x="{retina image src}"
	data-rbi-lg2x="{retina image src}"
	data-rbi-xlg2x="{retina image src}"
	data-rbi-xxlg2x="{retina image src}"

	data-rbi-size="{ css background-size: values in here }"
	data-rbi-position="{ css background-position: values in here }"
	data-rbi-attachment="{ css background-attachment: values in here }"
></div>
```

## Step 3
Call the function rbi();

I recommend you call it directly after the first section of your page. It could be the hero or a big slideshow. And also when document has loaded. You can call it as many time as you want.

# Enjoy!
Link your site if you use it! :D
