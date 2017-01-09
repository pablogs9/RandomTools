iface=eth0
endpoint=localhost:8000

ipaddr=$(ifconfig $iface | grep "inet " | awk -F'[ ]+' '{ print $2 }')
curl $endpoint/endpoint.php?addressdata=$ipaddr
