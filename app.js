const fcm = require('fcm-notification')
const FCM = new fcm('./util/pushapp-firebase-adminsdk.json')
const tokens = ['dhlcUb4rS6GICJU9ZWc-UC:APA91bEm6U2aSgWHhV7tHGl98twb33DNNJmJCsGrnTx6xKrEvavC-lTp7sqBhh_xjHC-oLQjholgJdTbBYi0EQysTQEB0sh7PSE4e75V13f-Xy-RCzKFzkVkDIM4fCUxocY1-bvofS7k']
/*
fcm.initializeApp({
    credential: fcm.credential.cert(FCM),
    databaseURL: "https://pushapp-f3441.firebaseio.com"
})*/

const message = {
    data: {
        score: '850',
        time: '2:45'
    },
    notification:{
        title : 'Title of notification',
        body : 'Bloqueio na estrada geral'
    }
}

FCM.sendToMultipleToken(message, tokens, function(err, response) {
    if(err){
        console.log('err', err)
    }else {
        console.log('response', response)
    }   
})