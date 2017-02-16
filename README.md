# git-flow (Dreidev Edition)

[![npm version](https://badge.fury.io/js/gitflow.svg)](https://badge.fury.io/js/gitflow) [![Build Status](https://travis-ci.org/dreidev/gitflow.svg?branch=master)](https://travis-ci.org/dreidev/gitflow)

A collection of Git extensions to provide high-level repository operations
for Vincent Driessen's [branching model](http://nvie.com/git-model "original
blog post"). This fork adds functionality not added to the original branch. [wiki](http://github.com/dreidev/gitflow/wiki)


## Getting started

For the best introduction to get started with `git flow`, please read Jeff
Kreeftmeijer's blog post:

[http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)

Or have a look at one of these screen casts:

* [How to use a scalable Git branching model called git-flow](http://buildamodule.com/video/change-management-and-version-control-deploying-releases-features-and-fixes-with-git-how-to-use-a-scalable-git-branching-model-called-gitflow) (by Build a Module)
* [A short introduction to git-flow](http://vimeo.com/16018419) (by Mark Derricutt)
* [On the path with git-flow](https://vimeo.com/codesherpas/on-the-path-gitflow) (by Dave Bock)

A quick cheatsheet was made by Daniel Kummer:

[http://danielkummer.github.io/git-flow-cheatsheet/](http://danielkummer.github.io/git-flow-cheatsheet/)

## Installing git-flow

```shell
npm i -g gitflow #Mac and Linux users only, will fail on windows
```

## For help, questions, feature requests and bug reports
open an issue.

## Contributing

Fork the repository.  Then, run:

```shell
git clone -b master git@github.com:<username>/gitflow.git
cd gitflow
```

The `-b master` switch has to be added since the fork operation automatically 
clones the `develop` branch of the official gitflow repository and cloning it 
results in a local repository with just a `develop` branch.

If you do not have gitflow installed yet install it by running `make && make install`.

After that initialize the local gitflow repository with gitflow itself:

```shell
git flow init -d
git flow feature start <your feature>
```

Then, do work and commit your changes.

```shell
git flow feature publish <your feature>
```

When done, open a pull request to your feature branch.

## License terms

git-flow is published under the FreeBSD License, see the
[LICENSE](LICENSE) file. Although the FreeBSD License does not require you to
share any modifications you make to the source code, you are very much
encouraged and invited to contribute back your modifications to the community,
preferably in a Github fork, of course.


## git flow usage

### Initialization

To initialize a new repo with the basic branch structure, use:

    git flow init [-d]

This will then interactively prompt you with some questions on which branches
you would like to use as development and production branches, and how you
would like your prefixes be named. You may simply press Return on any of
those questions to accept the (sane) default suggestions.

The ``-d`` flag will accept all defaults.

![Screencast git flow init](http://i.imgur.com/lFQbY5V.gif)

### Creating feature/release/hotfix/support branches

* To list/start/finish/delete feature branches, use:

   * Note, if installed via npm the 'git' can be dropped from every command.

        git flow feature (flow)
        git flow feature start <name> [<base>] (flow feature start/flow start/git start)
        git flow feature pause (flow feature pause/flow pause/git pause)
        git flow feature interrupt (flow feature interrupt/flow interrupt/git interrupt)
        git flow feature resume <name> (flow feature resume/flow resume/git resume)
        git flow feature finish <name> (flow feature finish/flow finish/git finish)
        git flow feature delete <name> (flow feature delete/flow delete/git delete)

  For feature branches, the `<base>` arg must be a branch, when omitted it defaults to the develop branch.

* To push/pull a feature branch to the remote repository, use:

        git flow feature publish <name> (flow feature publish/flow publish/git publish)
        git flow feature review <name> (flow feature resume/flow review/git review)
        git flow feature track <name> (flow feature resume/flow review/git review)

* To list/start/finish/delete release branches, use:

   * Note, if installed via npm the 'git' can be dropped from every command.

        git flow release
        git flow release start <release> [<base>]
        git flow release finish <release>
        git flow release delete <release>

  For release branches, the `<base>` arg must be a branch, when omitted it defaults to the develop branch.

* To list/start/finish/delete hotfix branches, use:

        git flow hotfix
        git flow hotfix start <release> [<base>]
        git flow hotfix finish <release>
        git flow hotfix delete <release>

  For hotfix branches, the `<base>` arg must be a branch, when omitted it defaults to the production branch.

* To list/start support branches, use:

        git flow support
        git flow support start <release> <base>

  For support branches, the `<base>` arg must be a branch, when omitted it defaults to the production branch.

### Share features with others

You can easily publish a feature you are working on. The reason can be to allow other programmers to work on it or to access it from another machine. The publish/track feature of gitflow simplify the creation of a remote branch and its tracking.

When you want to publish a feature just use:

    git flow feature publish <name>

or, if you already are into the `feature/<name>` branch, just issue:

    git flow feature publish

Now if you execute `git branch -avv` you will see that your branch `feature/<name>` tracks `[origin/feature/<name>]`. To track the same remote branch in another clone of the same repository use:

    git flow feature track <name>

This will create a local feature `feature/<name>` that tracks the same remote branch as the original one, that is `origin/feature/<name>`.

When one developer (depending on your work flow) finishes working on the feature he or she can issue `git flow feature finish <name>` and this will automatically delete the remote branch. All other developers shall then run:

    git flow feature delete <name>

to get rid of the local feature that tracks a remote branch that no more exist.

### Using Hooks and Filters

For a wide variety of commands hooks or filters can be called before and after
the command.  
The files should be placed in .git/hooks  
In the directory hooks you can find examples of all the hooks available.

## Showing your appreciation

Of course, the best way to show your appreciation for the git-flow tool itself
remains contributing to the community.
