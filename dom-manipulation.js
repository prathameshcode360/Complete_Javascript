<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
    <script>
        function changeContent() {
            document.getElementById("demo").innerHTML = "Hello, JavaScript!";
        }
    </script>
</head>
<body>
    <p id="demo">This is a paragraph.</p>
    <button onclick="changeContent()">Change Content</button>
</body>
</html>
