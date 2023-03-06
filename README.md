# convin-frontend

Steps to be followed -:
Here are the general steps you would need to follow:

Set up the React project with Redux and React Router. Use create-react-app to create a new React project and then install the necessary dependencies such as React, Redux, React Router, and Redux Middleware's such as Thunk.

Use a UI library such as Antd to style your application. Import the necessary components from the Antd library, and use them to style your application.

Create a JSON server using the json-server package. Define the data model for your application, including a card, a bucket, and a history entity. Create a db.json file that defines the data for your application.

Create the necessary components for your application. This will include a bucket component, a card component, and a history component. Use Redux to manage the state of your application, and use React Router to navigate between different pages of your application.

Implement the functionality to create, delete, and edit cards. Use Redux to manage the state of your application, and use Redux Middleware's such as Thunk to handle asynchronous actions such as making requests to the JSON server.

Implement the functionality to move cards from one bucket to another. Use Redux to manage the state of your application, and update the data in the JSON server accordingly.

Implement a modal that opens when a card is clicked, which displays the video/mp3 link in an iframe. Use a React modal component to create the modal, and pass the necessary props to display the video/mp3 link in an iframe.

Implement the functionality to delete a single card or multiple cards under a single bucket at once. Use Redux to manage the state of your application, and update the data in the JSON server accordingly.

Create a separate tab called history, which lists the mp3/mp4 links that you have played, including the card name, the link, and the time it was played. Use Redux to manage the state of your application, and display the history data in a separate component.
