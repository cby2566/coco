### 普通的ajax请求  

```
const Ajax2={
        get: function(url, fn) {
            // XMLHttpRequest对象用于在后台与服务器交换数据   
            var xhr = new XMLHttpRequest();            
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function() {
            // readyState == 4说明请求已完成
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
                // 从服务器获得数据 
                fn.call(this, xhr.responseText);  
                //fn.call(this, xhr.responseXML)
            }
            };
            xhr.send();
        },
        post: function (url, data, fn) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            // 添加http头，发送信息至服务器时内容编码类型
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
            xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn.call(this, xhr.responseText);
            }
            };
            xhr.send(data);
        }
    }
```