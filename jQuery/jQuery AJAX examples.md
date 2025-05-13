# jQuery AJAX examples


### 참고 사이트
- [jQuery.ajax()](https://api.jquery.com/jquery.ajax/){:target="_blank"}
- [REST test test...](https://resttesttest.com/){:target="_blank"}
- [httpbin.org](https://httpbin.org/){:target="_blank"}


### 가장 간단한 ajax
```js
$.ajax("https://httpbin.org/get?p1=v1&p2=v2")
    .done(function(data, textStatus, jqXHR) {
        console.log("ajax done", data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ajax fail", jqXHR);
    });
```


### done, fail, always Promise callbacks
```js
$.ajax("https://httpbin.org/get?p1=v1&p2=v2")
    .done(function(data, textStatus, jqXHR) {
        console.log("ajax done", data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ajax fail", jqXHR);
    })
    .always(function() {
        console.log("ajax always");
    });
```


### POST JSON 데이터 전송
```js
$.ajax({
        url: "https://httpbin.org/post",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({"p1":"v1", "p2":"v2"}),
        dataType: "json"
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("ajax done", data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ajax fail", jqXHR);
    })
    .always(function() {
        console.log("ajax always");
    });
```


### success, error, complete callbacks
> Deprecation Notice: The jqXHR.success(), jqXHR.error(), and jqXHR.complete() callbacks are removed as of jQuery 3.0. You can use jqXHR.done(), jqXHR.fail(), and jqXHR.always() instead.

```js
$.ajax({
    url: "https://httpbin.org/get?p1=v1&p2=v2",
    success: function(data, textStatus, jqXHR) {
        console.log("ajax success", data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("ajax error", jqXHR);
    },
    complete: function() {
        console.log("ajax complete");
    }
});

$.ajax({
    url: "https://httpbin.org/post",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({"p1":"v1", "p2":"v2"}),
    dataType: "json",
    success: function(data, textStatus, jqXHR) {
        console.log("ajax success", data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("ajax error", jqXHR);
    },
    complete: function() {
        console.log("ajax complete");
    }
});
```

