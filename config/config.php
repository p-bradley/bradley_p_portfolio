<?php 

    $db_dsn = array(
        'host' => 'us-cdbr-iron-east-05.cleardb.net',
        'dbname' => 'heroku_33dfaa1c0bb83fe',
        'charset' => 'utf8',
    );
    
    $dsn = 'mysql:' . http_build_query($db_dsn, '', ';');

    // Set up connection credentials
    $db_user = 'b4428f57ad7372';
    $db_pass = 'd110515c';

    $pdo = new PDO($dsn, $db_user, $db_pass);

    /* check connection */
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
    } catch (PDOException $exception) {
        echo "Connection error: " . $exception->getMessage();
        exit();
    }