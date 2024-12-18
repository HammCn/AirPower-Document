# @Model()

`@Model` 装饰器配置到类上面，用于为类做一些基础配置，例如：

```typescript
@Model({
  label: '角色',
})
export class RoleEntity extends BaseEntity {

}
```

`@Model` 支持的配置如下面的表格：


| 属性               | 类型    | 描述                                                                                                                     |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| label              | string  | 模型名称，默认为类名                                                                                                     |
| fieldPrefix        | string  | 模型属性前缀，默认为空，数据转换时使用，例如后端给用户的属性都叫 `user_xxx`，则可配置为 `user_`， 前端只需要定义为 `xxx` |
| showSearch         | boolean | 是否显示搜索框，默认为 `true`，如设置为 `false`，则 `AToolBar` 将不显示搜索框                                            |
| addTitle           | string  | 添加按钮的标题，默认为 `添加`                                                                                            |
| addPermission      | string  | 添加权限标识，默认为 `add`，如 `user_add`，如传入 `permissionPrefix`，则应为 `permissionPrefix_add`                      |
| exportPermission   | string  | 导出权限标识，默认为 `export`，如 `user_export`，如传入 `permissionPrefix`，则应为 `permissionPrefix_export`             |
| importPermission   | string  | 导入权限标识，默认为 `import`，如 `user_import`，如传入 `permissionPrefix`，则应为 `permissionPrefix_import`             |
| tableEmptyText     | string  | 表格的没有数据时的提示文本，默认为 `暂无数据`                                                                            |
| editPermission     | string  | 编辑权限标识，默认为 `edit`，如 `user_edit`，如传入 `permissionPrefix`，则应为 `permissionPrefix_edit`                   |
| detailPermission   | string  | 详情权限标识，默认为 `detail`，如 `user_detail`，如传入 `permissionPrefix`，则应为 `permissionPrefix_detail`             |
| deletePermission   | string  | 删除权限标识，默认为 `delete`，如 `user_delete`，如传入 `permissionPrefix`，则应为 `permissionPrefix_delete`             |
| addChildPermission | string  | 添加子项目权限标识，默认为 `add`，如 `user_add`，如传入 `permissionPrefix`，则应为 `permissionPrefix_add`                |
| hideFieldSelector  | boolean | 全局隐藏字段列选择器，默认为 `false`，如设置为 `true`，则 `ATable` 传入的 `hideFieldSelector` 失效                       |
| permissionPrefix   | string  | 权限标识前缀，如指定了此项,则当前配置装饰器中不再使用类名作为前缀，如 `user`，则 `add` 权限标识为 `user_add`             |
