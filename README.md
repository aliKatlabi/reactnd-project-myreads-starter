<h1>MyReads Project</h1>
<hr><p>Basic Book Shelf using Udacity Backend.</p><h2>General Information</h2>
<hr>

<h3>What You're Getting</h3>
</li>
</ul>
<pre><code class="language-bash">C:.
│   .gitignore
│   CONTRIBUTING.md
│   package-lock.json
│   package.json
│   README.md
│   SEARCH_TERMS.md
│   yarn.lock
│
├───public
│       favicon.ico
│       index.html
│
└───src
    │   App.css
    │   App.js
    │   App.test.js
    │   BooksAPI.js
    │   index.css
    │   index.js
    │
    ├───components
    │       BooksDetails.js 
    │       BooksList.js
    │       Main.js
    │       Routes.js
    │       Search.js
    │       Shelf.js
    │
    └───icons
            add.svg
            arrow-back.svg
            arrow-drop-down.svg
</code></pre>
<h3>Udacity API used</h3>
<ul>
<li>GET /status</li>
<li>GET /books</li>
<li>GET /books/:id</li>
<li>PUT /books/:id { shelf }</li>
<li>POST /search { query, maxResults }</li>

</ul><h2>Setup Steps</h2><ul>
<li>Clone this repo</li>
</ul><ul>
<li>npm install the dependencies</li>
</ul><ul>
<li>yarn start or npm start</li>

</ul><h2>Features</h2>
<hr><ul>
<li>it has 2 main capabilities search and listing books.</li>
</ul><ul>
<li>Showing books in the book shelf categorized as Currently Reading, Want To Read, and Read</li>
</ul><ul>
<li>Allow Searching for Books by title and book's author and adding new book to shelf</li>
</ul><ul>
<li>Allow moving books to different shelves</li>
</ul><ul>
<li>Showing a book's description, rating, authors, and other information.</li>

</ul><h2>Project Status</h2>
<hr><p>For educational purposes</p><h2>Improvements</h2>
<hr><ul>
<li>adding user profile and authentication</li>
</ul><ul>
<li>adding books categories</li>
</ul><ul>
<li>adding sticker notes for each book in the shelf</li>
</ul>