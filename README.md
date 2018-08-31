Simple node script to generate Server Stub for package soap (https://www.npmjs.com/package/soap)

### Install: ###

Clone this repository then

```
npm install
```

### Requirements: ###

node version >=6

### Usage exemples: ###


```
node index.js -i yourFile.wsdl -o result.js
```

or

```
node index.js -i https://svn.apache.org/repos/asf/airavata/sandbox/xbaya-web/test/Calculator.wsdl -o result.js
```

The second exemple generate:


```
var services = { /* Services */

  Calculator: { /* Ports */

    CalculatorHttpsSoap11Endpoint: { /* Methods */

      add: function(args, callback, headers, req) {
        /*
          args = {
                 n1 of type xs:int
                 n2 of type xs:int
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type xs:int

        }; */
      }

    },
    CalculatorHttpSoap11Endpoint: { /* Methods */

      add: function(args, callback, headers, req) {
        /*
          args = {
                 n1 of type xs:int
                 n2 of type xs:int
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type xs:int

        }; */
      }

    },
    CalculatorHttpSoap12Endpoint: { /* Methods */

      add: function(args, callback, headers, req) {
        /*
          args = {
                 n1 of type xs:int
                 n2 of type xs:int
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type xs:int

        }; */
      }

    },
    CalculatorHttpsSoap12Endpoint: { /* Methods */

      add: function(args, callback, headers, req) {
        /*
          args = {
                 n1 of type xs:int
                 n2 of type xs:int
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type xs:int

        }; */
      }

    }
  }
};
```
### Use workflow: ###

Requirements: wsdl

From your wsdl which is your service specifications, you generate webservice skeleton (see above).

Once you've done this, code the behavior part of your service (replace ```//Your code``` with your code).

Now, you have your wsdl and your service. Follow exemple provided at https://github.com/vpulim/node-soap#soaplistenserver-path-services-wsdl---create-a-new-soap-server-that-listens-on-path-and-provides-services
and replace the service by your service and 'myservice.wsdl' by your wsdl. 

That'all.


