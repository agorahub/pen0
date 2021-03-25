# PEN⓪ 
![Agora Flag](./assets/favicon.png) ![RoA Pen](./assets/images/roa-pen0.png)

Preview publishing platform of the [Agora PEN Project](https://github.com/agorahub/AIPs/issues/1).

## Test and Deploy

```
$ gem install bundler jekyll
$ vim _config.yml # Configure to test or deploy.

$ bundle exec jekyll serve
# => Now browse to http://localhost:4000

$ JEKYLL_ENV=production bundle exec jekyll build
# Copy the compiled codes from _site/ to html server.
```

## How to Contribute

### Write Columns

Please follow the [TEMPLATE](./_collections/_columns/0000-00-00-column-template.md), and commit your articles in the [_COLUMNS](./_collections/_columns).

- Commit via upload is recommended
- Direct commit is enabled for editors
- Pull request is required for members
- Non-coders can post articles [HERE](https://github.com/agorahub/pen0/issues/new)

### Draft Heros

The [PEN Board](https://github.com/orgs/agorahub/teams/pen) manages this publication on behalf of the [Agora Community](https://github.com/agorahub).

- Join the Agora - [agorahub/_join](https://github.com/agorahub/_join)
- Start exploring - [agorahub/_meta](https://github.com/agorahub/_meta)
- Join the Board - [@agorahub/pen](https://github.com/orgs/agorahub/teams/pen)

### Improve PEN

- [AIP-PEN Proposal Issue](https://github.com/agorahub/AIPs/issues/1)
- [AIP-PEN Project Board](https://github.com/agorahub/AIPs/projects/1)
- [New Features Waitlist](https://github.com/agorahub/pen0/issues/3)
