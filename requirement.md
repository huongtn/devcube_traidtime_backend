1) Binance - Order list -----------------------
1.1) Collect order list from Binance (public api) not require auth
1.2) Save order list to db (for now save one month, should be configurable)
1.3) Mark each entry with seller/buyer as trx initiator, finally will use as sell vs buy
1.4) Implementation in rest api , suggest to use next.js
1.5) Provide report by last x days / hours / minutes (for example last hour/two or max month) *data will be accumulated as we go
1.6) Provide volatility report , mean low/hight price for given (1.5)
Report example --------------
Last x days
20000 eth sold - total value x
4000 eth buy - total value y
volatility from z - i

MongoDB
https://www.binance.com/

