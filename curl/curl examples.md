# curl example

- curl man page : https://curl.se/docs/manpage.html


### GET 요청
```
curl 'https://postman-echo.com/get?foo1=bar1&foo2=bar2'
```

### POST RAW 데이터 전송
```
curl -X POST 'https://postman-echo.com/post' -d 'This is expected to be sent back as part of response body.'
```

### POST 폼 데이터 전송
```
curl -X POST 'https://postman-echo.com/post' -d 'foo1=bar1' -d 'foo2=bar2'
```

### POST JSON 데이터 전송
```
curl -X POST -H "Content-Type: application/json" -d '{"message":"hello"}' https://postman-echo.com/post
```

### POST JSON 여러 줄 데이터 전송
```
curl -X POST https://postman-echo.com/post \
-H 'Content-Type: application/json; charset=utf-8' \
--data-binary @- << EOF
{
    "field1": "test",
    "field2": {
        "foo": "bar"
    }
}
EOF
```

### POST 데이터 여러 줄 전송
```
curl -X POST https://postman-echo.com/post \
-d 'foo1=bar1' \
-d 'foo2=bar2' \
-d @- << EOF
content={
    "field1": "test",
    "field2": {
        "foo": "bar한글"
    }
}
EOF
```

### 기타 옵션
- -L : 301, 302 redirect를 따라간다.


