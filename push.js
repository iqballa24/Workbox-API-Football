const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BOY6qkS1XoajufhR5TRjwPB8Y19qRjK_nv3m6pQ3bwOyGwOHWzzm32QiwzIRbymh-ZuwXMAMztJuoBFz3YHba7k",
    "privateKey": "FGcwezQY_xY8aaNdREuNHWyaovgv7Q2cCfmFSwvjoMs"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint": " https://fcm.googleapis.com/fcm/send/dDtWFXQu8o4:APA91bEOViSEixx9cZdC5kKQYj3AxbzkzfZ0nFoUjnN_-jxv85bczetfBqRZKetHKcpc-B5wUlqoerwaOeiF059AHfPzObiuXTBkv6Xiu7hTfEARNQawABkf1tDGXbKWGcYvFSFcpRxj",
    "keys": {
        "p256dh": "BHSbo5ytmRMFLelgzJeovGbJgqPGfW4ZqpfZBFgnktRko4Q2HWTNfmu77x9G66cB4YIE3Sh3dqWz/ZArb09guug=",
        "auth": "O3H0kiD71YG9L6e/P5rrww=="
    }
};
const payload = 'Holla !!';

const options = {
    gcmAPIKey: '390477955185',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);

