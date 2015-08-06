# redirect.strawlab.org

This is the sourcecode to [http://redirect.strawlab.org](http://redirect.strawlab.org).

This site was built according to the recipe by [Brent Jackson](http://jxnblk.com/writing/posts/static-site-generation-with-react-and-webpack/)

## one weird thing about development

Due to behavior with react-router that I don't understand, I was getting React
errors much like
[this](https://github.com/rackt/react-router/issues/1402#issuecomment-116723037).
To workaround this issue, I found that URL paths should end with "/".

## prior to building or developing

You must install `node_modules`:

    npm update

## building for deployment

To build the site, you need npm installed. Then:

    npm run webpack

The resulting site will be in `_site`.

## development

To run a development server, run:

    npm start
