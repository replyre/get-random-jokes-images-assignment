# Random Jokes and Images API

## Description

This project is a Node.js application that serves a Random Jokes and Images API. It builds upon the foundational knowledge of backend development by integrating image fetching capabilities into an existing Random Jokes API. The API provides routes to fetch random jokes, random images, and a combination of both. A simple front-end is also included to display the fetched data.

## Features

- **Random Jokes API**: Fetch a random joke from a predefined list of jokes.
- **Random Images API**: Fetch a random image from a third-party API and serve it as a base64-encoded string.
- **Combined Jokes and Images API**: Fetch both a random joke and a random image in a single response.
- **Front-End**: A simple HTML front-end to display the fetched joke and image.

## Technologies Used

- Node.js
- Express.js
- Axios (for fetching images from third-party APIs)
- Base64 encoding for images
- HTML and JavaScript for the front-end

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/replyre/get-random-jokes-images-assignment.git
   cd get-random-jokes-images-assignment
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Run the Application**

   Start the server:

   ```bash
   node index.js
   ```

   The server will start on `http://localhost:8000`.

## API Endpoints

### 1. **Get a Random Joke**

   - **Endpoint**: `/api/jokes/random`
   - **Method**: GET
   - **Response**: A JSON object with a random joke.
   
   ```json
   {
     "joke": "Why don't scientists trust atoms? Because they make up everything!"
   }
   ```

### 2. **Get a Random Image**

   - **Endpoint**: `/api/images/random`
   - **Method**: GET
   - **Response**: A JSON object containing a base64-encoded string of a random image.
   
   ```json
   {
     "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
   }
   ```

### 3. **Get a Random Joke and Image**

   - **Endpoint**: `/api/jokes-images/random`
   - **Method**: GET
   - **Response**: A JSON object with both a random joke and a base64-encoded image.
   
   ```json
   {
     "joke": "Why don't scientists trust atoms? Because they make up everything!",
     "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
   }
   ```

## Front-End

The front-end is a simple HTML page that fetches and displays the random joke and image. 

- **File**: `index.html`
- **Functionality**: 
  - Automatically fetches and displays a random joke and image on page load.
  - Includes a button to fetch a new joke and image.

## Testing

You can test the API endpoints using Postman or by visiting `http://localhost:3000` in your browser to interact with the front-end.

## Project Structure

```bash
├── index.js        # Main server file
├── package.json    # Project dependencies
├── public          # Directory for serving static files
│   └── index.html  # Front-end HTML file
└── README.md       # Project documentation
```

## Future Enhancements

- Add more joke categories.
- Integrate additional image sources.
- Implement caching for frequently fetched jokes and images.
- Improve error handling for third-party API requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Happy coding! If you have any questions or suggestions, feel free to open an issue or submit a pull request.
