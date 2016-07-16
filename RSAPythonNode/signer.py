from os import chmod
from Crypto.PublicKey import RSA
from Crypto.Signature import PKCS1_v1_5
from Crypto.Hash import SHA256
from base64 import b64encode
import json

def generate_keys():
    key = RSA.generate(2048)
    with open("private.key", 'w') as content_file:
        chmod("private.key", 0600)
        content_file.write(key.exportKey('PEM'))
    pubkey = key.publickey()
    with open("public.key", 'w') as content_file:
        # content_file.write(pubkey.exportKey('OpenSSH'))
        content_file.write(pubkey.exportKey('PEM'))


def sign_data(private_key, data):
    key = private_key
    rsakey = RSA.importKey(key)
    signer = PKCS1_v1_5.new(rsakey)
    digest = SHA256.new()
    digest.update(data)
    sign = signer.sign(digest)
    return b64encode(sign)

generate_keys()
with open("object.json", 'r') as content_file:
    text = content_file.read()
    msg = {"data": text}

    with open("private.key", 'r') as pkey:
        msg["sign"] = sign_data(pkey.read(), text)
    with open("signedobject.json", 'w') as out:
        out.write(json.dumps(msg))
