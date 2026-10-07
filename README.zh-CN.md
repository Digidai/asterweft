# Asterweft

**面向 Cloudflare 与本地电脑，独立实现的 Agent 平台。**

[English](README.md) · [深度研究](docs/research/cloudflare-rewrite.zh-CN.md) · [架构](docs/architecture/README.md) · [功能对照](docs/parity/README.md) · [完整重写计划](docs/plans/full-rewrite.md)

目标：以全新代码、全新品牌，重写 [Agent Foundation](https://github.com/converge-ai-labs/agent-foundation) 固定版本的完整功能。云端基础设施部署在 Cloudflare；独立重写的本地客户端连接用户电脑，保留本地文件、进程、终端、模型连接和桌面操作。

**当前处于研究与规格阶段，Agent 产品尚未实现、尚未发布。** 本仓库提供可追溯的功能清单、架构、实施计划与清单校验工具。清单校验通过，不代表产品功能验收通过。[交付记录](docs/research/delivery-status.md) 分开记录研究、本地验证、CI、云端部署与实际功能状态。

## 不缩减的目标范围

- 可嵌入运行时，包括真正的 Python 进程内执行。
- 持久线程、Run/Attempt、输入队列、运行中追加指令、检查点、恢复、分支与子 Agent。
- 模型、工具、MCP、Skills、文件记忆、记录记忆、网页能力与执行环境。
- 管理控制台、协作工作台、交互式 TUI、HTTP API、Python/TypeScript/Go/Rust 客户端与远程 CLI。
- macOS、Windows、Linux 本地客户端，以及 Cloudflare Linux 沙箱。

固定基线已清点：**87 份规格、160 条 HTTP 路径上的 235 个操作、50 个环境 RPC 方法、21 个模型 Provider、11 个环境 Provider、10 个网页 Provider、2 个记录记忆 Provider、1 个连接器 Provider**。这些数字表示需要覆盖的范围，均不表示已经实现。

阶段划分用于安排实现顺序。最终验收仍要求全部覆盖，不能把少量功能演示标为 1:1 完成。

## 技术方向

采用 Cloudflare Workers、Agents SDK 与 Fibers、Durable Objects、D1、R2、Queues、Workflows、Sandbox SDK 1.0、Containers、Browser Run、AI Gateway 与 Workers AI。对 Think、Code Mode、AI Search 和 Agent Memory 分别设计接入与兼容边界；公开部署的默认配置不依赖私有测试资格。

## 查看与校验

Node.js 22+ 即可运行，不需要安装依赖或配置云端密钥：

```sh
npm test
npm run parity:status
```

`npm run parity:release` 会在任何必需项缺少实现或验证证据时失败。目前失败是预期结果。项目尚无可运行产品的安装命令。

## 来源与开源

独立建仓、独立编写实现和测试，不复制上游代码、生成契约、图片或二进制。研究中已经阅读上游源码，因此准确称为“独立重写”，不冒称正式洁净室开发。接口名称和路径仅作为互操作需求事实记录。[来源说明](docs/research/provenance.md)

Apache-2.0 · [Digidai](https://github.com/Digidai)
