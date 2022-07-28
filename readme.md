# Vue2 Boilerplate

## 初始化

-   `package.json`修改 name 字段为项目标识名

## 静态资源

-   `.env`指定静态资源模式，`setting.json`指定静态资源路径
-   `.github/workflows`指定 oss 路径
-   配置 secrets：`ACCESS_TOKEN`，仓库写+包读取权限
-   配置 secrets：`ACCESSKEY_ID`和`ACCESS_KEY_SECRET`，oss 读写权限

## 私有包

-   `.github/workflows`指定包私有域`@org`
-   `.npmrc`修改`@org`为对应的组织名

## 其它

-   public/index.html 添加统计代码

## 开发

-   `npm install` 安装依赖
-   `npm run serve` 启动本地服务
-   `npm run build` 构建
