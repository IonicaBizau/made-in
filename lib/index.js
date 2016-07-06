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
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function madeIn (loc, options, cb) {
    options = ul.merge(options, {
        top: 20
      , language: ""
      , token: undefined
    });

    let gh = new GitHub(options.token);
    https://api.github.com/search/users?q=location:Romania%20language:ruby
    gh.get("search/users", {
        opts: {
            q: `location:${loc} ${options.language ? "language:" + options.language : ""}`
          , sort: "followers"
        }
    }, (err, data) => {
        if (err) { return cb(err); }
        let users = data.items;

        sameTime(bindy(users, (cUser, done) => {
            gh.get("search/repositories", {
                opts: {
                    q: `user:${cUser.login} fork:false stars:>1 ${options.language ? "language:" + options.language : ""}`
                  , sort: "stars"
                }
            }, done);
        }), (err, data) => {
            if (err) { return cb(err); }
            let repos = [];
            data.forEach(c => repos = repos.concat(c.items))
            repos.sort((a, b) => a.stargazers_count < b.stargazers_count ? 1 : -1)
            cb(null, repos);
        });
    });
};
