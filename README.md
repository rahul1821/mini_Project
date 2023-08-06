# Create the Directory structure and Setup express Server

# In this mini Project Setup dairectory of the pages and controllers

In this Project we have created some folders like <h5> config, controllers, models, routes, and views</h5>

# Controllers
<h2> Controllers contain home_controller and user_controller </h2>

# routes
<h2> routes contain index and users files</h2>

# views
<h2> Views contain home.ejs </h2>

# express ejs layouts

<ul>
<li>install the ejs layouts (npm install express-ejs-layouts)</li>
<li>import the main file like (index.js) as a call (const expresssLayouts = require('express-ejs-layouts'))</li>
<li>use express layouts</li>
<li>app.use(expressLayouts);</li>
<li>for style sheet <h5>app.use('layout extractStyles', true);</h5></li>
<li>for script <h5>app.use('layout extractScripts', true);</h5></li>
</ul>


# Setup the Cookies

<ul>
<li>install (npm install cookie-parser)</li>
<li>import the cookie-parser in the index.js file (const cookieParser = require('cookie-parser'))</li>
<li>Call the cookie parser (app.use(cookieParser()); )</li>
</ul>
<h5>Finaly we can se the cookies as a respose or request brower's application field.</h5>