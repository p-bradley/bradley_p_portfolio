<?php

    require('functions.php');

    if(isset($_GET["getWork"])) {
        getWork($pdo);

        $allWork = getWork($pdo);

        echo json_encode($allWork);
    };