"use strict";

const GitHub = require("gh.js")
    , ul = require("ul")
    , bindy = require("bindy")
    , sameTime = require("same-time")
    ;

/**
 * madeIn
 * Get GitHub projects created by users from a specific location.
 *
 * @name madeIn
 * @function
 * @param {String} loc The user location.
 * @param {Object} options An object containing the following fields:
 *
 *  - language (String): The repository language.
 *  - token (String): The GitHub token.
 *
 * @param {Function} cb The callback function.
 */
module.exports = function madeIn (loc, options, cb) {

    options = ul.merge(options, {
        language: ""
      , token: undefined
    });

    if (options.language) {
        options.language = `language:"${options.language}"`;
    }

    let gh = new GitHub(options.token);

    gh.get("search/users", {
        opts: {
            q: `location:${loc} ${options.language}`
          , sort: "followers"
          , per_page: 29
        }
    }, (err, data) => {
        if (err) { return cb(err); }
        let users = data.items;
        let repos = [];

        sameTime(bindy(users, (cUser, done) => {
            gh.get("search/repositories", {
                opts: {
                    q: `user:${cUser.login} fork:false stars:>1 ${options.language}`
                  , sort: "stars"
                }
            }, (err, data) => {
                if (err) { data = { items: [] }; }
                repos = repos.concat(data.items);
                done();
            });
        }), (err, data) => {
            if (err) { return cb(err); }
            repos.sort((a, b) => a.stargazers_count < b.stargazers_count ? 1 : -1)
            cb(null, repos);
        });
    });
};
