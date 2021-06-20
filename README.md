# LyftApp
This code is used for the Application of Lyft 2021 Software Engineering Apprenticeship. I use Node (express) and some basic html to finish the work.
You would need node installed for the code.

1. git clone this repo

2. run `npm init` 

3. run `npm install express`

4. Use `node test.js` for running the backend server.

5. you could also test out the server with curl
`curl --request POST \
  --url http://localhost:3000/test \
  --header 'content-type: application/json' \
  --data '{
    "string_to_cut": "just with Express"
}' `
you can replace "just with express" to anything you want
