# Tasks

This is a repo contains the solutions to 2 tasks
- A tests-first developed angular service, that prepares summaries based on input - either single entries or existing summaries to be merged with whatever has been already generated
- A UI representing a list of topics for a user to choose from. Whilst the spec image is hidden, it can be enabled from the styles.css in the `src/ads/style.css` folder - setting it to a low opacity underneath/next to the developed UI might be helpful during development/reviewing

The repo also shows a simple build process, based around [grunt-load-config](https://github.com/firstandthird/load-grunt-config) and a component oriented folder structure. Upon cloning run
- npm install
- bower install

To see the summarizer's tests in action, run `grunt karma`.
To see the GUI in action, run `grunt develop`. That will open up the browser at the corresponding example page ready for preview / development (as live reload and watch will be running as a result of the command as well)
