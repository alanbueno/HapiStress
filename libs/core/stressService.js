module.exports = {
  StartStress: StartStress
}

let execAsyncClass = require('async-child-process'),
  env = require('../../environment/environment.js');

async function StartStress(req, reqReply) {
  try {
    if (req.payload.url.includes("@")) {

      let iterations = req.payload.dynamicParam.split(';');
      let result, url, index, command;

      for (index = 0; index < iterations.length; index++) {
        if (!iterations[index].toString())
          continue;

        url = req.payload.url.replace('@',
          iterations[index].toString());

        command = 'stresser \"' +
          url +
          '\" -n 1' +
          ' -c 1' +
          ' -t ' + req.payload.responseWaittime +
          ' -m GET' +
          // ' --html=' + env.logPath + 'report-$(date +%s).html' +
          ' --threads=' + req.payload.threads +
          ' --force';
        result = await execAsyncClass.execAsync(command);
      }

      reqReply("Total de cpf's acionados: " + index).code(200);
      return;
    }

    let result = await execAsyncClass.execAsync('stresser \"' +
      req.payload.url +
      '\" -n ' + req.payload.count +
      ' -c ' + req.payload.concurrent +
      ' -t ' + req.payload.responseWaittime +
      ' -m GET' +
      ' --html=' + env.logPath + 'report-$(date +%s).html' +
      ' --threads=' + req.payload.threads +
      ' --force '
      // ' --verbose c'
    );

    reqReply(result.stderr).code(200);
  } catch (error) {
    reqReply(error.message.toString()).code(500);
  }
}