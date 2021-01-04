const fcm = require('fcm-notification')
const FCM = new fcm('./util/pushapp-firebase-adminsdk.json')

const tokens = [
    'cj_D9aUGCELjssdnLd-TqO:APA91bEvQtlD3crKjeP-vivRGw3rk4IK0DUBpQmYnTqaOMK7JmaWu2-xhGAk5Nkm6ETZo_BQcNVhpgh5r51iBqZNm_b2NGqwLMdmtSQbnwWIBKeBhKQef2U-IW_g12_vVUGetsj6omQB',
]

/*
o arquivo pushapp-firebase-adminsdk.json deve ser gerado no firebase console
*/

const message = {
    data: {
        score: '850',
        time: '2:45'
    },
    notification:{
        title : 'Título 12',
        body : 'Ola, este é um teste de push notification'
    }
}

FCM.sendToMultipleToken(message, tokens, function(err, response) {
    if(err){
        console.log('err', err)
    }else {
        console.log('response', response)
    }   
})