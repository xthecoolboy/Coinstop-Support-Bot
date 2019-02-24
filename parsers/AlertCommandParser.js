const CommandHandler = require("../commands/AlertCommandHandler");

const badColor = parseInt(" e60000",16);
const redExclamation = "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/08-512.png";

const goodColor = parseInt(" 43AB4A",16);
const greenCheck = "https://exclnetworks.com/coinstop/check.png";

const neutralColor = parseInt("4C83C2",16);
const blueBell = "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png";

exports.parse = (command,splitCommand) => {

    let commandParams = command.content.replace("!alert " + splitCommand[1] + " ", "");
    let title = commandParams.split("|")[0];
    let desc = commandParams.split("|")[1];

    switch (splitCommand[1]) {
        case "bad":
            CommandHandler.createAlert(command, badColor, title, desc, redExclamation);
            break;
        case "good":
            CommandHandler.createAlert(command, goodColor, title, desc, greenCheck);
            break;
        case "neutral":
            CommandHandler.createAlert(command, neutralColor, title, desc, blueBell);
            break;    }
};