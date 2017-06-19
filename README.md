# rbi.js - 1.5kb
rbi.js let's you control background images responsively!

## Step 1
Add http://domain.com/path/to/rbi.min.js before ```</head>```

## Step 2
Include it in any div and add the rbi class with the data-attributes shown below 
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

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
