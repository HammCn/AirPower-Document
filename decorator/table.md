# @Table()

`@Table` 装饰器配置到类的属性上面，用于为类的属性做一些表格列信息的配置，例如：

```typescript
export class UserEntity extends BaseEntity {
  @Table({
    forceShow: true,
    copyField: true,
    desensitize: AirDesensitizeType.EMAIL,
  })
  email!: string
}
```

`@Table` 支持的配置如下面的表格：



| 属性              | 类型                 | 描述                                                                          |
| ----------------- | -------------------- | ----------------------------------------------------------------------------- |
| label             | string               | 字段标签，默认为属性名                                                        |
| dictionary        | AirEnum              | AirDictionaryArray                                                            | 属性作为兜底的字典配置，在表单、搜索、表格中可能使用到 |
| hide              | boolean              | 是否默认隐藏                                                                  |
| removed           | boolean              | 是否从表格列移除(将不显示且无法勾选此列)                                      |
| width             | number               | 表格列宽度                                                                    |
| minWidth          | number               | 表格列最小宽度                                                                |
| fixed             | AirTableFixed        | 表格字段是否固定                                                              |
| orderNumber       | number               | 排序 越大越靠左                                                               |
| dateTimeFormatter | AirDateTimeFormatter | 日期格式化                                                                    |
| showColor         | boolean              | 是否显示枚举字典的颜色灯                                                      |
| sortable          | AirSortable          | 是否字段允许排序, custom为自定义排序, `ATable` 组件将触发 `onSortChange` 事件 |
| ｜forceShow       | boolean              | 强制显示到表格列，不允许取消勾选                                              |
| align             | AirTableAlign        | 对齐方式                                                                      |
| prefixText        | string               | 前置文字，一般用于显示类似 ¥ 的文本                                           |
| suffixText        | string               | 后置文字，一般用于显示类似 单位 的文本                                        |
| payloadField      | string               | 挂载对象的属性名称                                                            |
| friendlyDateTime  | boolean              | 是否显示友好时间                                                              |
| copyField         | boolean              | 是否可复制字段                                                                |
| image             | boolean              | 是否是图片字段                                                                |
| imageWidth        | number               | 图片宽度                                                                      |
| imageHeight       | number               | 图片高度                                                                      |
| imageRadius       | string               | 图片圆角                                                                      |
| emptyValue        | string               | 空数据兜底字符串, 可在 `AirConfig.defaultTableEmptyValue` 进行全局兜底        |
| payloadArray      | boolean              | 挂载的是数组数据                                                              | 仅当配置了 `payloadField` 时有效                       |
| nowrap            | boolean              | 是否显示换行省略                                                              |
| phone             | boolean              | 标记为电话字段，点击将唤起拨号或展示拨号二维码                                |
| money             | boolean              | 是否是金额字段                                                                |
| moneyPrecision    | number               | 金额字段保留的小数位数                                                        |
| moneyDirection    | AirMoneyDirection    | 金额字段舍弃方向                                                              |
| desensitize       | AirDesensitizeType   | 脱敏类型                                                                      |
| desensitizeHead   | number               | 脱敏开始保留                                                                  |
| desensitizeTail   | number               | 脱敏保留尾部位数                                                              |
| desensitizeSymbol | string               | 自定义脱敏符号                                                                |
