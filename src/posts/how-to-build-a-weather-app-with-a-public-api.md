---
title: "How to build a weather app with a public api"
slug: "how-to-build-a-weather-app-with-a-public-api"

heroAlt: "How to Build a Weather App with a Public API visual cover image"
description: "Explore how to build a weather app with a public api in this detailed guide, offering insights, strategies, and practical tips to enhance your understanding and application of the topic."
pubDate: 2025-04-11
updatedDate: 2025-04-11
tags:
  - "build"
  - "weather"
  - "with"
  - "public"
---

# Build Your Own Weather App: A Step-by-Step Guide with a Public API

Want to build a cool project and hone your web development skills? Creating a weather app is a fantastic way to do just that! This guide will walk you through building your own weather application using a **public weather API**. You'll learn how to fetch real-time weather data and display it in an engaging and informative way. Get ready to impress your friends (and yourself!) with your new weather app.

## Why Use a Public Weather API? The Benefits

Forget manually collecting data! Public weather APIs provide a convenient and reliable source of up-to-date weather information. Here's what you gain by using one:

- **Real-time Updates:** Access current temperature, humidity, wind speed, and more, instantly.
- **Detailed Forecasts:** Get hourly, daily, and even weekly weather predictions to plan ahead.
- **Geolocation:** Automatically detect the user's location for personalized weather information.
- **Easy Integration:** Most APIs offer simple RESTful endpoints, making integration a breeze.

Some popular free weather APIs to consider include OpenWeatherMap, WeatherAPI, and AccuWeather. Explore each to find the one that best suits your needs.

## Prerequisites: What You'll Need

Before we start building, make sure you have the following:

1.  **Solid HTML, CSS, and JavaScript Fundamentals:** A good grasp of these technologies is essential.
2.  **A Code Editor:** Choose your favorite! VS Code, Sublime Text, and Atom are all great options.
3.  **An API Key:** Sign up for an account with your chosen weather API provider and obtain your unique API key.
4.  **A Local Development Server (Optional):** While not strictly required, a local server (like `http-server` or using VS Code's Live Server extension) can streamline the development process.

## Step 1: Setting Up Your Project Structure

Let's get organized! Create a new folder for your weather app and create the following files:

- `index.html`: This will be the main HTML file for your application.
- `style.css`: This file will contain all the CSS styles to make your app look great.
- `script.js`: This is where you'll write the JavaScript code to fetch data and handle the app's logic.

## Step 2: Fetching Weather Data from the API

Now for the exciting part – retrieving data! Use JavaScript's `fetch()` method to make a request to the weather API. Here's an example using OpenWeatherMap:

```javascript
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const city = "London"; // Example city
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Check the data in the console
    displayWeather(data); // Call a function to display the data
  })
  .catch((error) => console.error("Error fetching weather data:", error));
```

**Important:** Remember to replace `'YOUR_API_KEY'` with your actual API key. Also, be sure to check the API's documentation for details on available parameters and data formats.

## Step 3: Displaying Weather Data on Your Page

Let's take that data and show it to the user! Create a `displayWeather` function to update the HTML with the information you fetched:

```javascript
function displayWeather(data) {
  const weatherDiv = document.getElementById("weather");
  if (!weatherDiv) return; // Exit if the element doesn't exist

  weatherDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Feels like: ${data.main.feels_like}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Description: ${data.weather[0].description}</p>
  `;
}
```

Make sure you have an element with the ID `weather` in your `index.html` file to display the data. For example:

```html
<div id="weather"></div>
```

## Step 4: Adding Geolocation for Automatic Location Detection

Enhance your app by automatically detecting the user's location using the browser's Geolocation API:

```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoords(latitude, longitude);
    },
    (error) => {
      console.error("Geolocation error:", error);
      // Handle the error, e.g., prompt the user to enter their location manually.
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
  // Provide a fallback, like a manual location input.
}

function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => console.error("Error fetching weather data:", error));
}
```

Remember to handle potential errors (like the user denying location access) gracefully.

## Step 5: Styling Your Weather App with CSS

Time to make your app visually appealing! Use CSS to style the elements and create a user-friendly interface. Here's a basic example to get you started:

```css
body {
  font-family: sans-serif;
  background-color: #e0f2f1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

#weather {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
}

#weather h2 {
  color: #2e7d32;
  margin-bottom: 10px;
}

#weather p {
  font-size: 16px;
  margin: 8px 0;
}
```

Feel free to customize the styles to match your personal preferences. Experiment with colors, fonts, and layouts to create a unique look.

## Step 6: Deploying Your App for the World to See

Once you're happy with your app, it's time to share it with the world! Here are some popular platforms for deploying web applications:

- **Netlify:** Simple and easy to use, perfect for static sites.
- **Vercel:** Great for frontend projects with built-in CI/CD.
- **GitHub Pages:** Free hosting directly from your GitHub repository (ideal for static content).

Choose the platform that best suits your needs and follow their deployment instructions.

## Conclusion: You Built a Weather App!

Congratulations! You've successfully built a weather app using a public API. This is a great accomplishment that demonstrates your web development skills.

_"Building a weather app is more than just fetching data; it's about connecting people to their environment."_

Now that you have a working weather app, consider adding more features to enhance its functionality:

- Implement a search bar to allow users to enter their desired location.
- Display weather icons to visually represent the current conditions.
- Add a multi-day forecast to provide users with a longer-term outlook.
- Experiment with different weather APIs to compare their features and data quality.

Keep coding, keep learning, and most importantly, have fun!
