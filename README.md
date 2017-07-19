# HapiStress
Basic application for stress tests on HTTP(s) endpoints.

HapiStress is a basic application for stress testing HTTP(s) endpoints build on hapi.js framework based on "stresser" tool, available on https://github.com/legraphista/stresser.

## Ready, set, go!

Clone the repo:
`https://github.com/alanbueno/HapiStress.git`

Download the dependencies and run, just like that!

## Usage

Once the app is ready n running, use any HTTP(s) client to make a request filling some informations like:

Method: POST

Host: "http://localhost:port/"
You can set the port on environment file, the default is 10003.

Logs: On environment.js file you'll find a "logPath" variable that defines the path of the html logs, just change the "/home/alan/Documents/TestOut/" for the path u want to save your logs on server.

Path: "/stress"
Example:http://localhost:10003/stress

And some required parameters for the stress test execution:
```
    url: http://api.search.live.net/json.aspx
    concurrent: 5
    responseWaittime: 20000
    threads: 2
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

## HTML output
The HTML file contains:
 - Aggregated stats described above
 - A bar chart with distribution of the response times
 - A line chart with second by second stats

___

## License

`HapiStress` is offered under MIT license.
