# Feature acceptance groups

85 requirement groups. Each group must be expanded into concrete success, failure, concurrency and recovery scenarios before claiming equivalence. The JSON is the editable source; render with `node scripts/parity.mjs render`.

| ID | Category | Requirement | Milestone | Status |
|---|---|---|---|---|
| H01 | harness | [Agent definition and immutable build inputs](#h01) | M2 | planned |
| H02 | harness | [Capability ordering and scoped context](#h02) | M2 | planned |
| H03 | harness | [Plugin lifecycle and configuration](#h03) | M2 | planned |
| H04 | harness | [Run identity and lifecycle hooks](#h04) | M2 | planned |
| H05 | harness | [Managed tool execution](#h05) | M2 | planned |
| H06 | harness | [Deferred tools and human interaction](#h06) | M2 | planned |
| H07 | harness | [Environment mounts and runtime mutation](#h07) | M2 | planned |
| H08 | harness | [Environment provider contracts](#h08) | M2 | planned |
| H09 | harness | [Context composition and overlays](#h09) | M2 | planned |
| H10 | harness | [Portable checkpoints and continuation](#h10) | M2 | planned |
| H11 | harness | [Inline delegation](#h11) | M2 | planned |
| H12 | harness | [Usage and event attribution](#h12) | M2 | planned |
| H13 | harness | [Host adapter boundaries](#h13) | M2 | planned |
| H14 | harness | [In-process Python embedding](#h14) | M6 | planned |
| H15 | harness | [Security and compatibility hooks](#h15) | M2 | planned |
| H16 | harness | [Multimodal inputs and structured output](#h16) | M2 | planned |
| H17 | harness | [Native provider state and recovery](#h17) | M2 | planned |
| H18 | harness | [Model authentication flows](#h18) | M5 | planned |
| H19 | harness | [Model provider metadata and construction](#h19) | M5 | planned |
| H20 | harness | [Core and optional capabilities](#h20) | M5 | planned |
| H21 | harness | [Restricted Python CodeAct](#h21) | M5 | planned |
| H22 | harness | [Observation conversion and compaction](#h22) | M2 | planned |
| H23 | harness | [Durable asynchronous child runs](#h23) | M2 | planned |
| H24 | harness | [File memory with revisions](#h24) | M4 | planned |
| H25 | harness | [Record memory](#h25) | M4 | planned |
| H26 | harness | [Provider registry and lifecycle](#h26) | M5 | planned |
| H27 | harness | [Python foundation interoperability](#h27) | M6 | planned |
| H28 | harness | [Domain identity and serialization](#h28) | M2 | planned |
| S01 | service | [Organizations, workspaces and grants](#s01) | M3 | planned |
| S02 | service | [Login and identity lifecycle](#s02) | M3 | planned |
| S03 | service | [Resource editing and revisions](#s03) | M3 | planned |
| S04 | service | [Agent Composer](#s04) | M7 | planned |
| S05 | service | [Sessions, threads and inbox](#s05) | M2 | planned |
| S06 | service | [Run attempts and recovery authority](#s06) | M2 | planned |
| S07 | service | [Steering, interrupt, answer and resume](#s07) | M2 | planned |
| S08 | service | [Fork and lineage](#s08) | M2 | planned |
| S09 | service | [Environment lifecycle and bindings](#s09) | M4 | planned |
| S10 | service | [Durable facts and replayable delivery](#s10) | M2 | planned |
| S11 | service | [Subscriptions and webhooks](#s11) | M5 | planned |
| S12 | service | [Provider and connection resources](#s12) | M5 | planned |
| S13 | service | [Runtime composition and extension seams](#s13) | M6 | planned |
| S14 | service | [HTTP contract and errors](#s14) | M3 | planned |
| S15 | service | [Hosted file and record memories](#s15) | M4 | planned |
| S16 | service | [Logs, metrics, traces and usage queries](#s16) | M5 | planned |
| E01 | environment | [Daemon lifecycle and configuration](#e01) | M4 | planned |
| E02 | environment | [Environment RPC compatibility](#e02) | M4 | planned |
| E03 | environment | [Transport, sessions and attachment](#e03) | M4 | planned |
| E04 | environment | [File and directory operations](#e04) | M4 | planned |
| E05 | environment | [Commands and process handles](#e05) | M4 | planned |
| E06 | environment | [Output retention and byte offsets](#e06) | M4 | planned |
| E07 | environment | [Native execution boundaries](#e07) | M6 | planned |
| E08 | environment | [Independently authored protocols and clients](#e08) | M1 | planned |
| E09 | environment | [Resource lifetime, receipts and cancellation](#e09) | M4 | planned |
| E10 | environment | [Desktop screen and input](#e10) | M6 | planned |
| W01 | workbench | [Configuration sources and resource catalogue](#w01) | M7 | planned |
| W02 | workbench | [Extensions and capability discovery](#w02) | M7 | planned |
| W03 | workbench | [Content plugin repositories](#w03) | M7 | planned |
| W04 | workbench | [Agent, MCP and run composition](#w04) | M7 | planned |
| W05 | workbench | [Model login and compatible account stores](#w05) | M7 | planned |
| W06 | workbench | [Environment skill discovery](#w06) | M7 | planned |
| W07 | workbench | [Local persistence and recovery](#w07) | M7 | planned |
| W08 | workbench | [Projects, threads and environments](#w08) | M7 | planned |
| W09 | workbench | [Devices and environment binding](#w09) | M6 | planned |
| W10 | workbench | [Runs and child-agent surfaces](#w10) | M7 | planned |
| W11 | workbench | [Setup and readiness diagnostics](#w11) | M7 | planned |
| W12 | workbench | [Interactive terminal UI](#w12) | M6 | planned |
| W13 | workbench | [File memory organization](#w13) | M7 | planned |
| W14 | workbench | [MCP Apps host](#w14) | M7 | planned |
| W15 | workbench | [Collaborative drafts and conversations](#w15) | M7 | planned |
| W16 | workbench | [Native host computer sharing](#w16) | M6 | planned |
| W17 | workbench | [Web distribution and hosted assets](#w17) | M7 | planned |
| W18 | workbench | [Workspace files, editors and terminal](#w18) | M7 | planned |
| W19 | workbench | [Saved output comments](#w19) | M7 | planned |
| U01 | console | [Administration console](#u01) | M7 | planned |
| U02 | console | [Trace and usage interface](#u02) | M7 | planned |
| U03 | frontend | [Independent design system](#u03) | M7 | planned |
| P01 | protocol | [Observation stream](#p01) | M2 | planned |
| G01 | governance | [Reference architecture and packaging boundaries](#g01) | M1 | planned |
| G02 | protocol | [API conventions](#g02) | M1 | planned |
| G03 | protocol | [Data conventions and migrations](#g03) | M1 | planned |
| G04 | protocol | [Interaction semantics](#g04) | M2 | planned |
| G05 | distribution | [Build, documentation and release operations](#g05) | M8 | planned |
| C01 | clients | [Four service SDKs and remote CLI](#c01) | M6 | planned |
| C02 | cloudflare | [Cloudflare deployment and independent local companion](#c02) | M8 | planned |
| C03 | compatibility | [Native custom tools and extension execution](#c03) | M6 | planned |

## H01

**Agent definition and immutable build inputs** · M2 · `planned`

- 同一修订重建产生相同配置；默认修订变更不影响已运行任务
- 无效能力组合在运行前返回可定位错误

Sources: [03-agent-definition-and-build.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/03-agent-definition-and-build.md)

## H02

**Capability ordering and scoped context** · M2 · `planned`

- 能力依赖、排序与覆盖按公开契约执行
- 运行状态不泄漏到下一次运行；子 Agent 的权限不能由能力声明扩大

Sources: [04-capability-model.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/04-capability-model.md)

## H03

**Plugin lifecycle and configuration** · M2 · `planned`

- 支持代码插件与声明插件的发现、配置和错误隔离
- 异步打开失败时释放已打开资源；正常、异常和取消均执行清理

Sources: [05-plugin-system.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/05-plugin-system.md)

## H04

**Run identity and lifecycle hooks** · M2 · `planned`

- 身份、时间、环境与动态宿主绑定正确传入
- 开始、结束、取消和异常 hook 的顺序有可观察测试

Sources: [06-execution-context-and-lifecycle.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/06-execution-context-and-lifecycle.md)

## H05

**Managed tool execution** · M2 · `planned`

- 串行与并行调用返回与输入对应；工具异常可区分业务失败
- 结果大小有边界；覆盖和过滤发生在注册后的最终工具集合

Sources: [07-tool-execution.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/07-tool-execution.md)

## H06

**Deferred tools and human interaction** · M2 · `planned`

- 等待用户回答、审批或客户端工具时返回明确等待态
- 重复、过期、错误 run 的回答不会推进状态；恢复只消费匹配的回答

Sources: [07-tool-execution.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/07-tool-execution.md)

## H07

**Environment mounts and runtime mutation** · M2 · `planned`

- 具名挂载、只读访问、默认环境和动态挂载语义一致
- 恢复使用新的连接句柄；关闭 run 不误删被其他 run 共享的环境

Sources: [08-environment-integration.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/08-environment-integration.md)

## H08

**Environment provider contracts** · M2 · `planned`

- 11 个原有 provider 均保留独立验收项
- 能力不足返回明确错误；连接已有环境与创建环境不能混为一类

Sources: [08a-environment-providers.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/08a-environment-providers.md)

## H09

**Context composition and overlays** · M2 · `planned`

- 上下文按冻结与动态边界组合；压缩不覆盖历史原文
- 附件按需读取；当前模型请求投影不修改持久历史

Sources: [09-context-and-memory.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/09-context-and-memory.md)

## H10

**Portable checkpoints and continuation** · M2 · `planned`

- 保存并恢复消息、工具结果、命名状态与资源引用
- 密钥与活连接不写入检查点；版本不兼容返回明确迁移错误

Sources: [10-snapshot-and-resume.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/10-snapshot-and-resume.md)

## H11

**Inline delegation** · M2 · `planned`

- 内联子任务可单独返回结果、失败或取消
- 子调用继承约定上下文和用量归因，不能取得父任务没有的能力

Sources: [11-delegation-and-subagents.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/11-delegation-and-subagents.md)

## H12

**Usage and event attribution** · M2 · `planned`

- 模型、工具和子任务事件能关联 thread、run、attempt
- 未知价格保持 unknown；重复投递不重复累计已提交用量

Sources: [12-events-observability-and-usage.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/12-events-observability-and-usage.md)

## H13

**Host adapter boundaries** · M2 · `planned`

- 宿主实现持久化、鉴权、调度与资源获取接口
- 内核不依赖 Service 数据库或控制台进程即可独立执行

Sources: [13-hosting-contract.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/13-hosting-contract.md)

## H14

**In-process Python embedding** · M6 · `planned`

- Python 用户程序能直接执行自己的 Python 工具与回调
- 接受约定的原生模型、消息和输出类型；不能以 HTTP SDK 代替进程内执行

Sources: [14-public-api-and-packaging.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/14-public-api-and-packaging.md)

## H15

**Security and compatibility hooks** · M2 · `planned`

- 插件与宿主边界按契约拒绝不支持的执行方式
- 同一权限快照覆盖 HTTP、重定向和原生工具路径

Sources: [15-security-compatibility-and-tradeoffs.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/15-security-compatibility-and-tradeoffs.md)

## H16

**Multimodal inputs and structured output** · M2 · `planned`

- 文本、文件、图片、音频和视频分别检查模型能力
- 结构化输出可验证；非法输入和不支持的媒体路径返回明确错误

Sources: [16-input-model-and-output.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/16-input-model-and-output.md)

## H17

**Native provider state and recovery** · M2 · `planned`

- 工具调用后的 continuation 保留 provider 原生不透明字段
- 重试不串接已失败 attempt 的增量输出；自修复有次数边界

Sources: [16-input-model-and-output.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/16-input-model-and-output.md)

## H18

**Model authentication flows** · M5 · `planned`

- API key、浏览器登录和设备码流程保留公开能力
- 账号刷新、撤销和替换在正确存储范围生效；状态导出不包含凭据

Sources: [16a-model-authentication.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/16a-model-authentication.md)

## H19

**Model provider metadata and construction** · M5 · `planned`

- 21 个原有模型 provider 均有配置和运行验收
- 仅查询元数据不触发第三方 SDK 导入或网络请求

Sources: [16b-model-provider-definitions.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/16b-model-provider-definitions.md)

## H20

**Core and optional capabilities** · M5 · `planned`

- 覆盖任务工具、资源获取、媒体理解、原生图像输出保存及上下文协调
- 可选能力按配置启用；没有提供宿主接口时明确报告不可用

Sources: [17-core-capability-catalog.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/17-core-capability-catalog.md)

## H21

**Restricted Python CodeAct** · M5 · `planned`

- 使用受限 Python 执行语义，保持变量延续与暂停恢复
- 只能调用最终授权工具集合；不能用任意 CPython 或 JavaScript 替代

Sources: [18-codeact.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/18-codeact.md)

## H22

**Observation conversion and compaction** · M2 · `planned`

- 标准和自定义事件都能保留来源与身份
- 显示压缩后的 checkpoint 可重新渲染；显示流不充当持久结果

Sources: [19-observation-model.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/19-observation-model.md)

## H23

**Durable asynchronous child runs** · M2 · `planned`

- 创建、轮询、等待、取消和完成投递跨重启有效
- 子结果投递有去重；嵌套等待可检测死锁；禁止子任务不允许的延后工具

Sources: [20-async-components-and-lifecycle.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/20-async-components-and-lifecycle.md)

## H24

**File memory with revisions** · M4 · `planned`

- 文件读取、写入、重命名、删除、历史、恢复与条件写按相同版本边界工作
- 只读挂载拒绝所有写入；跨命名空间不可读取

Sources: [21-file-memory.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/21-file-memory.md)

## H25

**Record memory** · M4 · `planned`

- 记忆记录的新增、更新、删除、搜索与首输入召回可观察
- mem0 两种 provider 语义保留；清理一个命名空间不影响其他命名空间

Sources: [21a-record-memory.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/21a-record-memory.md)

## H26

**Provider registry and lifecycle** · M5 · `planned`

- 配置、凭据、可用性与运行会话分开管理
- 可选依赖缺失在使用时返回配置错误，不破坏基础导入

Sources: [22-provider-subsystem.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/22-provider-subsystem.md)

## H27

**Python foundation interoperability** · M6 · `planned`

- 独立 Python 实现能与公开的 Pydantic AI 扩展类型协作
- 互操作测试不导入任何 a13n 包

Sources: [01-pydantic-ai-foundation.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/01-pydantic-ai-foundation.md)

## H28

**Domain identity and serialization** · M2 · `planned`

- Agent、thread、run、attempt 与调用身份不能互相替换
- 序列化往返保留公开字段与兼容扩展

Sources: [02-domain-model.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/02-domain-model.md)

## S01

**Organizations, workspaces and grants** · M3 · `planned`

- 跨组织和工作空间访问均有拒绝测试
- 角色、服务账号、API key、邀请、审计和撤销覆盖对应 HTTP 操作

Sources: [03-tenancy.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/03-tenancy.md)

## S02

**Login and identity lifecycle** · M3 · `planned`

- bootstrap、登录退出、会话、密码重置、邮件变更与邀请接受可往返
- 默认单组织入驻行为不误称完整 SaaS 开户

Sources: [03-tenancy.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/03-tenancy.md)

## S03

**Resource editing and revisions** · M3 · `planned`

- Agent、Skills 与资源的修订不可变且默认版本可切换
- 并发更新携带版本条件，冲突不会覆盖他人更改

Sources: [04-resources.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/04-resources.md)

## S04

**Agent Composer** · M7 · `planned`

- 自然语言辅助创建与修改 Agent 可以形成待确认变更
- 确认前不提交资源修订，取消与过期请求不生效

Sources: [04-resources.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/04-resources.md)

## S05

**Sessions, threads and inbox** · M2 · `planned`

- 输入可排队、编辑、重排、撤回并保持提交身份
- 某 run 未消费的输入在 run 结束或等待后仍可继续处理
- 归档线程永久关闭新增输入与恢复；撤回待处理输入并保留历史，不能新增原契约没有的取消归档行为

Sources: [05-runs.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/05-runs.md)

## S06

**Run attempts and recovery authority** · M2 · `planned`

- 同一 thread 同时只有一个合法执行者可提交
- 旧 attempt 迟到写入被 fencing 拒绝；重启后从已提交 checkpoint 恢复
- 恢复重试有attempt上限；等待恢复的任务不会被持续失败或竞争中的任务长期饿死

Sources: [05-runs.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/05-runs.md)

## S07

**Steering, interrupt, answer and resume** · M2 · `planned`

- 运行中追加指令与下一轮排队区分清楚
- 中断、等待、回答与恢复的竞态通过独立场景验收
- 单个回答可先持久保存；全部收齐前不启动工具；最后一条回答和唯一后续run一起提交，失败时共同回滚
- 重复相同答案返回既有结果，不同答案冲突；完整resume必须与已保存答案一致；128项与256 KiB边界有独立测试
- 取消不撤销外部副作用且不自动取消子run；已失败/取消run没有独立retry操作，新输入和同run attempt恢复必须区分

Sources: [05-runs.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/05-runs.md)

## S08

**Fork and lineage** · M2 · `planned`

- 从指定运行状态分支，父子历史与附件引用可追溯
- 分支写入不能改变父线程历史
- 分支来源必须是sealed run；从等待态分支时拒绝继承的审批并结束未答调用，不解决原线程的等待

Sources: [05-runs.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/05-runs.md)

## S09

**Environment lifecycle and bindings** · M4 · `planned`

- 模板、创建、挂载、共享、停止和删除与引用生命周期一致
- 外部创建成功但本地提交失败时可恢复或回收孤儿环境

Sources: [06-environments.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/06-environments.md)

## S10

**Durable facts and replayable delivery** · M2 · `planned`

- checkpoint、消息事实与 outbox 在同一权威提交边界关联
- 流缺失时可查询持久结果；Queue 重复和乱序不损坏顺序

Sources: [07-facts-and-delivery.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/07-facts-and-delivery.md)

## S11

**Subscriptions and webhooks** · M5 · `planned`

- 筛选订阅、签名、重试、投递记录和手动重投可验证
- 重复通知不被描述成外部恰好执行一次

Sources: [07-facts-and-delivery.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/07-facts-and-delivery.md)

## S12

**Provider and connection resources** · M5 · `planned`

- 配置与秘密分开存储；测试连接不会伪造已验证状态
- OAuth回调绑定请求、连接和租户；MCP工具缓存可刷新

Sources: [08-providers.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/08-providers.md)

## S13

**Runtime composition and extension seams** · M6 · `planned`

- 可自定义身份验证、授权来源、资源绑定和运行准入
- Python 扩展在 Cloudflare Sandbox 或本地进程执行，不在 Workers 内伪造 Python 宿主

Sources: [09-runtime.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/09-runtime.md)

## S14

**HTTP contract and errors** · M3 · `planned`

- 235 个 HTTP 操作逐项重写，状态码、分页、错误和条件请求均有验收
- 保留 SSE、二进制上传下载和资源访问边界

Sources: [10-api.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/10-api.md)

## S15

**Hosted file and record memories** · M4 · `planned`

- Service 记忆资源、线程挂载和执行期访问采用相同权限
- 版本恢复、命名空间清理、未知远端状态均有恢复测试

Sources: [11-memory.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/11-memory.md)

## S16

**Logs, metrics, traces and usage queries** · M5 · `planned`

- 运行、模型、工具、子任务与 trace 关联可查询
- token 用量、估算成本和未知成本分别显示，导出不会泄漏密钥

Sources: [12-observability.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/12-observability.md)

## E01

**Daemon lifecycle and configuration** · M4 · `planned`

- 独立二进制支持配置、启动、关闭、重连和版本检查
- 启动失败有机器可读诊断，日志不含认证材料

Sources: [01-daemon-lifecycle-and-configuration.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/01-daemon-lifecycle-and-configuration.md)

## E02

**Environment RPC compatibility** · M4 · `planned`

- 50 个公开方法都有新实现和独立协议场景
- 初始化、方法协商、错误族和协议版本不依赖上游二进制

Sources: [02-eip-protocol.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/02-eip-protocol.md)

## E03

**Transport, sessions and attachment** · M4 · `planned`

- HTTP、WebSocket与已有会话附着按能力工作
- 重复连接、keepalive过期、关闭和重连不越过会话范围

Sources: [03-transports-and-sessions.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/03-transports-and-sessions.md)

## E04

**File and directory operations** · M4 · `planned`

- 文本与二进制读写、分页搜索、patch、复制、移动和删除覆盖
- 文件 writer commit/abort 保持原子可观察结果；路径与符号链接边界有测试

Sources: [04-resource-operations.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/04-resource-operations.md)

## E05

**Commands and process handles** · M4 · `planned`

- shell.exec 与 argv 执行区分；进程输入、等待、信号、终止、端口检查可用
- PTY resize和终端行为从会话协议及工作台端到端验收

Sources: [05-command-and-process-execution.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/05-command-and-process-execution.md)

## E06

**Output retention and byte offsets** · M4 · `planned`

- 输出按字节偏移量重读可得到相同数据；截断、释放与保留期明确
- 原生字节与 SDK 文本来源区分，不将字符偏移冒充字节偏移

Sources: [06-output-retention.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/06-output-retention.md)

## E07

**Native execution boundaries** · M6 · `planned`

- Linux、macOS、Windows 分别验证子进程树与资源清理
- 可选隔离机制符合平台能力，工作目录不能被描述成文件系统隔离

Sources: [07-execution-isolation.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/07-execution-isolation.md)

## E08

**Independently authored protocols and clients** · M1 · `planned`

- 从新协议源生成 Asterweft 客户端，不复制原有生成文件
- 版本变更有 schema 与客户端漂移检查

Sources: [08-protocol-source-client-and-generation.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/08-protocol-source-client-and-generation.md)

## E09

**Resource lifetime, receipts and cancellation** · M4 · `planned`

- 资源释放、过期、receipt查询和operation.cancel符合调用类别
- 已执行但响应丢失的操作保留不确定状态，禁止盲目重放

Sources: [09-resource-lifetime-and-reclamation.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/09-resource-lifetime-and-reclamation.md)

## E10

**Desktop screen and input** · M6 · `planned`

- macOS、Windows、Linux 分别验收观察、点击、移动、拖动、滚动、按键和文本输入
- 屏幕坐标、显示器缩放、权限拒绝与输入后观察有真实设备证据

Sources: [10-computer-use.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/10-computer-use.md)

## W01

**Configuration sources and resource catalogue** · M7 · `planned`

- 用户、项目和默认配置来源按规则合并
- 无效 YAML/JSON 给出精确位置且不会破坏已加载资源

Sources: [01-configuration-and-resource-catalog.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/01-configuration-and-resource-catalog.md)

## W02

**Extensions and capability discovery** · M7 · `planned`

- 安装、启用、禁用、发现与配置扩展有一致状态
- 可选依赖缺失不会使基础工作台失效

Sources: [01a-extension-discovery-and-management.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/01a-extension-discovery-and-management.md)

## W03

**Content plugin repositories** · M7 · `planned`

- 仓库来源、版本固定、更新和内容资源发现可验收
- 插件更新不偷偷改变正在运行任务绑定的版本

Sources: [01b-content-plugin-repositories.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/01b-content-plugin-repositories.md)

## W04

**Agent, MCP and run composition** · M7 · `planned`

- 编辑器、保存配置和运行快照边界一致
- MCP/模型/环境修改只在约定的后续运行生效

Sources: [02-agent-composition-and-snapshots.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/02-agent-composition-and-snapshots.md)

## W05

**Model login and compatible account stores** · M7 · `planned`

- 登录、刷新、退出与账号选择有本地和云端路径
- 凭据来源兼容公开约定但不会把本地账号自动上传

Sources: [02a-model-authentication-and-account-stores.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/02a-model-authentication-and-account-stores.md)

## W06

**Environment skill discovery** · M7 · `planned`

- 用户、本地项目与环境内的技能来源可区分
- 访问权限撤销后不能继续读取技能内容

Sources: [02b-environment-skill-sources.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/02b-environment-skill-sources.md)

## W07

**Local persistence and recovery** · M7 · `planned`

- 本地配置、会话和输出在应用关闭后可恢复
- 损坏记录有诊断，不把旧显示缓存作为执行状态

Sources: [03-local-storage-and-recovery.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/03-local-storage-and-recovery.md)

## W08

**Projects, threads and environments** · M7 · `planned`

- 项目与线程切换、归档、重命名与环境绑定可交互操作
- 多视图指向同一权威线程而不会创建重复任务

Sources: [04-projects-threads-and-environments.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/04-projects-threads-and-environments.md)

## W09

**Devices and environment binding** · M6 · `planned`

- 本地与远程设备可识别、连接、解绑和重新连接
- 离线设备状态明确；撤销设备后已排队命令不能继续执行

Sources: [04a-devices-and-environment-bindings.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/04a-devices-and-environment-bindings.md)

## W10

**Runs and child-agent surfaces** · M7 · `planned`

- 父子任务状态、等待与取消在工作台和TUI呈现一致
- 连接断开只影响观察，显式取消才改变执行状态

Sources: [05-runtime-subagents-and-surfaces.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/05-runtime-subagents-and-surfaces.md)

## W11

**Setup and readiness diagnostics** · M7 · `planned`

- 模型凭据、环境、桌面权限与必要依赖分别检查
- 演示就绪与真实执行成功不混为一条绿色状态

Sources: [06-setup-and-environment-readiness.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/06-setup-and-environment-readiness.md)

## W12

**Interactive terminal UI** · M6 · `planned`

- TUI支持会话、模型切换、流式输出、附件、命令与交互等待
- 键盘退出、取消和恢复行为可在终端重现

Sources: [07-interactive-cli.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/07-interactive-cli.md)

## W13

**File memory organization** · M7 · `planned`

- 工作台可浏览、编辑、组织和恢复记忆文件
- 自动整理有历史和并发冲突处理，不能静默覆盖用户更改

Sources: [08-file-memory.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/08-file-memory.md)

## W14

**MCP Apps host** · M7 · `planned`

- MCP应用可在受限iframe中渲染并调用所属工具
- 来源、会话隔离与请求关联可测试，应用失效不拖垮主UI

Sources: [09-mcp-apps.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/09-mcp-apps.md)

## W15

**Collaborative drafts and conversations** · M7 · `planned`

- 两客户端协作草稿、presence与提交状态收敛
- 断线重连不重复发送消息，提交权威在服务端

Sources: [01-collaborative-conversations.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/webui/01-collaborative-conversations.md)

## W16

**Native host computer sharing** · M6 · `planned`

- 主机屏幕共享和输入控制通过已绑定设备执行
- 观看与控制能力区分；断线和撤销后停止新输入

Sources: [02-host-computer-sharing.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/webui/02-host-computer-sharing.md)

## W17

**Web distribution and hosted assets** · M7 · `planned`

- Console与工作台可独立构建并使用同一契约版本
- 静态资源、深链接和缓存更新在Workers上验证

Sources: [03-distribution.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/webui/03-distribution.md)

## W18

**Workspace files, editors and terminal** · M7 · `planned`

- 文件树、编辑、预览、差异、终端与任务面板可往返
- 大输出和长会话不阻塞输入，操作结果来自实际环境

Sources: [04-workbench-interaction.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/webui/04-workbench-interaction.md)

## W19

**Saved output comments** · M7 · `planned`

- 输出可附评论并关联稳定内容身份
- 编辑、删除、刷新、权限与并发更新有用户流程验收

Sources: [05-output-comments.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/webui/05-output-comments.md)

## U01

**Administration console** · M7 · `planned`

- 覆盖Agent、模型、Provider、Skills、连接、环境、记忆、团队和设置的所有公开操作
- 资源校验、导入导出、确认提交、会话和运行浏览形成完整流程

Sources: [console.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/frontend/console.md)

## U02

**Trace and usage interface** · M7 · `planned`

- 运行trace可按attempt、模型与工具层次定位
- 用量概览和未知价格清楚显示，不被描述成支付账单

Sources: [console.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/frontend/console.md)

## U03

**Independent design system** · M7 · `planned`

- 独立品牌、图标、布局与样式；交互任务覆盖原有功能
- 键盘、焦点、窄屏、明暗主题、中英语言和减弱动画有可访问测试

Sources: [design-system.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/frontend/design-system.md)

## P01

**Observation stream** · M2 · `planned`

- 增量输出、工具、子任务与自定义事件有稳定身份
- 断点重连、保留窗口外缺口、完整结果回读与结束状态分别测试

Sources: [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-stream-protocol/00-overview.md)

## G01

**Reference architecture and packaging boundaries** · M1 · `planned`

- 运行时、Service、Console、Workbench和环境客户端均有独立包边界
- 所有基线文档进入可追溯目录，新增需求不能绕过清单

Sources: [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/README.md), [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/00-overview.md), [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/README.md), [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/00-overview.md), [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/README.md), [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/00-overview.md), [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/README.md), [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/webui/00-overview.md), [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness-ui/webui/README.md), [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/00-overview.md), [02-layout.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/02-layout.md), [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/README.md), [glossary.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/glossary.md), [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-stream-protocol/README.md), [README.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/frontend/README.md)

## G02

**API conventions** · M1 · `planned`

- 独立描述JSON表示、分页、错误、条件写和资源引用
- 幂等键重复、相同键不同载荷和过期键有测试

Sources: [api-conventions.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/api-conventions.md)

## G03

**Data conventions and migrations** · M1 · `planned`

- 稳定身份、版本、时间和字段语义有跨语言样例
- 迁移支持旧数据读取并避免多权威互相覆盖

Sources: [data-conventions.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/data-conventions.md)

## G04

**Interaction semantics** · M2 · `planned`

- 提交与消费的run关联正确；等待态结束当前Interaction
- 关闭本地流不取消后台运行，后续run不是同一Interaction

Sources: [interaction-model.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/interaction-model.md)

## G05

**Build, documentation and release operations** · M8 · `planned`

- 包、客户端、桌面二进制与镜像独立版本和来源可查
- 文档示例、迁移、发布产物校验、恢复演练与依赖声明齐全

Sources: [repository-model.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/repository-model.md)

## C01

**Four service SDKs and remote CLI** · M6 · `planned`

- Python、TypeScript、Go、Rust低层API及高层Interaction独立重写
- 等待、SSE缺口、取消观察、附件、恢复和CLI退出码覆盖各语言固定基线

Sources: [sdks.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/docs/a13n-service/sdks.md)

## C02

**Cloudflare deployment and independent local companion** · M8 · `planned`

- 云端默认配置不需要外部PostgreSQL、Redis或其他宿主服务
- 本地客户端独立重写且支持离线后重连；不可缺少的私有测试产品有公开替代路径

Sources: [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/00-overview.md), [00-overview.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-envd/00-overview.md)

## C03

**Native custom tools and extension execution** · M6 · `planned`

- 自定义Python工具与Pydantic扩展可在真正Python运行时执行
- 云端将Python执行放入Cloudflare Sandbox，保留取消、错误和输出契约

Sources: [05-plugin-system.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-harness/05-plugin-system.md), [09-runtime.md](https://github.com/converge-ai-labs/agent-foundation/blob/0a7d64d5173dfbbfbe8ab602695cf1ff6405483e/spec/a13n-service/09-runtime.md)
