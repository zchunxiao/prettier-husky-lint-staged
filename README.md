[preitter](https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true)

```
// 这一行就可以安装husky和lint-stage，并且配置好husky。
npx mrm lint-staged
```

[prettier eslint](https://zhuanlan.zhihu.com/p/68026905)

- 1. 运行 Prettier 之后，再使用 eslint --fix 格式化一把，这样把冲突的部分以 ESLint 的格式为标准覆盖掉，剩下的 warning 就都是代码质量问题了。
- 2. 在配置 ESLint 的校验规则时候把和 Prettier 冲突的规则 disable 掉，然后再使用 Prettier 的规则作为校验规则。那么使用 Prettier 格式化后，使用 ESLint 校验就不会出现对前者的 warning。

###### 目前项目中是在提交的时候会先进行 Prettier 格式化，再进行 eslint 检测

```
Git全局配置和单个仓库的用户名邮箱配置

学习git的时候, 大家刚开始使用之前都配置了一个全局的用户名和邮箱

$ git config --global user.name "github's Name"

$ git config --global user.email "github@xx.com"

$ git config --list



如果你公司的项目是放在自建的gitlab上面, 如果你不进行配置用户名和邮箱的话, 则会使用全局的, 这个时候是错误的, 正确的做法是针对公司的项目, 在项目根目录下进行单独配置

$ git config user.name "gitlab's Name"

$ git config user.email "gitlab@xx.com"

$ git config --list

 git config --list查看当前配置, 在当前项目下面查看的配置是全局配置+当前项目的配置, 使用的时候会优先使用当前项目的配置

```
