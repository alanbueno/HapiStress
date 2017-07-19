module.exports = {
    StartStress: StartStress
}

let execAsyncClass = require('async-child-process'),
    env = require('../../environment/environment.js');

async function StartStress(req, reqReply) {
    try {
        let result = await execAsyncClass.execAsync('stresser ' +
            req.payload.url +
            ' -c ' + req.payload.concurrent +
            ' -t ' + req.payload.responseWaittime +
            ' --html=' + env.logPath + '/report-$(date +%s).html' +
            ' --threads=' + req.payload.threads // +
            // ' --force' +
            // ' --verbose c'
        );

        reqReply(result.stderr).code(200);
    } catch (error) {
        reqReply(error).code(500);
    }
}