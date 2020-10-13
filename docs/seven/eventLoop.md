# EventLoop  
## 宏任务与微任务  

宏任务：setTimeout、setInterval、setImmediate、requestAnimationFrame、setImmediate(node).  
微任务：Promise、try...catch...finally、process.nextTick(node)、MutationObserver.
- async/await 本质上还是 Generator 函数的语法糖，而 function* 所返回的又是Promise对象。换句话说它本质上还是Promise的一些封装，而 Promise 是属于微任务的一种，所以它也算微任务。
- 都说 Promise 是微任务，但它应该拆开来看比较容易理解。首先 new Promise 实例的时候，其中形参所传入的匿名函数是**同步执行**的(但这时 resolve 和 reject 被调用)，在那之后使用 then 方法时所传入的匿名函数才是**微任务**。
- 主进程 -> 宏任务1 -> 微任务1~5 -> 宏任务2
