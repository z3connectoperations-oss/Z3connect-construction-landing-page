const fs = require('fs');

// The original raw key string from the user's first message
const rawKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/pMFzNFiuAkjR
dYdFnpQ1xMqRCEzmn5eHC4BecNhoJwSXZiphIo+kvVKf51uABORwZeyyQWAFU6Cv
vguLz8nJ67/qGV5Tl7peh/TtkaHcI49Ma3FwnYRRcHxx6AijPQBSYKnHwhigHpam
WAjYAR+pCPtbX7+Lq0NX98ubVceVrrUozOMiC3pIJLbOAhbmgNZqMApjoZOOuPU4
bUkk0QtGDwWPF3MuvRIyfIziG62aQIKobsZKP0p2fmWRO9VeHvu9G6/7fs3cO63x
AYLs/iINKjJKezweXjvJi2/AU0N6Z/E+uj72uKxAGsir5wU/63tvn59YvekSz088
vFA+pUxdAgMBAAECggEABiHuY3001e39HjVzFzS8Yb4YN1eQfRQf+V0nsJ35fC0S
ILV5vLL/mBIg3zy8OQFZvV5dmn9XZG7pJkaKwGDCqyNP+Fydypyr2j432xRScs9x
Kfe0Nm+BSPPfCkFrvqwt4vT0lI+u/GIOMxN/xkhplsin9nlpZpLxQZLh4T4iTWAE
IFchqNqrEYUIB6fDcaYvA/wbg5n8kmnm4huJEOztr9k9T13b9PNdU8gbPlBqO3PI
f9C0+DOOTqT/geg5ibkUK2p/mD47iR/kj96AtHeepQKeg2AqAfeENe64GIDpGSP4
hdAUUteC7nh1jcZlHbXUzCAPdlydBUIAhCaCqwECIQKBgQDuR/Sa2NE96H7NVgQ7
9wRlGH+u9BxHto8JlzbYT1DWATgsihSlCSqOACj7/FLnSYObfJ05/gJ7Cp/Fzv7E
G2ajOels6gfnRkFEE0GTE4kZr7pVBlCVOVnxBCwYThseZKR+e0KJJaCQqa21dpBH
nedVArDxZQ/u1GbomqFOvO6NFLQKBgQDN5PvtOVa6aGJcX9Ol01qWxhuYZ3bKHfhn
xfH1fNFpRwE6J0/p5mxV9IGfsrL//TMnToB1iwTR62+FtV9gKiES+WZszo0AgJq6
nn7XRAp2wQXNr/IfoKllp8hQp6Eznk3yRKjegoIKkGqk2LEqmPgGUGmEwGQWUUmTg
nikYQlNwB8QKBgFRzBhsXOtlhHAe0M535BwK5cw9Tju5PolQ41oRFYBXoqrsGWRjA
redT4TKlk9BK+qzRtnuGLeTjuAqIOTzRpUe2T6d9Lj3mZV02Ieh5ZP7IjBZ0PX0V
nrW3BF8upau0TqET3dHZc8pIywNDua2YZpN3d7SmJ8ZyWuKXYxIf3b/8lAoGAQVsV
SOjxibxGtLHKWhHr6H48FjWJdIDs7+vacSVMx9E9J3uBF2sIKoSxfMLZpP53dVuq
1STqw8OrI9M90iWtV/uIsrMh+O3Zr7GwogbljSRJghaoAV8oAMRR+Dd/6eZcHSw8
eiVZMsQvwD1w+LIoCB4TiZP3vGwnD0t1ECBgcdECgYAMt+S7V1z5lVt//VVbuus6
LzyjR0c8Cea4TvJolMCNfUFZHsYQJsD/UIFAmAKcTTDkt8aw3E49zQJTQd2uCTZ7
aXVWA4DqA/JR8HVuu+f0PuiAoD0ClWF6WVeDGa285BG/U0Mx914JCLuOPaTQ2DWH
KhasH3mXNansH87XHoNaWg==
-----END PRIVATE KEY-----`;

// Remove ALL whitespace from the base64 part, but keep headers and newlines between headers
const lines = rawKey.split('\n');
const header = lines[0];
const footer = lines[lines.length - 1];
const body = lines.slice(1, -1).join('').replace(/\s/g, '');

const finalKey = `${header}\n${body.match(/.{1,64}/g).join('\n')}\n${footer}\n`;

fs.writeFileSync('private-key.pem', finalKey, 'utf8');
console.log('PEM file written with perfect formatting!');
