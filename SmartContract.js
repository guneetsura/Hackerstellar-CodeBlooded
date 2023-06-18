const http = require('http');
const sdk = require('api')('@verbwire/v1.0#4psk2mplfwliyql');

sdk.auth('sk_live_4330afcb-e137-4861-a239-41f8655f951a');
sdk.postNftDeployDeploysimplecontract({
  chain: 'goerli',
  contractType: 'nft721',
  contractName: 'mayank',
  contractSymbol: 'mayank123'
}, {accept: 'application/json'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

  const parseCookies = (cookie = '') => 
      cookie
          .split(';')
          .map(v => v.split('='))
          .map(([k, ...vs]) => [k, vs.join('=')])
          .reduce((acc, [k, v]) => {                            
              acc[k.trim()] = decodeURIComponent(v);
              return acc;
          }, {});
  
  http.createServer((req, res) => {
      const cookies = parseCookies(req.headers.cookie);
      console.log(req.url, cookies);
      res.writeHead(200, {'Set-Cookie': 'mycookie=643b02853af4bd2b173fd6bb'});
      res.end('Hello Cookie');
  })
      .listen(8082, () => {
          console.log('listening on port 8082')
      })