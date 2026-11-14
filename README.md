Api/courses
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 121
ETag: W/"79-IjE0Sv1OxtBiveDv9PW1uayUEIc"
Date: Sat, 14 Nov 2026 11:40:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"id":1,"title":"Course 1","credits":1},{"id":2,"title":"Course 2","credits":3},{"id":3,"title":"Course 3","credits":2}]

/hello
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 23
ETag: W/"17-zVs0RYjWDjJ4ufxNjJBdQau1kpo"
Date: Sat, 14 Nov 2026 11:45:34 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Hello from Efe s server

/robots.txt
HTTP/1.1 200 OK         
X-Powered-By: Express                    
Content-Type: text/plain; charset=utf-8
Content-Length: 24                         
ETag: W/"18-6NYFx5DlloSxSY9aMfn0Rb+QW6Q"
Date: Sat, 14 Nov 2026 11:46:50 GMT
Connection: keep-alive  
Keep-Alive: timeout=5
                          
userAgent: *
Disallow: /


/old-page
HTTP/1.1 302 Found
X-Powered-By: Express
Location: /hello
Vary: Accept
Content-Type: text/plain; charset=utf-8
Content-Length: 28
Date: Sat, 14 Nov 2026 11:47:59 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Found. Redirecting to /hello


api/status
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 68
ETag: W/"44-/WPzjU7TyhCqersGfO3H8CLFKmU"
Date: Sat, 14 Nov 2026 11:48:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"status":"ok","nodeVersion":"v24.21.0","uptimeSeconds":556.4405657}

api/headers
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 16
ETag: W/"10-8uyRnR4pf0Ocryw+K0L5zsU4rDo"
Date: Sat, 14 Nov 2026 11:49:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"accept":"*/*"}



/api/subscribe
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 21
ETag: W/"15-bm7tJgu8FHlq5QU+Y6gDxOGPfRc"
Date: Sat, 14 Nov 2026 11:50:42 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"error":"Not found"}



/api/admin
HTTP/1.1 403 Forbidden
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 21
ETag: W/"15-TLNzmZqKxaTuFdX/dVWWPBu44/c"
Date: Sat, 14 Nov 2026 11:51:25 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"error":"Forbidden"}




/api/stats
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 20
ETag: W/"14-8YY45K+gZdFNBGawb0twk2v/TUk"
Date: Sat, 14 Nov 2026 11:51:51 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"requestsServed":9}
