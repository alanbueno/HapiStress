module.exports = {
  StartStress: StartStress
}

let execAsyncClass = require('async-child-process'),
  env = require('../../../environment/environment.js'),
  fs = require('fs'),
  yml = require('write-yaml');;

async function StartStress(req, reqReply) {
  try {
    let arrivalCount, duration, rpm, command, result;

    arrivalCount = await ((TryParseInt(
      req.payload.rpm.toString())
      * TryParseInt(req.payload.duration.toString()))
      / 60);

    if (req.payload.stressType.includes("static")) {

      let result = await execAsyncClass.execAsync('artillery quick ' +

        ' -d ' + req.payload.duration +
        ' -c ' + arrivalCount +
        ' \"' + req.payload.target + req.payload.url + ' \"'
      );

      reqReply(result.stdout).code(200);
      return;
    }

    let ymlFileString, variables = req.payload.variables;

    ymlFileString = "{ \"config\": " +
      " {\"target\": \"" + req.payload.target + "\"," +
      " \"phases\": " +
      " [{\"duration\": " + req.payload.duration + "," +
      " \"arrivalCount\": " + arrivalCount + "," +
      " \"name\": " + '\"Teste\"' +
      "}]," +
      " \"variables\": ";

    if (variables.length > 1)
      ymlFileString += "[";

    for (let index = 0; index < variables.length; index++) {
      key = Object.keys(variables[index])[0].toString();
      ymlFileString += "{\"" + key + "\"" + ': [';
      for (let innerIndex = 0; innerIndex < variables[index][key].length; innerIndex++) {
        ymlFileString +=
          '\"' +
          variables[index][key][innerIndex].toString() +
          "\"";
        if (innerIndex != variables[index][key].length - 1)
          ymlFileString += ",";
      }

      ymlFileString += "]";
    }

    if (variables.length > 1)
      ymlFileString += "]";

    ymlFileString += "}},";

    ymlFileString += " \"scenarios\": [" +
      "{\"flow\": [" +
      "{\"get\": " +
      "{\"url\": \"" + req.payload.url + '\"}}]}]}';

    yml.sync('Teste.yml', JSON.parse(ymlFileString));

    result = await execAsyncClass.execAsync(
      'artillery run ' + "Teste.yml"
    );

    fs.unlinkSync('Teste.yml');

    reqReply(result.stdout).code(200);
  } catch (error) {
    reqReply(error.message.toString()).code(500);
  }
}

function TryParseInt(str, defaultValue) {
  var retValue = defaultValue;
  if (str !== null) {
    if (str.length > 0) {
      if (!isNaN(str)) {
        retValue = parseInt(str);
      }
    }
  }
  return retValue;
}