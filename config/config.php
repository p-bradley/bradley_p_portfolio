<?php 

    $db_dsn = array(
        'host' => 'us-cdbr-east-02.cleardb.com',
        'dbname' => 'heroku_4174a98b58b71d1',
        'charset' => 'utf8',
    );
    
    $dsn = 'mysql:' . http_build_query($db_dsn, '', ';');

    // Set up connection credentials
    $db_user = 'b07f2be0eee07b';
    $db_pass = 'b0a84c1c';

    $pdo = new PDO($dsn, $db_user, $db_pass);

    /* check connection */
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
    } catch (PDOException $exception) {
        echo "Connection error: " . $exception->getMessage();
        exit();
    }