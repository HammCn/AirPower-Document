# AButton 按钮组件

## Props参数

| 参数        | 类型    | 默认值 | 描述           |
| ----------- | ------- | ------ | -------------- |
| customClass | String  | ""     | 样式类         |
| permission  | String  | -      | 权限           |
| tooltip     | String  | ""     | 提示           |
| icon        | String  | ""     | 自定义图标类名 |
| type        | String  | ""     | 常用图标       |
| iconButton  | Boolean | false  | 图标按钮       |
| linkButton  | Boolean | false  | 链接按钮       |
| primary     | Boolean | false  | 主按钮         |
| danger      | Boolean | false  | 危险按钮       |
| disabled    | Boolean | false  | 禁用按钮       |



## Slot插槽

| 插槽名   | 描述     |
| -------- | -------- |
| #default | 按钮内容 |

## Event事件

| 事件名  | 描述     | 回调参数 |
| ------- | -------- | -------- |
| click   | 点击事件 | -        |
| onClick | 点击事件 | -        |