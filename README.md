# zero-day.ai

The site for Zero Day AI Labs. Hands-on training in how AI systems are attacked,
and how to defend the ones you put in production.

Static. Hugo builds it, GitHub Pages serves it at
[www.zero-day.ai](https://www.zero-day.ai/). Nothing else runs.

## Run it

```sh
hugo server          # http://localhost:1313
hugo                 # build into ./public
```

Hugo extended 0.165 or later. There are no submodules and no package manager.
A fresh clone builds.

## Layout

```
content/research/ markdown. a research piece is a file here.
content/training/ one file per course. The facts come from data/courses.yaml.
content/services.md, content/about.md
data/cohorts.yaml cohorts: name, season, start, end, status. The first
                  scheduled row is the one every page points at.
data/courses.yaml courses: name, blurb, enroll_url. No dates, no price.
data/services.yaml the two fixed offers.
themes/zdl/       the theme. layouts, partials, styles, the mark.
static/           files copied as they are, including CNAME.
hugo.toml         site config.
```

To announce a cohort, edit one row in `data/cohorts.yaml`. The band on every
page, the course cards, the course pages, and the offer line under every
piece update together.

## Publish

Push to `main`. The `pages` workflow builds and deploys. Writing a post is
writing markdown.

## License

Elastic License 2.0. See [LICENSE](LICENSE).
