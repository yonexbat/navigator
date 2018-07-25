self.addEventListener('sync', function(syncEvent) {
    console.log('syncevent triggered');
    syncEvent.waitUntil(doSync());
});



function doSync(){
    return new Promise((resolve, reject) => {
        console.log('in promise');
        resolve('Done ok');
        postMessageToClients('doney');
        //reject();
    });
}

function postMessageToClients(message) {
    console.log('posting message');
    clients.matchAll({includeUncontrolled: true})
    .then(clientList => {
       clientList.forEach(client => {
           console.log("posting message to specific client");
           client.postMessage(message);    
           console.log("Message posted");       
        });
    });
}
