var SerialPort = require("serialport").SerialPort
var colors = require('colors');
var net = require('net');

var HOST = '0.0.0.0';
var PORT = 12000;
var SERIALPORT = "/dev/tty.usbserial";


var serialPort = new SerialPort(SERIALPORT, {
    baudrate: 9600
});

serialPort.on('open', function() {
    console.log("Serial port ready".green);
});

// open errors will be emitted as an error event
serialPort.on('error', function(err) {
    err = 'Error: ' + err.message
    console.log(err.red);
})

net.createServer(function(sock) {
    console.log(('Device connected: ' + sock.remoteAddress +':'+ sock.remotePort).blue);
    sock.on('data', function(data) {
        console.log("TCP Port says: \t\t".grey + data.toString('hex').blue + "\t -> " + data.toString().replace(/[^a-zA-Z0-9]/g, "").magenta);
        serialPort.write(data);
    });

    serialPort.on('data', function(data) {
        console.log("Serial Port says: \t\t".grey + data.toString('hex').blue + "\t -> " + data.toString().replace(/[^a-zA-Z0-9]/g, "").magenta);
        sock.write(data)
    })

}).listen(PORT, HOST);

console.log(('Server listening on ' + HOST +':'+ PORT).green);
