[preitter](https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true)

```
// 这一行就可以安装husky和lint-stage，并且配置好husky。
npx mrm lint-staged
```

[prettier eslint](https://zhuanlan.zhihu.com/p/68026905)

- 1. 运行 Prettier 之后，再使用 eslint --fix 格式化一把，这样把冲突的部分以 ESLint 的格式为标准覆盖掉，剩下的 warning 就都是代码质量问题了。
- 2. 在配置 ESLint 的校验规则时候把和 Prettier 冲突的规则 disable 掉，然后再使用 Prettier 的规则作为校验规则。那么使用 Prettier 格式化后，使用 ESLint 校验就不会出现对前者的 warning。

# 目前项目中是在提交的时候会先进行 Prettier 格式化，再进行 eslint 检测
