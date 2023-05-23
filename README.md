## @xinliang/create-cli

> 兼容性说明：create-cli需要Node.js版本14.18+，16+。然而，有些模板需要更高的Node.js版本才能工作，如果您的包管理器对此发出警告，请升级。

With NPM:

``$ npm create @xinliang/cli``

With Yarn:

``$ yarn create @xinliang/cli``

With PNPM:

``$ pnpm create @xinliang/cli``

然后按照提示操作！

也可以通过其他命令行选项直接指定项目名称。例如：

```
# npm 6.x
npm create @xinliang/cli my-vue-app --template vue3-ts

# npm 7+, extra double-dash is needed:
npm create @xinliang/cli my-vue-app -- --template vue3-ts

# yarn
yarn create @xinliang/cli my-vue-app --template vue3-ts

# pnpm
pnpm create @xinliang/cli my-vue-app --template vue3-ts
```

当前支持的模板预设包括：

- ``vue3-ts``

- ``vue3-nest``