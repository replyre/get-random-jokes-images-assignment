const express = require("express");
const axios = require("axios");
const app = express();

async function getRandomJoke() {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    return response.data.setup + " - " + response.data.punchline;
  } catch (error) {
    console.error("Error fetching joke:", error);
    throw new Error("Failed to fetch joke");
  }
}

async function getRandomImage() {
  try {
    const response = await axios.get("https://picsum.photos/200/300", {
      responseType: "arraybuffer",
    });
    return `data:image/jpeg;base64,${Buffer.from(response.data).toString(
      "base64"
    )}`;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw new Error("Failed to fetch image");
  }
}

// Route to get a random joke
app.get("/api/jokes/random", async (req, res) => {
  try {
    const joke = await getRandomJoke();
    res.json({ joke });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a random image
app.get("/api/images/random", async (req, res) => {
  try {
    const image = await getRandomImage();
    res.json({ image });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a random joke and image

app.get("/api/jokes-images/random", async (req, res) => {
  try {
    const joke = await getRandomJoke();
    const image = await getRandomImage();
    res.json({ joke, image });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log("server running");
});
