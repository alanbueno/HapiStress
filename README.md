# HapiStress
Basic application for stress tests on HTTP(s) endpoints.

HapiStress is a basic application for stress testing HTTP(s) endpoints build on hapi.js framework based on "stresser" and "artillery" tools, available on https://github.com/legraphista/stresser and https://github.com/shoreditch-ops/artillery.

## Ready, set, go!

Clone the repo:
`https://github.com/alanbueno/HapiStress.git`

Download the dependencies, install latest version of artillery globally and run, just like that!

## Usage

Once the app is ready n running, use any HTTP(s) client to make a request filling some informations like:

Method: POST

Host: "http://localhost:port/"
You can set the port on environment file, the default is 10003.

Path: "/stress"
Example:http://localhost:10003/stress

And some required parameters for the stress test execution:

Dynamic stress test:
```
"stressType": "dynamic",
"target": "http://endpoint.com"
"url": "/path/otherPath?dynamicParam={{param}}"
"rpm": 2000,
"duration": 180,
"variables": 
  [
    {"param": 
      [
        "1",
	"2",
	"3"
      ]
    }
 ]
```
Static stress test:
```
"stressType": "static",
"target": "http://endpoint.com"
"url": "/path/otherPath?dynamicParam=paramValue"
"rpm": 2000,
"duration": 180
```

___

## Reading the stats
_Example:_
```
  S=    10 |   T=    96 |   A=     0
  E=     0 | T/O=    96 | W/B=     0 | AVG=     0 | MIN=     0 | MAX=     0
1xx=     0 | 2xx=     0 | 3xx=     0 | 4xx=     0 | 5xx=     0
NOT FINISHED=4
```

### Legend:
 - S   = Number of Seconds since the test was started
 - T   = Number of requests completed in the given amount of time
 - A   = Number of requests active (still awaiting a response)
 - E   = Number of requests failed 
 - T/O = Number of requests timed out
 - W/B = Number of requests that contain a response body
 - AVG = Average response time in milliseconds
 - MIN = Minimum response time in milliseconds
 - MAX = Maximum response time in milliseconds
 - 1xx = Number of HTTP code 100-199 responses
 - 2xx = Number of HTTP code 200-299 responses
 - 3xx = Number of HTTP code 300-399 responses
 - 4xx = Number of HTTP code 400-499 responses
 - 5xx = Number of HTTP code 500-599 responses
 - NOT FINISHED = Number of requests that are unanswered and have been forcefully terminated (see option --force)
___

## License

`HapiStress` is offered under MIT license.
