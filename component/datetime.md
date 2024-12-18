# ADateTime 时间日期显示组件

`ADateTime` 可以用来显示时间日期，点击后可以显示一些友好提示，比如 `3天前`


## Props参数

| 参数       | 类型                               | 默认值                                       | 描述             |
| ---------- | ---------------------------------- | -------------------------------------------- | ---------------- |
| time       | number                             | 0                                            | 毫秒时间戳       |
| formatter  | string/AirConfig.dateTimeFormatter | AirConfig.dateTimeFormatter｜ 时间格式化模板 |
| isFriendly | boolean                            | false                                        | 是否显示友好时间 |