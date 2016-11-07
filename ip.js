var fs = require("fs");
var jsonFile = require("jsonfile");

module.exports = {


  // Get client IP
  // @param req (http request)
  // return string ipv4
  getIP: function(req) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return ip.split(":")[3];
  },

  // Read all ips and return ip array
  getIPList: function() {
    var json = this.readIP();
    for(var i = 0; i < file.ip.length; i++) {
      ips.push(file.ip[i].adresse);
    }
    return ips;
  },

  // Read ip.json
  // Return object with all ips
  readIP: function() {
    console.log("START readIP");
    var file = JSON.parse(fs.readFileSync('ip.json', 'utf8'));
    ip = file.ip.length;

    //console.log(ips);
    return file;
  },

  // Add a new IP
  // @param ip: string ipv4
  addIP: function(ip) {
    ips = this.readIP();
    console.log("START addIP");
    console.log(ips.ip.length);
    for(var i = 0; i < ips.ip.length; i++){
        if(ip == ips.ip[i].adresse){
        return;
      } else if (ips.ip.length - 1 == i) {
        ips.ip[i].adresse = ip;
        console.log(ips);
        this.updateFile(ips);
      }
    }
  },

  updateFile: function(ips) {
    console.log("START updateFile");
    /*var json = this.readIP();
    console.log(json);
    console.log(ips);
    for(var i = 0; i < ips.ip.length; i++) {
      console.log("wow" + json.ip[i].adresse);
      json.ip[i].adresse = ips.ip[i].adresse;
    }
    console.log(json);
    console.log(JSON.stringify(json));
    fs.writeFile("ip.json", JSON.stringify(ips));
    */
    console.log(ips);
    jsonFile.writeFile("ip.json", ips);
  }
};
