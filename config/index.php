<?php

    require('functions.php');

    if(isset($_GET["getWork"])) {
        getWork($pdo);

        $allWork = getWork($pdo);

        echo json_encode($allWork);
    };

    if(isset($_GET["getProject1"])) {
        getWork($pdo);
        $allWork = getProject1($pdo);
        echo json_encode($allWork);
    };

    if(isset($_GET["getProject2"])) {
        getWork($pdo);
        $allWork = getProject2($pdo);
        echo json_encode($allWork);
    };

    if(isset($_GET["getProject3"])) {
        getWork($pdo);
        $allWork = getProject3($pdo);
        echo json_encode($allWork);
    };

    if(isset($_GET["getProject4"])) {
        getWork($pdo);
        $allWork = getProject4($pdo);
        echo json_encode($allWork);
    };

    if(isset($_GET["getProject5"])) {
        getWork($pdo);
        $allWork = getProject5($pdo);
        echo json_encode($allWork);
    };

    if(isset($_GET["getProject6"])) {
        getWork($pdo);
        $allWork = getProject6($pdo);
        echo json_encode($allWork);
    };

    if(isset($_GET["getProject7"])) {
        getWork($pdo);
        $allWork = getProject7($pdo);
        echo json_encode($allWork);
    };
    
    if(isset($_GET["getProject8"])) {
        getWork($pdo);
        $allWork = getProject8($pdo);
        echo json_encode($allWork);
    };