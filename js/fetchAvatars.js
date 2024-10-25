var discordUrl = 'https://discord.com/api/users/818109259048157226'; //discord url to the get user api

var request = new XMLHttpRequest();
request.open("GET", discordUrl);
request.setRequestHeader('Content-type', 'application/json'); //set the header idk its stolen code
request.setRequestHeader('Authorization', 'Bot thebottoken'); //tell discord to authenticate with a bot

(async () => {
  try {
    const success = true; // this was here im not gonna change it because it works (kind of)

    if (success === true) { // idk
        
      const Payload = { // the thing being sent
        
      };
      request.send(JSON.stringify(Payload));// send the request

    } else {
      console.error('status: ', data.status, ' message: ', data.message); //if error then dont explode
    }
  } catch (error) {
    console.error('erm merror: ', error);//if error then dont explode #2
  }
})();