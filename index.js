var soap = require('soap');
var Handlebars = require('handlebars');
var beautify = require('js-beautify').js_beautify;
var fs = require('fs');

const commandLineArgs = require('command-line-args')

const optionArgDefinitions = [
    { name: 'input', alias: 'i', type: String },
    { name: 'output', alias: 'o', type: String },
    { name: 'help', alias: 'h', type: Boolean }
]


var args = undefined;

var templateString = `{{#*inline "partialDesc"}}
  {{name}} of type {{#ifstring value}}{{value}}{{else}} {
      {{#eachkey value }} 
        {{> partialDesc}}
      {{/eachkey}}
    }{{/ifstring}}
{{/inline}}

var services={ /* Services */
  
  {{#eachkey this sep=","}}
    {{name}}:{ /* Ports */
    
    {{#eachkey value sep=","}}
      {{name}}:{ /* Methods */

        {{#eachkey value sep=","}}
          {{name}}: function(args, callback, headers, req) {
            /*
              args = {
                {{#eachkey value.input}} 
                   {{> partialDesc}}
                {{/eachkey}}
              }
            */
            //
            // Your code
            //
            /* return {
                {{#eachkey value.output}} 
                   {{> partialDesc}}
                {{/eachkey}}

            }; */
          }
        {{/eachkey}}

      }
    {{/eachkey}}
    }
  {{/eachkey}}
};`

try {
    args = commandLineArgs(optionArgDefinitions)
} catch (e) {
    console.log(e);
}

if (args == undefined || args.help != undefined || args.input == undefined) {
    if (args == undefined) {
        console.error("invalid argument")
    }
    if (args != undefined && args.input == undefined) {
        console.error("Input wsdl file or url is mandatory")
    }
    console.log("Usage:");
    console.log(process.argv[0] + " -i wsdl_access [-o jsstubfile]");
    return;
}

var outputfile = undefined;
if (args.output != undefined) {
    outputfile = args.output;
}

var inputfile = undefined;
inputfile = args.input;



Handlebars.registerHelper('eachkey', function(context, options) {
    var ret = "";
    if (context == undefined) {
        return "";
    }
    var keys = Object.keys(context);
    for (var i = 0, j = keys.length; i < j; i++) {
        key = keys[i];
        sep = "";
        sepa = "";
        if (i != 0 && options.hash["sep"] != undefined) {
            sep = options.hash["sep"];
        }
        ret = ret + sep + options.fn({
            name: key,
            value: context[key]
        }) + sepa;

    }

    return ret;
});

Handlebars.registerHelper('ifstring', function(conditional, options) {
    if (typeof conditional === 'string' || conditional instanceof String) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

//var serviceTemplateString = fs.readFileSync(__dirname + "/services.handlebars", 'utf8');
//var serviceTemplate = Handlebars.compile(serviceTemplateString);
var serviceTemplate = Handlebars.compile(templateString);

soap.createClient(inputfile, function(err, client) {
    var obj = client.describe();
    buildStub(obj);
});



function buildStub(obj) {
    var result = beautify(serviceTemplate(obj), { indent_size: 2 })
    console.log(result);
    if (outputfile != undefined) {
        fs.writeFileSync(outputfile, result, { encoding: 'utf8' });
    }
}

function convertServices(obj) {
    var services = Object.keys(obj);
    return services;
}