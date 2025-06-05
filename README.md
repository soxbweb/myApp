// 更改 git 用户名和邮箱的命令：：

# 更改用户名

git config --global user.name "新的用户名"

# 更改邮箱

git config --global user.email "新的邮箱地址"

# 针对当前项目更改用户名

git config user.name "新的用户名"

# 针对当前项目更改邮箱

git config user.email "新的邮箱地址"

// 验证全局
git config --global user.name
git config --global user.email

// 验证当前
git config user.name
git config user.email
