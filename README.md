# Task

Innowise Lab Internship: Level 0: Simple calculator

https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit#heading=h.5dt3hghpa22f

# How to run the app

Option 1. Website
Go to https://kds-repo.github.io/redesigned-spork/ in your browser

Option 2. Local server
Open the root directory (js-calculator) in a terminal.
Type the following commmand:
	npm run start
This should start the server and open the application in your default browser. If not, go to "http://localhost:8080/" in your browser. If not, check messages in terminal for information or errors.

# Directory Structure

js-calculator/ - Root directory of the project. Contains config files
-dist/ - Webpack target directory. Contains packed .js file and linked .html
-node_modules/ - Npm module directory. Managed automatically
-src/ - Source code for the project. Contains index.js, an entry point for Webpack
--modules/ - Separate .js files
	
