var people = [];

people.push({
  name: 'Beau Simensen',
  gravatar: '14d0ad662a18587c0ebf786a656a697c',
  irc: 'simensen',
  twitter: 'kirkrynn',
  github: 'simensen'
});

people.push({
  name: 'David Pierce',
  gravatar: "bdea36f9b662c7bac533d12435ff473a",
  irc: "TheDahv",
  twitter: "TheDahv",
  github: "TheDahv"
});

people.push({
  name: "Dustin Venegas",
  gravatar: "26e02e6e506704240b2d676982244d4f",
  irc: "DustinVenegas",
  twitter: "DustinVenegas",  
  github: "DustinVenegas"
});

people.push({
  name: "Jason",
  gravatar: "b93883fbc4dd8c059092067b5d02f4a8",
  irc: "trafficone",
  twitter: "Trafficone",
  github: "trafficone"
});

people.push({
   name: "Scott Moak",
   gravatar: "63bdeed6e150c97fb4ad22afae5b34a5",
   irc: "smoak",
   twitter: "smoakin",
   github: "smoak"
});

people.push({
  name: "Bill Fraser",
  gravatar: "546f20e4042e433d9bcbf0dc6c1a1cf5",
  irc: "graycode",
  twitter: "graycode",
  github: "wfraser"
});

people.push({
  name: "Josh LaRosee",
  gravatar: "c4ca89f0ce403eeee7603b59a09f04c1",
  irc: "jlarosee",
  twitter: "joshlarosee",
  github: "halogencreative"
});

people.push({
  name: "Paul Betts",
  gravatar: "8de583685d3e68f79917ec82253185d8",
  irc: "bettsp",
  twitter: "xpaulbettsx",
  github: "xpaulbettsx"
});

people.push({
  name: "Brandon Fallout",
  gravatar: "ed34e4182189aa5281f38b517e6f8431",
  irc: "P4r4d0x",
  twitter: "",
  github: "P4r4d0x42"
});

people.push({
  name: "Mike Judge",
  gravatar: "1b90452f66ef874661a3157a76689ca3",
  irc: "bluetrust",
  twitter: "mikelovesrobots",
  github: "mikelovesrobots"
});

// Sort them alphabetical order by first name
exports.people = people.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {  
    return 0;
  }
});
