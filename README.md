# Isso – a commenting server similar to Disqus

原始版本、说明，见：**[posativ.org/isso](http://posativ.org/isso/)** for a **live demo**, more
details and [documentation](https://posativ.org/isso/docs/).

## Fork 版

Why： 方便对其中的一些问题做修改。但修改是个性化地，不适合推到上游。

### 调试/部署

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
  



[ifs]: https://posativ.org/isso/docs/install/#install-from-source