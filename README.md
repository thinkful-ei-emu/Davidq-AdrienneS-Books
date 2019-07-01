# Davidq-AdrienneS-Books
In this assignment you will build an application to assist users to find books using the Google Book API. In order to use the Google Book API you will need an API key. Visit the credentials page after logging in to your Google account.

Google developers credentials page

Depending on how many projects you have created in the past this page may look a little different.

Click the Create button to create a new project. Enter a name for your project and optionally modify the project id. Accepting the auto generated id is usually good enough.

Project details

Click Create when done.

Next, you need to enable the Books API. From the APIs and Services page click library and type "Book" in the search bar. Select the Google Books API.

Enabling the Books API

Click Enable then click Create Credentials. On this page there is a step that helps you decide what type of credential you need. Since we are only going to access public data, and we are going to do so from a web browser we need an API Key so you can click on the API Key link directly.

Enter a name for your key and click Create.

API key creation

Note the options to restrict the API key. This is very important and should be done before the application is made public. This prevents others from using your API key and affecting your quotas.

Now, you have an API key that allows you access to the Google Books API.

Using the screenshot below as a guide build a React application with the following functionality:

Provide a search form to allow users to search for books by some search term that they enter.
Allow filters such as type of book or whether the book is a free ebook or not.
Display the search result in list and optionally allow the user to click a result to see further details of the book.
Use the Google Books API to perform the search