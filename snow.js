var objc = JSON.parse($response.body);

    objc = 
{
  "result" : {
    "tickets" : [

    ],
    "vipType" : "VIP_SUBSCRIBER",
    "activated" : true,
    "products" : [
      {
        "status" : "ACTIVE",
        "originalTransactionId" : "90002415884112",
        "productId" : "com.campmobile.snow.subscribe.onemonth",
        "startDate" : 1744990894000,
        "storeType" : "APPLE",
        "expireDate" : 253392455349000,
        "managed" : false
      }
    ]
  }
}

$done({body : JSON.stringify(objc)});
