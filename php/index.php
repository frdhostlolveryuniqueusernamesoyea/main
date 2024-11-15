<?php
// Check PHP environment
echo "<h1>Welcome to Your PHP App!</h1>";

// Display PHP version
echo "<p>PHP Version: " . phpversion() . "</p>";

// Check server details
echo "<p>Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";

// A simple form to test functionality
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    echo "<p>Hello, $name! The app is working.</p>";
} else {
    echo '<form method="POST">
            <label for="name">Enter Your Name:</label>
            <input type="text" id="name" name="name" required>
            <button type="submit">Submit</button>
          </form>';
}
?>
