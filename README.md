# Kjerner website

## Markdown

Markdown is converted using [kramdown](https://kramdown.gettalong.org/),
which has a [quick reference guide](https://kramdown.gettalong.org/quickref.html).

## Jekyll

The site is built using [Jekyll](https://jekyllrb.com/docs/home/),
for which there are guides and docs aplenty.

All commits to the `gh-pages` branch result in an update of the public website.


## Page elements


### Link to a blog article
```
<a class="bloglink" href="/Kjernersite/jekyll/update/2018/11/26/welcome-to-jekyll.html">More about us</a>
```

### Quotes
Quotes are simply markdown quotes: 
```
> some quote
```

Add a `<span>` at the end to name the author of the quote: 

```
> some quote <span>Mr. De Vries</span>
```

### Banners
Big full-spread banners are prepared with blue and orange colors. Add one to a page or glob post by inserting this html:
```
<div class="banner animel blue3">
	<span>Get to the core of what you do</span>
</div>
```
You can use `1` through `5`, for both blue (e.g. `blue1`) and orange (e.g. `orange5`). The text inside the `<span>` is printed in white on top of the banner (best keep it short!).


### Images
Store the images files in the assets directory. Add a subdirectory to keep it clean.
To show them in a blog post insert an image like so: 
```
![]({{ 'assets/about/office.jpg' | relative_url }})
```

### Slideshows
To show multiple images in a slideshow:
- Add the images to the assets directory.
- List the images you want to include in the frontmatter (the data section at the top of the page), in a `slides` array:
  `slides: ['assets/photo/1.jpg', 'assets/photo/2.jpg',]`
- Include the slideshow element where you want it to appear on the page:
  `{% include slideshow.html %}`
