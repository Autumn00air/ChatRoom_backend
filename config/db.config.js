
//连接数据库

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/kerwin_project")
//插入集合和数据,数据库kerwin_project会自动创建