
# made-in

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/made-in.svg)](https://www.npmjs.com/package/made-in) [![Downloads](https://img.shields.io/npm/dt/made-in.svg)](https://www.npmjs.com/package/made-in) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get GitHub projects created by users from a specific location.

## :cloud: Installation

```sh
$ npm i --save made-in
```


## :clipboard: Example



```js
const madeIn = require("made-in");

// Some cool JS stuff made in Romania
madeIn("Romania", {
    language: "JavaScript"
  , token: "..."
}, (err, data) => {
    console.log(err || data.map(c => c.full_name).join("\n"));
    // IonicaBizau/git-stats
    // IonicaBizau/scrape-it
    // skidding/cosmos
    // victorstanciu/dbv
    // skidding/dragdealer
    // flaviusmatis/simplePagination.js
    // cthackers/adm-zip
    // ghinda/jotted
    // alessioalex/ClientManager
    // IonicaBizau/image-to-ascii
    // IonicaBizau/medium-editor-markdown
    // balajmarius/adi.js
    // ...
});
```

## :memo: Documentation


### `madeIn(loc, options, cb)`
Get GitHub projects created by users from a specific location.

#### Params
- **String** `loc`: The user location.
- **Object** `options`: An object containing the following fields:
 - language (String): The repository language.
 - token (String): The GitHub token.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
