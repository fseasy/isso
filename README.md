# Isso Fork 版 – a commenting server similar to Disqus

原始版本、说明，见：**[posativ.org/isso](http://posativ.org/isso/)** for a **live demo**, more
details and [documentation](https://posativ.org/isso/docs/).

Why： 方便对其中的一些问题做修改。但修改是个性化地，不适合推到上游。

## 修改点

1. 修复 server 侧 `new` 接口在verify、guard检查错误时直接返回 `Content-Type=html` 的response，而非前端要求的 JSON 格式。
  
   这破坏了接口的一致性（而且前端是 XHTMLRequest, 即ajax，对非json格式返回的结果，直接判断为错误）。

   从这个细节看出，这个代码这块写得不好——返回都不一致。可能是多人维护导致的。

2. 修复 client 侧 `/new` 返回后，对错误信息的展示。

   看了好一会儿代码，才看明白前端的逻辑。若后端返回错误，目前client侧（即JS）默认错误处理是
   `console.log`。 修改这块的代码如下：

   a. 增加DOM返回 `postbox.js` 中增加显示warning的元素
   b. 增加错误处理函数，接受到错误时，将错误显示到上述元素中。

   JS这块代码，感觉是做了一个小的 JQuery... 但是，在用 JS 返回DOM的的逻辑处，采用字符串+的方式构建DOM，
   又觉得不够优雅。可能受限于时代吧。个人能力也有限，只能将其改为 `ES6` 的 format 串，更优雅的方式也不会了。

3. 修改 `isso.css`, 改动点如下：

   a. 隐藏 website 输入域（个人觉得无意义）
   b. 修改 width 等设置，让label、input在各种宽度下都合理展示
   c. 修改 textarea 宽度，让预览和编辑切换时DOM高度变换不那么大


## 调试/部署

1. 安装 `npm`, `Python3` 及其对应版本的 `python3-dev` 包 （这块参考原文档的[install-from-source][ifs]）
2. 在当前目录下，执行：

   ```Makefile
   make init # npm依赖安装
   make js # webpack 打包js，写到 isso/js 下的 *(dev|min).js
   ````

3. （调试）激活Python3环境，安装 `isso` Python server
   
    ```bash
    pip install -e .
    ```
  
4. (调试) 在 `isso/demo` 下，启动demo服务
   
   ```bash
   sh run_server.sh # 浏览器会打出访问host
   ```
   
   访问命令行输出的host, 具体地址为 `$HOST/demo` 即可看到demo页面。
  
5. (部署) 安装

   如果前面已经 

   ```Makefile
   make init
   make js
   ```

   了，那么部署环境下的安装，其实就是

   ```bash
   pip install .
   ```

   即可了。


[ifs]: https://posativ.org/isso/docs/install/#install-from-source