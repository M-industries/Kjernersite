# Kjerner website

## Markdown

Markdown is converted using [kramdown](https://kramdown.gettalong.org/),
which has a [quick reference guide](https://kramdown.gettalong.org/quickref.html).

## Jekyll

The site is built using [Jekyll](https://jekyllrb.com/docs/home/),
for which there are guides and docs aplenty.

All commits to the `gh-pages` branch result in an update of the public website.


## Page elements

A link to a blog article:
```
<a class="bloglink" href="/Kjernersite/jekyll/update/2018/11/26/welcome-to-jekyll.html">More about us</a>
```

Quotes are simply markdown quotes: `> some quote`. Add a `span` add the end to name the author of the quote: `> some quote <span>Mr. De Vries</span>`

Big full-spread banners:
```
<div class="banner blue3 animel">
	<span>Get to the core of what you do</span>
</div>
```
You can use `1` through `5`, for both `blue` and `orange`.

Images can be put in the assets directory. To show them in a blog post insert an image like so: `![]({{ 'assets/design-session.jpg' | relative_url }})`
