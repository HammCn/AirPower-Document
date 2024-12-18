# @Form()

`@Form` 装饰器配置到类的属性上面，用于为类的属性做一些表单信息的配置，例如：

```typescript
export class UserEntity extends BaseEntity {
  @Form({
    email: true,
    requiredString: true,
  })
  email!: string
}
```

`@Form` 支持的配置如下面的表格：



| 属性               | 类型                        | 描述                                                                                                     |
| ------------------ | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| label              | string                      | 字段标签，默认为属性名                                                                                   |
| dictionary         | AirEnum                     | AirDictionaryArray                                                                                       | 属性作为兜底的字典配置，在表单、搜索、表格中可能使用到 |
| dateTimeFormat     | AirDateTimeFormatter/string | 时间日期真实传输数据的格式，仅在传入了 `dateType` 时有效。默认值 `AirDateTimeFormatter.TIMESTAMP`        |
| dateShowFormatter  | AirDateTimeFormatter/string | 时间日期类型默认通过 `dateType` 的类型自动获取， `AirConfig.defaultDateTimeFormatter` 可作为全局兜底配置 |
| dateType           | AirDateType                 | 是否时间日期类型                                                                                         |
| max                | number                      | 如果是数字时的最大值                                                                                     |
| min                | number                      | 如果是数字时的最小值                                                                                     |
| maxLength          | number                      | 字符串的最大长度                                                                                         |
| minLength          | number                      | 字符串的最小长度                                                                                         |
| orderNumber        | number                      | 排序序号，越大排在越前                                                                                   |
| placeholder        | string                      | 占位符                                                                                                   |
| textarea           | boolean                     | 是否是文本域                                                                                             |
| number             | boolean                     | 是否是数字                                                                                               |
| precision          | number                      | 数字精度                                                                                                 |
| clearable          | boolean                     | 是否可清空                                                                                               |
| password           | boolean                     | 是否是密码框                                                                                             |
| prefixIcon         | string                      | 前置图标                                                                                                 |
| suffixIcon         | string                      | 后置图标                                                                                                 |
| suffixText         | string                      | 后置文本                                                                                                 |
| multiple           | boolean                     | 是否是多选                                                                                               |
| collapseTags       | boolean                     | 是否是折叠标签                                                                                           |
| filterable         | boolean                     | 是否可过滤                                                                                               |
| multipleLimit      | number                      | 多选限制数量                                                                                             |
| checkStrictly      | boolean                     | 是否父子不互相关联                                                                                       |
| showLimit          | boolean                     | 是否显示数量限制                                                                                         |
| showColor          | boolean                     | 如果是下拉框，是否为可选项显示颜色                                                                       |
| emitPath           | boolean                     | 是否返回全路径                                                                                           |
| showAllLevels      | boolean                     | 是否显示所有层级                                                                                         |
| autoSize           | boolean                     | TextArea是否自适应                                                                                       |
| minRows            | number                      | 最小行数                                                                                                 |
| maxRows            | number                      | 最大行数                                                                                                 |
| switch             | boolean                     | 使用Switch组件                                                                                           |
| ｜hideSwitchLabel  | boolean                     | 是否隐藏Switch的label                                                                                    |
| radio              | boolean                     | 使用Radio组件                                                                                            |
| radioButton        | boolean                     | 使用RadioButton组件，需要先配置 `radio` 为 `true`                                                        |
| defaultValue       | any                         | 表单默认值                                                                                               |
| disableSwitchColor | boolean                     | 禁用Switch颜色                                                                                           |
| trim               | AirTrim                     | 去掉空格的方式                                                                                           |
| chinese            | boolean                     | 是否是中文                                                                                               |
| mobilePhone        | boolean                     | 是否是手机号                                                                                             |
| telPhone           | boolean                     | 是否是座机号                                                                                             |
| email              | boolean                     | 是否是电子邮箱                                                                                           |
| requiredString     | boolean                     | 是否必填(字符串类型)                                                                                     |
| requiredNumber     | boolean                     | 是否必填(数字类型)                                                                                       |
| requiredPayload    | boolean                     | 是否必填(挂载对象)                                                                                       |
| regExp             | RegExp                      | 正则表达式对象                                                                                           |
| hide               | boolean                     | 是否隐藏表单字段                                                                                         |