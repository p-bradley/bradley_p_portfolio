<?php
    require('config.php');
    session_start();
    
    function getWork($conn) {
        $query = "SELECT * FROM tbl_projects";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };