<?php
    header("content-type:text/html;charset=utf-8");
    $uname=$_GET["uname"];
    $upwd=$_GET["upwd"];
    mysql_connect("localhost","root","123456");
    mysql_select_db("user");
    mysql_query("set names utf8");
    $sql="select * from `wrok` where uname='$uname'";
    $res=mysql_query($sql);
    $arr=mysql_fetch_assoc($res);
        if($arr){
            echo 0;
         }else{
            $sql="insert into `wrok` (uname,upwd) VALUES ('$uname','$upwd')";
            $res=mysql_query($sql);
            if($res){
               echo 1;
            }else{
               echo 2;
            }
         }
   
?>