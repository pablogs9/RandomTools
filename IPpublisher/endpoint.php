<?php

date_default_timezone_set("Europe/Madrid");

$fichero = 'IPLOG.txt';
$formato = "%s -- IP: %s\n";

$data = sprintf($formato,date(DATE_RFC2822), $_GET["addressdata"]);

file_put_contents($fichero, $data, FILE_APPEND | LOCK_EX);

echo "OK"
?>
