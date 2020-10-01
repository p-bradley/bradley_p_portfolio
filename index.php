<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>
<body>
    <main id="app">
        <header>
            <nav>
                <div>
                    <img alt="Logo">
                    <img alt="dropdown button">
                </div>
                <ul>
                    <li><router-link to="/">About</router-link></li>
                    <li><router-link to="/projects">Work</router-link></li>
                    <li><router-link to="/">Skills</router-link></li>
                    <li><router-link to="/">Contact</router-link></li>
                </ul>
            </nav>
        </header>
        <router-view></router-view>
    </main>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="js/main.js" type="module"></script>
</body>
</html>