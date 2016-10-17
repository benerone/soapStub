Simple node script to generate Server Stub for package soap (https://www.npmjs.com/package/soap)

#Install:

Clone this repository then

```
npm install
```

#Usage exemples:


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

