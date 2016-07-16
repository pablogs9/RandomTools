var fs = require('fs');
const crypto = require('crypto');
const verify = crypto.createVerify('RSA-SHA256');

fs.readFile('signedobject.json', 'utf8', function(err, data) {
    var d = JSON.parse(data);
    var sign = new Buffer(d.sign, 'base64');
    delete d.sign

    verify.write(d.data);
    verify.end();

    fs.readFile('public.key', function(err, pkey) {
        console.log(verify.verify(pkey, sign));
    })

    console.log({data:JSON.parse(d.data),sign:sign.toString("base64")});
});
