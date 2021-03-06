const publicKey = // ssh-keygen -f rsa.pub -e -m pem
	`-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAlXWiM6NHkx45i/ZTGUqJMbq9NjK2AK/cdg2Rdc7wPUujaRoI/V1M
sI/z5N8sW6o/5SwdqthJo7eStj915j5vief3sJAu7PRSh6jlDWJl2ccAmbmA9cTE
pBz+voDwwfNqtVVcyn0M5BrqdU3HFbwpgODpJnePxkEOTztZ6YNgtH3FQYF3TFmT
dxJi5NTTWF1Pn41COzM9GiToSZfFJBNjByORgSbLUpL/nQRpW+DWjLgMfn5LNF7S
9f3u6GHAFB2rlnNR7nCCqIqWop6n4jsWZWzSkcSDFJ74OY3mxdE+PdCfNwMwfKg+
iLHbTv7NTQHvCE+k1tid9lxWFiMR1OruZQIDAQAB
-----END RSA PUBLIC KEY-----`;

const privateKey = // ssh-keygen -t rsa
	`-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAlXWiM6NHkx45i/ZTGUqJMbq9NjK2AK/cdg2Rdc7wPUujaRoI
/V1MsI/z5N8sW6o/5SwdqthJo7eStj915j5vief3sJAu7PRSh6jlDWJl2ccAmbmA
9cTEpBz+voDwwfNqtVVcyn0M5BrqdU3HFbwpgODpJnePxkEOTztZ6YNgtH3FQYF3
TFmTdxJi5NTTWF1Pn41COzM9GiToSZfFJBNjByORgSbLUpL/nQRpW+DWjLgMfn5L
NF7S9f3u6GHAFB2rlnNR7nCCqIqWop6n4jsWZWzSkcSDFJ74OY3mxdE+PdCfNwMw
fKg+iLHbTv7NTQHvCE+k1tid9lxWFiMR1OruZQIDAQABAoIBAGkDCN9dRunwX6Ce
hw6LF1Awk8cj5EshRTZRHDX5G0UGAx/SoiRazIp16niR8dnKCjDcSVADveHhFp0k
g5MtpTLxIFAXTlFA7UfR/HXmAAf+0cYw15JXGY7xrG9vqzmq7PvRqWvAZzFSVA/t
gQcdeM/LtyVG9mbmyMYUvnzayTSm4vEaM6DwdZEc8DYtLoVB/ssMe/NvNWJc3AwZ
B0Vy/7a3HZhgx5w7y2gvilF/3DQd4d3Likry8rVdmX969T+HKZPGOvq6HYj6irEt
iPmHMuWydD9c79c6ZkzWGL57OVHrrELF7I5ZQ5PO1Ay0TnkRS6PldOPn0Kau0NzV
8P3EX6ECgYEAxbJ/mL6WSkL5zvrJxdtC8WX/3saJtKVOlcJ9jO5kxnQXxJoNMJyA
HAM1aygm+q6wSSaDh5iZI3Q8+WwysWDO8sJM10LsRboJQWvhwxU0sxsBcCDLkL6V
3R2cQzTQ80g30LoZ754AD3FgNoydwT1v95X0WnQK2B5FNtYQrmv4rKkCgYEAwYlX
YdBLF20AKJNbT9Vw8N5Ucp31JMxruLZXZQiZKXoVsGhI7shP99fb3bY/C3Zu9ZNs
6A3Y1aNSDW9k8/1dIyTjEMtd2n/hkJGpr0jQCROg1vykx5frmTb+kTM2QTlLoMqn
mVe7yvgPmkbPk0WxjUwiXh7LrenAGHmi6NF2rV0CgYEAlVRaGydC4H8ssJIwnNoc
+7h/CGhRFfmTnX2WVkCwMFL6rQ9sDR75ia9Gx1VB9DLFh8umqGK0sdoYQJLgy6kD
SM1JO4QaciSu3xK9Kh03fF5WvLqY6RF8o9O89+rKNimDt48LDjr7cq7B7RJUCuX8
UDidpUFn+40J3PzfBtEZulkCgYB0ELCV2XvfHaB1tQGS3BcybLNKVY55thp4GOpK
jiCEblHpjHEIupqysQKLcUtXzXv3zKUIeZ1radnAcuihJnYfqHSAUuYDLqQQtjqE
A2+3sczIgZU0mdhR91gtrf/Al+LSGBbw8FuP+rootISx9p7ndRw7Q860irWIOBJJ
+6xnhQKBgB3Z9lzK3Ox221E+synzyWed5P4spBLmHkZLDch21c8kL3JEMgTVrWle
oT2MC87pI87zsV1dgu3NUtQpJMibf24e3K93tKSmuPxKDb7TyhAPjEYtYw2V8dDp
mPnXIJDW1I8m6coBBYzSs4GyDa7tCKq97iwBHnQXbfIh6KeOH0pO
-----END RSA PRIVATE KEY-----`;

module.exports = {
	publicKey,
	privateKey
};
