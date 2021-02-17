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

    function getProject1($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 1";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getProject2($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 2";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getProject3($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 3";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getProject4($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 4";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getProject5($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 5";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getProject6($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 6";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getProject7($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 7";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getProject8($conn) {
        $query = "SELECT * FROM tbl_projects WHERE id = 8";
        $stmt = $conn->query($query);
        $stmt->execute();

        $result = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };