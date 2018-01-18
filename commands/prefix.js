exports.name = "prefix";
exports.level = 0;

exports.command = function(client, message) {
	
  if(!message.member.hasPermission('MANAGE_ROLES')) 
  return message.channel.send({
    "embed": {
      "title": "Error",
      "description": "You do not have the \"Manage Roles\" permission",
      "//color": 16711680,
      "footer": {
      	"text": "Please contact a server admin."
      }
    }
  })
    
    var globalVars = require('../globalVars.js')
    let newPrefix = message.content.split(' ').slice(1).join(' ');
    var globalPrefOld = globalVars.globalPrefix
    client.customConfig.set(message.guild.id, {prefix: newPrefix})
    message.channel.send("Prefix changed to "+newPrefix)
    
  
}