Getting Started
(this project uses react and firebase)

•	Clone this repo </br>
•	npm install to install all req'd dependencies </br>
•	Go to firebase and create a new project. Copy the new project’s API key and replace it with the API key under ./src/config/fbConfig </br>
•	Inside your firebase project database, create the follow collections: 'projects', 'users', 'notifications' </br>
•	Inside the collection ‘projects’, creating the following fields: string-‘authorFirstName’, string-‘authorLastName’, string-‘authorId’, string-‘content’, string-‘title’, string-‘createdAt’ </br>
•	Inside the collection ‘users’, creating the following fields: string-‘firstName’, string-‘lastName’, string-‘initials’ </br>
•	Inside the collection ‘notifications’, creating the following fields: string-‘user’, string-‘content’, string-‘time’ </br>
•	Inside the firebase database, go to the ‘rules’ tab and copy and paste the following security config </br>

rules_version = '2'; </br>
service cloud.firestore { </br>
  match /databases/{database}/documents { </br>
    match /projects/{project} { </br>
      allow read, write: if request.auth.uid != null </br>
    } </br>
    match /users/{userId}{ </br>
      allow create </br>
      allow read: if request.auth.uid != null </br>
      allow write: if request.auth.uid == userId </br>
    } </br>
    match /notifications/{notification} { </br>
      allow read, write: if request.auth.uid != null </br>
    } </br>
  } </br>
}
</br>
•	npm start to start the local server 
