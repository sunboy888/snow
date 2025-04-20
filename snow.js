let obj = {
  result: {
    activated: true,
    vipType: "VIP_SUBSCRIBER",
    products: [
      {
        storeType: "APPLE",
        productId: "com.campmobile.snow.subscribe.onemonth",
        originalTransactionId: "90002415884112",
        startDate: 1744990894000,
        expireDate: 253392455349000,
        managed: false,
        status: "ACTIVE"
      }
    ],
    tickets: []
  }
};

$done({ body: JSON.stringify(obj) });
