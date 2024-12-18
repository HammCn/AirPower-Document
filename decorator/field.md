# @Field()

`@Field` 装饰器配置到类的属性上面，用于为类的属性做一些基础配置，例如：

```typescript
export class UserEntity extends BaseEntity {
  @Field({
    label: '昵称',
  }) 
  nickname!: string
}
```

`@Field` 支持的配置如下面的表格：

| 属性         | 类型                       | 描述                                                                                                  |
| ------------ | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| label        | string                     | 字段标签，默认为属性名                                                                                |
| dictionary   | AirEnum/AirDictionaryArray | 属性作为兜底的字典配置，在表单、搜索、表格中可能使用到                                                |
| ignorePrefix | boolean                    | 是否忽略类名的前缀，默认为 `false`，如忽略类名前缀，则属性别名不会加上 `@Model` 的 `fieldPrefix` 配置 |
| alias        | string                     | 属性的别名，如果配置了，则会直接使用别名                                                              |
| array        | boolean                    | 是否是数组，默认为 `false`                                                                            |
| type         | ClassConstructor           | 强制类型转换的目标类，如果配置了，则将使用 `type` 类型转换器进行类型转换                              |