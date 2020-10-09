<?php 

    $db_dsn = array(
        'host' => 'us-cdbr-east-02.cleardb.com',
        'dbname' => 'heroku_8574740f7e7733e',
        'charset' => 'utf8',
    );
    
    $dsn = 'mysql:' . http_build_query($db_dsn, '', ';');

    // Set up connection credentials
    $db_user = 'b4894a68fed187';
    $db_pass = '260c7145';

    $pdo = new PDO($dsn, $db_user, $db_pass);

    /* check connection */
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
    } catch (PDOException $exception) {
        echo "Connection error: " . $exception->getMessage();
        exit();
    }