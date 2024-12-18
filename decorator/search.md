# @Search()

`@Search` 装饰器配置到类的属性上面，用于为类的属性做一些搜索配置，例如：

```typescript
export class UserEntity extends BaseEntity {
  @Search()
  nickname!: string
}
```

`@Search` 支持的配置如下面的表格：

| 属性         | 类型                       | 描述                                                                                                  |
| ------------ | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| label        | string                     | 字段标签，默认为属性名                                                                                |
| dictionary   | AirEnum/AirDictionaryArray | 属性作为兜底的字典配置，在表单、搜索、表格中可能使用到                                                |
| ignorePrefix | boolean                    | 是否忽略类名的前缀，默认为 `false`，如忽略类名前缀，则属性别名不会加上 `@Model` 的 `fieldPrefix` 配置 |
| hide         | boolean                    | 是否隐藏搜索框                                                                                        |
| orderNumber  | number                     | 排序                                                                                                  |
| filterable   | boolean                    | 是否可筛选                                                                                            |
| between      | boolean                    | 是否是区间搜索                                                                                        |
| betweenType  | AirBetweenType             | 区间类型                                                                                              |
| betweenMin   | number                     | 区间最小值                                                                                            |
| betweenMax   | number                     | 区间最大值                                                                                            |
| dateType     | AirSearchDataType          | 搜索数据类型                                                                                          |
| width        | number                     | 搜索宽度                                                                                              |
| clearable    | boolean                    | 是否可清空当前输入的内容                                                                              |