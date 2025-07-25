# 🚀 Claude Code Chat - VS Code 精美聊天界面

[English](README.md) | **简体中文**

[![VS Code 扩展](https://img.shields.io/badge/VS%20Code-扩展-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=andrepimenta.claude-code-chat)
[![Claude Code](https://img.shields.io/badge/技术支持-Claude%20Code-orange?style=for-the-badge)](https://claude.ai/code)
[![TypeScript](https://img.shields.io/badge/基于-TypeScript-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

> **告别终端命令。在 VS Code 中通过精美直观的界面与 Claude Code 交流。**

摒弃命令行，以前所未有的方式体验 Claude Code。本扩展将惊艳的聊天界面直接集成到编辑器中，让 AI 辅助变得触手可及、可视化且充满乐趣。

🤖 **由 Claude Code 为 Claude Code 打造** - 这个扩展完全由 Claude Code 自身开发。Claude Code 创建了自己的聊天界面！

---

## ✨ **为何选择 Claude Code Chat？**

🖥️ **无需终端** - 精美聊天界面取代命令行交互  
⏪ **还原检查点** - 撤销更改并将代码恢复到任何先前状态  
🔌 **MCP 服务器支持** - 完整的模型上下文协议服务器管理  
💾 **对话历史** - 自动保存对话历史与会话管理  
🎨 **原生 VS Code 体验** - 深度集成 VS Code，支持原生主题和侧边栏  
🧠 **计划与思考模式** - 先计划再执行和可配置的思考模式以获得更好结果  
⚡ **智能文件/图片上下文与自定义命令** - 引用任何文件、粘贴图片或截图，并创建自定义命令  
🤖 **模型选择** - 根据需求选择 Opus、Sonnet 或默认模型  
🐧 **Windows/WSL 支持** - 完整的原生 Windows 和 WSL 支持

![Claude Code Chat 1.0.0](https://github.com/user-attachments/assets/5954a74c-eff7-4205-8482-6a1c9de6e102)

---

## 🌟 **核心功能**

### 💬 **精美聊天图形界面**
- 无需终端 - 一切通过 UI 完成
- 实时流式响应与打字指示器
- 一键复制消息并显示视觉反馈
- 增强的 Markdown 支持与语法高亮
- 自动调整大小的输入框
- 代码块一键复制功能

### ⏪ **检查点与会话管理**
- **还原检查点** - 立即撤销更改并恢复到任何历史状态
- 基于 Git 的自动备份系统，安全实验
- 浏览并恢复任意对话检查点
- 自动保存和恢复对话
- 实时成本和令牌追踪
- 会话统计与性能指标

### 🔌 **MCP 服务器管理** ⭐ **V1.0 新增**
- **热门服务器库** - 一键安装常用 MCP 服务器
- **自定义服务器创建** - 构建并配置自己的 MCP 服务器
- **服务器管理** - 通过 UI 编辑、删除、启用/禁用服务器
- **自动集成** - 无缝权限与工具集成
- **跨平台支持** - 完整的 WSL 兼容性与路径转换

### 🔒 **高级权限系统** ⭐ **V1.0 新增**
- **交互式权限对话框** - 显示详细工具信息与命令预览
- **始终允许功能** - 常见工具智能命令模式匹配（npm、git、docker）
- **YOLO 模式** - 为高级用户跳过所有权限检查
- **工作区权限** - 精细控制可执行工具
- **实时权限管理** - 通过直观 UI 添加/移除权限

### 🖼️ **图片与剪贴板支持** ⭐ **V1.0 新增**
- **拖放图片** - 直接将图片拖入聊天窗口
- **剪贴板粘贴** - 按 Ctrl+V 粘贴截图和复制的图片
- **多图选择** - 通过 VS Code 文件选择器选择多张图片
- **有序存储** - 自动保存在 `.claude/claude-code-chat-images/` 目录
- **格式支持** - PNG、JPG、JPEG、GIF、SVG、WebP、BMP 格式

### 📱 **侧边栏集成** ⭐ **V1.0 新增**
- **原生 VS Code 侧边栏** - 侧边栏面板中的完整聊天功能
- **智能面板管理** - 在主视图和侧边栏视图间自动切换
- **持久会话** - 状态在面板切换间保持
- **活动栏集成** - 从 VS Code 活动栏快速访问

### 📁 **智能文件集成**
- 输入 `@` 即时搜索并引用工作区文件
- 通过文件浏览器附加图片和粘贴截图
- 整个项目的闪电般快速文件搜索
- 多文件讨论的无缝上下文保存

### 🛠️ **工具管理**
- 显示所有可用 Claude Code 工具的可视化仪表盘
- 带格式化结果的实时工具执行
- 进程控制 - 启动、停止和监控操作
- 安全工具执行的智能权限系统

### 🎨 **VS Code 集成**
- 匹配编辑器风格的原生主题
- 状态栏集成显示连接状态
- 活动栏面板快速访问
- 适应任何屏幕尺寸的响应式设计

### 🤖 **模型选择**
- **Opus** - 最强大的模型，适合需要深度推理的复杂任务
- **Sonnet** - 平衡模型，为大多数用例提供出色性能
- **默认** - 使用您配置的模型设置
- 模型偏好跨会话保存并自动存储
- 通过聊天界面下拉选择器轻松切换
- 切换模型时显示视觉确认
- 通过集成终端一键配置模型

### ⚡ **斜杠命令集成**
- **斜杠命令模态框** - 输入 "/" 即时访问所有 Claude Code 命令
- **19+ 内置命令** - /cost、/status、/config、/help、/memory、/review 等
- **自定义命令支持** - 使用会话上下文执行任何 Claude Code 命令
- **会话感知执行** - 所有命令在当前对话上下文中运行
- **终端集成** - 命令直接在 VS Code 终端中打开，支持 WSL

### 🧠 **高级 AI 模式**
- **先计划模式** - 切换使 Claude 在实施更改前先制定计划
- **思考模式** - 可配置强度级别（思考、深度思考、更深度思考、超思考）
- **模式切换** - 文本输入区域上方的简单开关
- **智能提示** - 根据选择的思考强度提供不同提示
- **令牌感知** - 更高思考级别消耗更多令牌但提供更深层推理

---

## 🚀 **快速开始**

### 先决条件
- **VS Code 1.80+** - 推荐最新版本
- **Claude Code CLI** - [从 Anthropic 安装](https://claude.ai/code)
- **有效的 Claude API 或订阅** - API 或 Pro/Max 计划

### 安装

1. **从 VS Code 应用商店安装**
   ```
   ext install claude-code-chat
   ```

2. **或手动安装**
   - 从发布页面下载 `.vsix` 文件
   - 运行 `code --install-extension claude-code-chat-x.x.x.vsix`

3. **打开 Claude Code Chat**
   - 按下 `Ctrl+Shift+C`（Mac 上是 `Cmd+Shift+C`）
   - 或点击状态栏中的 Claude 图标
   - 或使用命令面板：`Claude Code: Open Chat`

---

## 💡 **使用示例**

### 🔥 **代码审查与重构**
```
你：@src/components/UserProfile.tsx 你能审查这个组件并建议改进吗？

Claude：我将分析您的 UserProfile 组件。查看代码后，这是我的建议：

1. **性能优化**：添加 React.memo() 防止不必要的重新渲染
2. **TypeScript 增强**：props 接口可以更具体
3. **无障碍性**：缺少屏幕阅读器的 ARIA 标签

[附详细分析和代码示例...]
```

### 📊 **项目分析**
```
你：分析我项目的整体架构并指出潜在问题

Claude：我将检查您的项目结构并指出改进领域：

🏗️ **架构概览**
- 使用 TypeScript 的 React 前端
- 使用 Express 的 Node.js 后端
- MongoDB 数据库层

⚠️ **发现问题**
- React 组件缺少错误边界
- 数据库查询缺乏适当索引
- API 路由缺少输入验证

[附详细建议和实现示例...]
```

### 🐛 **调试助手**
```
你：我的 API 遇到一个奇怪错误。这是堆栈跟踪：[粘贴错误]

Claude：查看这个堆栈跟踪，问题似乎是异步中间件中的竞态条件。情况如下：

1. **根本原因**：多个请求正在修改共享状态
2. **解决方案**：实现适当的请求隔离
3. **预防**：添加全面的错误处理

[附逐步调试指南...]
```

### ⏪ **带检查点的安全实验**
```
你：你能重构整个组件用钩子替代类组件吗？

Claude：我将用 React 钩子重构您的组件。别担心 - 我会先创建一个检查点，方便您随时恢复。

[自动创建检查点]

这是使用钩子重构后的组件：
[展示新实现]

如果想撤销更改，只需点击"还原检查点"立即恢复原始代码。
```

---

## ⚙️ **配置**

### 键盘快捷键
| 快捷键 | 操作 |
|----------|--------|
| `Ctrl+Shift+C` | 打开 Claude Code Chat |
| `Enter` | 发送消息 |
| `@` | 打开文件选择器 |
| `/` | 打开斜杠命令模态框 |

### WSL 配置（Windows 用户）
如果通过 WSL (Windows Subsystem for Linux) 使用 Claude Code，可以配置扩展使用 WSL：

1. 打开 VS Code 设置 (`Ctrl+,` 或 `Cmd+,`)
2. 搜索 "Claude Code Chat"
3. 配置以下设置：
   - **Claude Code Chat: WSL 启用** - 启用 WSL 集成
   - **Claude Code Chat: WSL 发行版** - WSL 发行版名称（如 `Ubuntu`、`Debian`）
   - **Claude Code Chat: WSL Node 路径** - WSL 中 Node.js 路径（默认：`/usr/bin/node`）
   - **Claude Code Chat: WSL Claude 路径** - WSL 中 Claude 路径（默认：`/usr/local/bin/claude`）

在 `settings.json` 中的配置示例：
```json
{
  "claudeCodeChat.wsl.enabled": true,
  "claudeCodeChat.wsl.distro": "Ubuntu",
  "claudeCodeChat.wsl.nodePath": "/usr/bin/node",
  "claudeCodeChat.wsl.claudePath": "/usr/local/bin/claude"
}
```

---

## 🎯 **专业技巧**

### 🔥 **文件上下文魔法**
- 输入 `@` 加搜索词快速引用文件
- 使用 `@src/` 限定到特定目录
- 在一条消息中引用多个文件进行跨文件分析
- **新增**：直接复制粘贴图片到聊天窗口提供视觉上下文
- **新增**：用 Ctrl+V 粘贴截图实现即时视觉交流

### ⚡ **生产力提升**
- **自动创建检查点** 在更改前确保安全实验
- **立即还原** 如果更改不如预期
- **新增**：权限系统防止意外执行工具
- **新增**：YOLO 模式为追求速度的高级用户准备
- 使用停止按钮取消长时间运行的操作
- 复制消息内容重用 Claude 的回复
- 打开历史面板参考先前对话
- **新增**：侧边栏集成支持多面板工作流

### 🎨 **界面定制**
- UI 自动适应 VS Code 主题
- 消息颜色编码：绿色代表您，蓝色代表 Claude
- 悬停消息显示复制按钮
- **新增**：增强的代码块渲染与语法高亮
- **新增**：代码块一键复制功能

---

## 🔧 **高级功能**

### 🛠️ **工具集成**
Claude Code Chat 提供对所有 Claude Code 工具的安全访问：
- **Bash** - 带权限控制的 shell 命令执行
- **文件操作** - 读取、写入和编辑文件
- **搜索** - 跨工作区的 Grep 和 glob 模式匹配
- **网络** - 获取和搜索网络内容
- **多文件编辑** - 批量文件修改
- **MCP 服务器** - 用模型上下文协议服务器扩展功能
- **权限系统** - 精细控制工具执行确保安全

### 📊 **分析与监控**
- **实时成本追踪** - 监控 API 使用情况
- **令牌消耗** - 查看输入/输出令牌计数
- **响应计时** - 跟踪性能指标
- **会话统计** - 全面的使用分析

### ⏪ **检查点系统**
- **即时恢复** - 一键恢复到任何先前状态
- **对话检查点** - 每次更改都创建还原点
- **可视化时间线** - 查看并导航所有项目状态

### 🔄 **对话历史**
- **自动保存** - 每个对话都被保存
- **智能恢复** - 精确恢复到离开时的状态
- **切换对话** - 轻松查看并切换到先前对话

---

## 🤝 **贡献**

欢迎贡献！您可以通过以下方式帮助：

1. **🐛 报告错误** - 使用我们的问题跟踪器
2. **💡 建议功能** - 分享您的想法
3. **🔧 提交 PR** - 帮助我们改进代码
4. **📚 完善文档** - 让文档更好

### 开发设置
```bash
git clone https://github.com/andrepimenta/claude-code-chat
cd claude-code-chat
npm install

按 F5 运行扩展或访问 VSCode 中的"运行和调试"部分
```

---

## 📝 **许可证**

详见 [LICENSE](LICENSE) 文件。

---

## 🙏 **致谢**

- **Anthropic** - 创造了出色的 Claude AI 特别是 Claude Code SDK
- **VS Code 团队** - 提供了惊人的扩展平台
- **我们的社区** - 提供反馈、建议和贡献

---

## 📞 **支持**

需要帮助？我们为您提供：

- 🐛 **问题**：[GitHub Issues](https://github.com/andrepimenta/claude-code-chat/issues)

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请在 GitHub 上给我们点赞！**

[**立即下载**](https://marketplace.visualstudio.com/items?itemName=andrepimenta.claude-code-chat)

</div>