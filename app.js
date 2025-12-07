const detailedCompetitions = [
  {
    id: "lanqiao-2025",
    title: "蓝桥杯 全国软件和信息技术专业人才大赛 2025",
    category: "编程 / 算法",
    level: "B",
    organizer: "工信部人才交流中心",
    location: "全国分赛区 + 线上",
    registrationOpen: "2024-12-01T08:00:00+08:00",
    registrationDeadline: "2025-03-10T23:59:59+08:00",
    eventStart: "2025-04-13T09:00:00+08:00",
    website: "https://dasai.lanqiao.cn/",
    tags: ["算法", "软件", "信创"],
    note: "个人/团队编程赛，含大学A/B/C组与研究生组。（2025-12-07核对：官网可访问，2025赛程未发布具体报名时间）"
  },
  {
    id: "cumcm-2025",
    title: "全国大学生数学建模竞赛 2025",
    category: "数学 / 建模",
    level: "A",
    organizer: "中国工业与应用数学学会",
    location: "全国统一命题",
    registrationOpen: "2025-06-20T09:00:00+08:00",
    registrationDeadline: "2025-09-10T17:00:00+08:00",
    eventStart: "2025-09-18T08:00:00+08:00",
    website: "https://www.mcm.edu.cn/",
    tags: ["建模", "数据", "数学"],
    note: "三人团队，赛题覆盖数学建模、数据分析、仿真优化。（2025-12-07核对：官网可访问，等待2025正式章程）"
  },
  {
    id: "challenge-cup-2025",
    title: "挑战杯 全国大学生课外学术科技作品竞赛 2025",
    category: "科研 / 学术",
    level: "A",
    organizer: "共青团中央等",
    location: "省赛选拔后晋级国赛",
    registrationOpen: "2025-02-15T09:00:00+08:00",
    registrationDeadline: "2025-05-10T23:59:59+08:00",
    eventStart: "2025-08-15T09:00:00+08:00",
    website: "https://www.tiaozhanbei.net/",
    tags: ["科研", "创新", "综合"],
    note: "以科研作品展示与答辩为核心，含自然科学、哲学社科、科技发明等赛道。（2025-12-07核对：官网可访问，2025赛程待发布）"
  },
  {
    id: "challenge-cup-startup-2025",
    title: "挑战杯 中国大学生创业计划大赛 2025",
    category: "创新创业",
    level: "A",
    organizer: "共青团中央等",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.tiaozhanbei.net/",
    tags: ["创业", "商业计划", "挑战杯"],
    note: "各省（校）赛时间不一，国赛通常在下半年举行，留意官网通知。（2025-12-07核对：官网可访问，2025赛程待发布）"
  },
  {
    id: "internet-plus-2025",
    title: "中国国际大学生创新大赛（互联网+）2025",
    category: "创新创业",
    level: "A",
    organizer: "教育部等",
    location: "校赛-省赛-国赛",
    registrationOpen: "2025-03-01T09:00:00+08:00",
    registrationDeadline: "2025-07-01T23:59:59+08:00",
    eventStart: "2025-10-20T09:00:00+08:00",
    website: "https://cy.ncss.cn/",
    tags: ["创业", "商业计划", "双创"],
    note: "强调项目落地与商业化，分“青年红色筑梦之旅”等多个赛道。（2025-12-07核对：官网可访问，2025赛程待官方发布）"
  },
  {
    id: "nuedc-2025",
    title: "全国大学生电子设计竞赛（电赛）2025",
    category: "硬件 / 电子",
    level: "A",
    organizer: "教育部高教司",
    location: "分赛区现场 + 线上提交",
    registrationOpen: "2025-05-05T09:00:00+08:00",
    registrationDeadline: "2025-08-15T18:00:00+08:00",
    eventStart: "2025-08-22T08:00:00+08:00",
    website: "https://aiosite.cn",
    tags: ["硬件", "嵌入式", "信号"],
    note: "三人团队完成48-72小时现场设计与测评，注重硬件实现与系统可靠性。（2025-12-07核对：官网跳转 aiosite.cn，2025赛程待发布）"
  },
  {
    id: "icpc-asia-2025",
    title: "ACM-ICPC 国际大学生程序设计竞赛（ICPC Asia）2025",
    category: "编程 / 算法",
    level: "A",
    organizer: "ICPC Foundation",
    location: "亚洲各分区站点",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://icpc.global/",
    tags: ["算法", "团队程序设计", "ICPC"],
    note: "各站点报名与赛程独立，请参考官网赛历与各赛区通知。"
  },
  {
    id: "asc-2026",
    title: "ASC 世界大学生超级计算机竞赛 2026",
    category: "超算 / HPC",
    level: "A",
    organizer: "ASC组委会",
    location: "初赛线上，决赛线下",
    registrationOpen: "2025-11-01T10:00:00+08:00",
    registrationDeadline: "2026-01-12T23:59:59+08:00",
    eventStart: "2026-04-08T09:00:00+08:00",
    website: "https://www.asc-events.org/",
    tags: ["HPC", "集群", "性能优化"],
    note: "全球高校队伍组建超算集群，完成高性能计算与AI负载优化。（2025-12-07核对：域名访问暂超时，需后续重试确认官方公告）"
  },
  {
    id: "energy-saving-2025",
    title: "全国大学生节能减排社会实践与科技竞赛 2025",
    category: "可持续 / 社会责任",
    level: "B",
    organizer: "教育部高教司",
    location: "校内初审 + 线下终审",
    registrationOpen: "2025-01-15T09:00:00+08:00",
    registrationDeadline: "2025-05-20T18:00:00+08:00",
    eventStart: "2025-07-18T09:00:00+08:00",
    website: "https://ncrepc.csee.org.cn/",
    tags: ["绿色", "工程", "社会实践"],
    note: "关注绿色低碳、能源科技与社会实践成果，强调实证与落地。（2025-12-07核对：原域名解析失败，官网链接待核实）"
  },
  {
    id: "service-outsourcing-2025",
    title: "中国大学生服务外包创新创业大赛 2025",
    category: "软件 / 创新创业",
    level: "B",
    organizer: "教育部等",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.fwwb.org.cn/",
    tags: ["服务外包", "创新创业", "软件工程"],
    note: "IT 外包与解决方案方向，赛事分校/省/国赛，请关注官网时间表。（2025-12-07核对：官网暂时无法连接，稍后重试）"
  },
  {
    id: "robomaster-2025",
    title: "全国大学生机器人大赛 RoboMaster 2025",
    category: "机器人 / 工程",
    level: "B",
    organizer: "DJI RoboMaster",
    location: "区域赛 + 全国总决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.robomaster.com/zh-CN",
    tags: ["机器人", "机电", "视觉"],
    note: "包含机甲大师赛等赛道，报名与分站赛时间以官网公告为准。（2025-12-07核对：官网正常，2025赛程待发布）"
  },
  {
    id: "cnsoftbei-2025",
    title: "“中国软件杯”大学生软件设计大赛 2025",
    category: "软件 / 编程",
    level: "B",
    organizer: "工业和信息化部",
    location: "全国赛题，线上提交+线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.cnsoftbei.com/",
    tags: ["软件设计", "算法", "应用开发"],
    note: "每年公布若干企业赛题，预赛线上，决赛线下路演答辩。（2025-12-07核对：域名返回 444，需后续重试/换镜像域名）"
  },
  {
    id: "huawei-ict-2025",
    title: "华为 ICT 大赛 2025",
    category: "网络 / ICT",
    level: "B",
    organizer: "华为 ICT Academy",
    location: "校级选拔 + 省赛 + 国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://e.huawei.com/cn/talent",
    tags: ["网络", "云", "ICT"],
    note: "含网络、云服务、计算等赛道，报名与考试节点以学院平台公告为准。（2025-12-07核对：官网 301 正常，赛程待平台发布）"
  },
  {
    id: "ican-2025",
    title: "iCAN 国际大学生创新创业大赛 2025",
    category: "硬件 / 创新",
    level: "B",
    organizer: "iCAN 国际联盟",
    location: "校/省赛 + 国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.ican-contest.org/",
    tags: ["硬件创客", "物联网", "创新创业"],
    note: "强调硬件创客与商业化路演，时间安排以各省站通知为准。（2025-12-07核对：HTTP 正常，HTTPS 连接失败，2025赛程待发布）"
  },
  {
    id: "medical-skills-2025",
    title: "中国大学生医学技术技能大赛 2025",
    category: "医学 / 临床技能",
    level: "B",
    organizer: "教育部医政司等",
    location: "院赛-区域赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.nmrc.com.cn/",
    tags: ["医学", "临床技能", "护理"],
    note: "各专业赛道分区选拔，年度具体报名时间以当年章程为准。"
  },
  {
    id: "mech-innovation-2025",
    title: "全国大学生机械创新设计大赛 2025",
    category: "机械 / 设计",
    level: "B",
    organizer: "教育部高教司",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.mein.org.cn/",
    tags: ["机械设计", "创意", "实物"],
    note: "每两年一届，题目与赛程以官网公告为准。（2025-12-07核对：域名无法解析，官网待补充）"
  },
  {
    id: "struct-design-2025",
    title: "全国大学生结构设计竞赛 2025",
    category: "土木 / 结构",
    level: "B",
    organizer: "教育部高教司",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.nuccdc.org/",
    tags: ["土木", "结构设计", "模型竞赛"],
    note: "题目、材料与赛程每年更新，详见官网与各赛区通知。（2025-12-07核对：域名无法解析，官网待补充）"
  },
  {
    id: "ad-arts-2025",
    title: "全国大学生广告艺术大赛 2025",
    category: "设计 / 传媒",
    level: "B",
    organizer: "教育部高教司",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.sun-ada.net/",
    tags: ["广告", "平面", "短视频", "交互"],
    note: "各命题与赛程由主办方发布，省赛时间不一，请关注官网。（2025-12-07核对：官网正常，2025命题待发布）"
  },
  {
    id: "smart-car-2025",
    title: "全国大学生智能汽车竞赛 2025",
    category: "机器人 / 车模",
    level: "B",
    organizer: "中国自动化学会",
    location: "分赛区现场",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.ncesc.cn/",
    tags: ["智能车", "控制", "硬件"],
    note: "包含多赛道（电磁/视觉/越野等），报名与分区赛时间以官网为准。"
  },
  {
    id: "ecommerce-ccc-2025",
    title: "全国大学生电子商务“创新、创意及创业”挑战赛 2025",
    category: "电商 / 创业",
    level: "B",
    organizer: "高等学校电子商务专业教学指导委员会",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.chinac4e.com/",
    tags: ["电商", "商业计划", "创新创业"],
    note: "常见简称“三创赛”，省赛时间不一，需关注各赛区通知。（2025-12-07核对：域名无法解析，官网待补充）"
  },
  {
    id: "c4-engineering-2025",
    title: "中国大学生工程实践与创新能力大赛 2025",
    category: "工程 / 实践",
    level: "B",
    organizer: "教育部高教司",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://gjjxds.moe.edu.cn/",
    tags: ["工程实践", "综合设计"],
    note: "包含智能+、人工智能等赛道，报名与赛程按官网章程执行。（2025-12-07核对：域名无法解析，官网待补充）"
  },
  {
    id: "logistics-design-2025",
    title: "全国大学生物流设计大赛 2025",
    category: "物流 / 管理",
    level: "B",
    organizer: "教育部高教司",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.colsc.org/",
    tags: ["物流", "供应链", "运营"],
    note: "赛题聚焦物流规划与运营管理，具体时间以各省赛公告为准。（2025-12-07核对：colsc.org 可访问，2025赛程待发布）"
  },
  {
    id: "waiyan-english-2025",
    title: "外研社全国大学生英语系列赛 2025",
    category: "语言 / 英语",
    level: "B",
    organizer: "外语教学与研究出版社",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://ucc.fltrp.com/",
    tags: ["英语", "演讲", "辩论", "写作", "阅读"],
    note: "含演讲、辩论、写作、阅读多个赛项，报名节点以官网通知为准。（2025-12-07核对：官网正常，赛程待发布）"
  },
  {
    id: "huacan-award-2025",
    title: "两岸新锐设计竞赛·华灿奖 2025",
    category: "设计 / 创新",
    level: "B",
    organizer: "华灿奖组委会",
    location: "作品提交 + 线下终评",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.huacan.com.cn/",
    tags: ["设计", "跨域", "创新"],
    note: "跨地区设计作品竞赛，官网及年度章程待补充。"
  },
  {
    id: "innovation-training-2025",
    title: "全国大学生创新创业训练计划年会展示 2025",
    category: "创新创业 / 综合",
    level: "B",
    organizer: "教育部高教司",
    location: "线下展示",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["创新创业", "项目展示"],
    note: "依托国创计划的优秀项目展示，时间按教育部通知执行。"
  },
  {
    id: "chem-design-2025",
    title: "全国大学生化工设计竞赛 2025",
    category: "化工 / 工程",
    level: "B",
    organizer: "教育部化工类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.ccicedu.com/",
    tags: ["化工", "工程设计"],
    note: "经典化工流程设计赛事，题目与赛程按官网发布。"
  },
  {
    id: "market-research-2025",
    title: "全国大学生市场调查与分析大赛 2025",
    category: "经管 / 调研",
    level: "B",
    organizer: "中国商业统计学会",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["市场调查", "统计", "问卷"],
    note: "以问卷与数据分析为主，省赛时间不一，官网链接待补充。"
  },
  {
    id: "siemens-cup-2025",
    title: "“西门子杯”中国智能制造挑战赛 2025",
    category: "智能制造 / 自动化",
    level: "B",
    organizer: "教育部自动化类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.siemenscup.com.cn/",
    tags: ["自动化", "智能制造", "控制"],
    note: "工控与自动化方向赛事，赛程与题目以官网为准。"
  },
  {
    id: "ciscn-2025",
    title: "全国大学生信息安全竞赛 2025",
    category: "信息安全 / 网络",
    level: "B",
    organizer: "教育部网络空间安全教指委",
    location: "线上预赛 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.ciscn.cn/",
    tags: ["CTF", "信息安全", "网络攻防"],
    note: "信息安全与攻防赛题，正式报名及赛程参考官网公告。（2025-12-07核对：HTTP 正常，赛程待发布）"
  },
  {
    id: "baidu-star-2025",
    title: "百度之星·程序设计大赛 2025",
    category: "编程 / 算法",
    level: "B",
    organizer: "百度",
    location: "线上资格赛 + 线下总决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://star.baidu.com/",
    tags: ["算法", "编程竞赛"],
    note: "个人算法赛，历年有资格赛与决赛，时间以官网为准。"
  },
  {
    id: "21st-english-2025",
    title: "“21世纪杯”全国英语演讲比赛 2025",
    category: "语言 / 英语",
    level: "B",
    organizer: "中国日报社",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.i21st.cn/",
    tags: ["英语", "演讲", "表达"],
    note: "权威英语演讲赛事，报名与赛程按官网与各赛区通知执行。"
  },
  {
    id: "3ddl-2025",
    title: "全国三维数字化创新设计大赛 2025",
    category: "设计 / 三维",
    level: "B",
    organizer: "教育部高教司",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "https://www.3ddl.net/",
    tags: ["三维建模", "数字化设计"],
    note: "三维建模与数字化设计赛事，年度赛程以官网为准。（2025-12-07核对：官网正常，赛程待发布）"
  },
  {
    id: "drawing-modeling-2025",
    title: "全国大学生先进成图技术与产品信息建模创新大赛 2025",
    category: "工程 / 成图",
    level: "B",
    organizer: "教育部工程图学类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["成图", "CAD", "建模"],
    note: "工程图与产品建模类赛事，官方链接待补充。"
  },
  {
    id: "milan-design-week-2025",
    title: "米兰设计周—中国高校设计学科师生优秀作品展 2025",
    category: "设计 / 展览",
    level: "B",
    organizer: "米兰设计周中国高校展组委会",
    location: "作品征集 + 展示",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["设计", "作品展"],
    note: "面向高校设计作品征集，年度征集与展期待官方发布。"
  },
  {
    id: "geology-skills-2025",
    title: "全国大学生地质技能竞赛 2025",
    category: "地质 / 野外",
    level: "B",
    organizer: "教育部地质类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["地质", "测绘", "实操"],
    note: "野外与室内地质技能比拼，官网及时间待补充。"
  },
  {
    id: "opto-design-2025",
    title: "全国大学生光电设计竞赛 2025",
    category: "光电 / 电子",
    level: "B",
    organizer: "教育部光电信息类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["光电", "电子设计"],
    note: "光电器件与系统设计竞赛，官网待补充。"
  },
  {
    id: "ic-innovation-2025",
    title: "全国大学生集成电路创新创业大赛 2025",
    category: "IC / 芯片",
    level: "B",
    organizer: "教育部电子信息类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["集成电路", "芯片设计"],
    note: "IC 设计与应用方向赛事，官方通道待补充。"
  },
  {
    id: "metallography-2025",
    title: "全国大学生金相技能大赛 2025",
    category: "材料 / 金相",
    level: "B",
    organizer: "教育部材料类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["材料", "金相"],
    note: "金相制样与识别技能竞赛，官网与时间待补充。"
  },
  {
    id: "future-designer-2025",
    title: "未来设计师·全国高校数字艺术设计大赛 2025",
    category: "设计 / 数字艺术",
    level: "B",
    organizer: "未来设计师组委会",
    location: "作品征集 + 省赛/国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["数字艺术", "视觉", "交互"],
    note: "数字艺术与交互作品竞赛，官网待补充。"
  },
  {
    id: "zhoupeiyuan-2025",
    title: "全国周培源大学生力学竞赛 2025",
    category: "力学 / 理论",
    level: "B",
    organizer: "中国力学学会",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["力学", "竞赛"],
    note: "经典力学竞赛，考试与实验赛道，时间待补充。（2025-12-07核对：官网未找到可用域名）"
  },
  {
    id: "mech-creativity-2025",
    title: "中国大学生机械工程创新创意大赛 2025",
    category: "机械 / 创新",
    level: "B",
    organizer: "教育部机械类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["机械", "创新设计"],
    note: "机械工程创新方案竞赛，官网待补充。"
  },
  {
    id: "robocup-china-2025",
    title: "中国机器人大赛暨 RoboCup 机器人世界杯中国赛 2025",
    category: "机器人 / AI",
    level: "B",
    organizer: "中国自动化学会",
    location: "分赛区 + 总决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["机器人", "RoboCup"],
    note: "RoboCup 中国赛，官网链接待补充。（2025-12-07核对：常见域名无法解析）"
  },
  {
    id: "us-china-maker-2025",
    title: "中美青年创客大赛 2025",
    category: "创客 / 创新",
    level: "B",
    organizer: "教育部等",
    location: "区域站 + 国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["创客", "硬件", "创新"],
    note: "跨国创客赛事，报名与站点时间待补充。"
  },
  {
    id: "raicom-2025",
    title: "睿抗机器人开发者大赛（RAICOM）2025",
    category: "机器人 / AI",
    level: "B",
    organizer: "RAICOM 组委会",
    location: "线上 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["机器人", "算法"],
    note: "机器人算法与实战开发赛事，官网待补充。"
  },
  {
    id: "datang-ict-2025",
    title: "“大唐杯”全国大学生新一代信息通信技术大赛 2025",
    category: "通信 / ICT",
    level: "B",
    organizer: "大唐电信",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["通信", "5G", "ICT"],
    note: "信息通信技术与5G方向赛事，官网待补充。"
  },
  {
    id: "embedded-chip-2025",
    title: "全国大学生嵌入式芯片与系统设计竞赛 2025",
    category: "嵌入式 / 硬件",
    level: "B",
    organizer: "教育部电子信息类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["嵌入式", "芯片", "系统设计"],
    note: "嵌入式系统与芯片应用设计，官网待补充。"
  },
  {
    id: "life-science-2025",
    title: "全国大学生生命科学竞赛（CULSC）2025",
    category: "生命科学 / 生物",
    level: "B",
    organizer: "教育部生命科学类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["生命科学", "实验", "创新"],
    note: "生命科学创新实验与项目竞赛，官网待补充。"
  },
  {
    id: "physics-lab-2025",
    title: "全国大学生物理实验竞赛 2025",
    category: "物理 / 实验",
    level: "B",
    organizer: "教育部物理学类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["物理", "实验"],
    note: "物理实验设计与测量竞赛，官网待补充。"
  },
  {
    id: "bim-graduation-2025",
    title: "全国高校 BIM 毕业设计创新大赛 2025",
    category: "建筑 / BIM",
    level: "B",
    organizer: "相关行业组织",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["BIM", "建筑设计"],
    note: "BIM 应用与毕业设计创新竞赛，官网待补充。"
  },
  {
    id: "business-elite-2025",
    title: "全国高校商业精英挑战赛 2025",
    category: "经管 / 商业",
    level: "B",
    organizer: "中国国际贸易促进委员会商业行业委员会",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["商业", "运营", "案例"],
    note: "经管案例与运营模拟类赛事，官网待补充。"
  },
  {
    id: "xuechuang-cup-2025",
    title: "“学创杯”全国大学生创业综合模拟大赛 2025",
    category: "创新创业 / 模拟",
    level: "B",
    organizer: "高等学校创新方法教学指导委员会",
    location: "线上模拟 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["创业模拟", "经营"],
    note: "创业与经营模拟赛事，官网待补充。"
  },
  {
    id: "robot-creativity-2025",
    title: "中国高校智能机器人创意大赛 2025",
    category: "机器人 / 创意",
    level: "B",
    organizer: "相关行业协会",
    location: "作品提交 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["机器人", "创意"],
    note: "高校机器人创意作品赛事，官网待补充。"
  },
  {
    id: "good-idea-2025",
    title: "中国好创意暨全国数字艺术设计大赛 2025",
    category: "设计 / 数字艺术",
    level: "B",
    organizer: "中国传媒大学等",
    location: "作品提交 + 线下终评",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["数字艺术", "创意"],
    note: "数字艺术创意作品征集赛事，官网待补充。"
  },
  {
    id: "robot-ai-2025",
    title: "中国机器人及人工智能大赛 2025",
    category: "机器人 / AI",
    level: "B",
    organizer: "相关协会",
    location: "线上预赛 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["机器人", "人工智能"],
    note: "机器人与AI综合赛事，官网待补充。"
  },
  {
    id: "industrial-design-2025",
    title: "全国大学生工业设计大赛 2025",
    category: "设计 / 工业",
    level: "B",
    organizer: "教育部高教司",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["工业设计", "产品"],
    note: "工业设计方向赛事，官网待补充。"
  },
  {
    id: "water-conservancy-2025",
    title: "全国大学生水利创新设计大赛 2025",
    category: "水利 / 工程",
    level: "B",
    organizer: "教育部水利类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["水利", "工程设计"],
    note: "水利工程与创新设计赛事，官网待补充。"
  },
  {
    id: "chem-experiment-2025",
    title: "全国大学生化工实验大赛 2025",
    category: "化工 / 实验",
    level: "B",
    organizer: "教育部化工类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["化工", "实验"],
    note: "化工实验操作与安全竞赛，官网待补充。"
  },
  {
    id: "chem-innovation-lab-2025",
    title: "全国大学生化学实验创新设计大赛 2025",
    category: "化学 / 实验",
    level: "B",
    organizer: "教育部化学类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["化学", "实验设计"],
    note: "化学实验创新与设计竞赛，官网待补充。"
  },
  {
    id: "computer-systems-2025",
    title: "全国大学生计算机系统能力大赛 2025",
    category: "计算机 / 系统",
    level: "B",
    organizer: "计算机类教指委",
    location: "线上预赛 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["系统能力", "OS", "编译"],
    note: "操作系统、编译、体系结构等赛道，官网待补充。"
  },
  {
    id: "garden-design-2025",
    title: "全国大学生花园设计建造竞赛 2025",
    category: "园林 / 设计",
    level: "B",
    organizer: "园林相关机构",
    location: "现场建造",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["园林", "景观"],
    note: "园林景观设计与现场建造竞赛，官网待补充。"
  },
  {
    id: "iot-design-2025",
    title: "全国大学生物联网设计竞赛 2025",
    category: "物联网 / 嵌入式",
    level: "B",
    organizer: "教育部电子信息类教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["物联网", "嵌入式"],
    note: "物联网方案设计竞赛，官网待补充。"
  },
  {
    id: "security-defense-2025",
    title: "全国大学生信息安全与对抗技术竞赛 2025",
    category: "信息安全 / 对抗",
    level: "B",
    organizer: "网络安全相关机构",
    location: "线上预赛 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["安全对抗", "网络攻防"],
    note: "信息安全对抗赛，官网待补充。"
  },
  {
    id: "surveying-2025",
    title: "全国大学生测绘学科创新创业智能大赛 2025",
    category: "测绘 / 智能",
    level: "B",
    organizer: "测绘相关教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["测绘", "智能"],
    note: "测绘与智能应用竞赛，官网待补充。"
  },
  {
    id: "statistics-modeling-2025",
    title: "全国大学生统计建模大赛 2025",
    category: "统计 / 建模",
    level: "B",
    organizer: "中国统计学会",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["统计", "建模"],
    note: "统计建模竞赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "energy-econ-2025",
    title: "全国大学生能源经济学术创意大赛 2025",
    category: "能源 / 经管",
    level: "B",
    organizer: "能源经济相关学会",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["能源经济", "案例"],
    note: "能源经济与案例竞赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "basic-medicine-2025",
    title: "全国大学生基础医学创新研究暨实验设计论坛（大赛）2025",
    category: "医学 / 基础",
    level: "B",
    organizer: "医学相关教指委",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["基础医学", "实验设计"],
    note: "基础医学实验设计与研究竞赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "digital-media-tech-2025",
    title: "全国大学生数字媒体科技作品及创意竞赛 2025",
    category: "数媒 / 科技",
    level: "B",
    organizer: "数字媒体相关机构",
    location: "作品提交 + 线下终评",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["数字媒体", "创意"],
    note: "数字媒体科技作品竞赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "tax-case-2025",
    title: "全国本科院校税收风险管控案例大赛 2025",
    category: "财税 / 案例",
    level: "B",
    organizer: "财经相关机构",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["税务", "案例分析"],
    note: "税收风险管控案例竞赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "enterprise-sim-2025",
    title: "全国企业竞争模拟大赛 2025",
    category: "经管 / 模拟",
    level: "B",
    organizer: "经管相关机构",
    location: "线上模拟 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["经营模拟", "管理"],
    note: "企业经营模拟赛事，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "sandtable-2025",
    title: "全国高等院校数智化企业经营沙盘大赛 2025",
    category: "经管 / 沙盘",
    level: "B",
    organizer: "经管相关机构",
    location: "线上模拟 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["沙盘", "经营"],
    note: "企业经营沙盘模拟赛事，官网待补充。"
  },
  {
    id: "digital-building-2025",
    title: "全国数字建筑创新应用大赛 2025",
    category: "建筑 / 数字化",
    level: "B",
    organizer: "建筑信息化相关机构",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["数字建筑", "BIM"],
    note: "数字建筑与BIM应用赛事，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "global-ai-elite-2025",
    title: "全球校园人工智能算法精英大赛 2025",
    category: "AI / 算法",
    level: "B",
    organizer: "相关企业或学会",
    location: "线上赛 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["AI", "算法"],
    note: "校园 AI 算法赛事，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "smart-agri-2025",
    title: "国际大学生智能农业装备创新大赛 2025",
    category: "农业 / 智能装备",
    level: "B",
    organizer: "农业工程相关机构",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["农业", "智能装备"],
    note: "智能农机与农业装备创新竞赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "accounting-skill-2025",
    title: "“科云杯”全国大学生财会职业能力大赛 2025",
    category: "财会 / 职业能力",
    level: "B",
    organizer: "用友新道等",
    location: "线上预赛 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["财会", "实务"],
    note: "财会实务与信息化能力赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "vocational-skill-2025",
    title: "全国职业院校技能大赛 2025",
    category: "职业技能",
    level: "B",
    organizer: "教育部等",
    location: "省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.worldskillschina.org/",
    tags: ["职业技能"],
    note: "职教领域技能大赛，官网待补充。（2025-12-07核对：worldskillschina.org 404，需后续确认正式入口）"
  },
  {
    id: "robomelee-2025",
    title: "全国大学生机器人大赛 RoboTac 2025",
    category: "机器人 / 对抗",
    level: "B",
    organizer: "教育部等",
    location: "分赛区 + 总决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["机器人", "对抗"],
    note: "机器人对抗赛 RoboTac，官网待补充。"
  },
  {
    id: "world-skills-2025",
    title: "世界技能大赛 2025（中国选拔/参与）",
    category: "职业技能",
    level: "B",
    organizer: "人社部等",
    location: "选拔赛 + 国际赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "http://www.worldskillschina.org/",
    tags: ["职业技能", "世赛"],
    note: "世界技能大赛中国队选拔相关，赛程按官方发布。（2025-12-07核对：worldskillschina.org 404，需后续确认正式入口）"
  },
  {
    id: "brics-skill-2025",
    title: "一带一路暨金砖国家技能发展与技术创新大赛 2025",
    category: "技能 / 创新",
    level: "B",
    organizer: "相关机构",
    location: "多赛道",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["技能", "创新"],
    note: "技能与技术创新跨国赛事，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "moti-cup-2025",
    title: "码蹄杯全国职业院校程序设计大赛 2025",
    category: "编程 / 职教",
    level: "B",
    organizer: "码蹄集等",
    location: "线上预赛 + 线下决赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["编程", "职教"],
    note: "职教方向程序设计赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "new-liberal-arts-2025",
    title: "大学生新文科实践创新大赛 2025",
    category: "新文科 / 综合",
    level: "B",
    organizer: "新文科相关机构",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["新文科", "实践"],
    note: "新文科实践与创新项目赛事，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "moot-court-icc-2025",
    title: "国际刑事法院模拟法庭竞赛 2025",
    category: "法学 / 模拟法庭",
    level: "B",
    organizer: "法学相关机构",
    location: "校赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["法学", "模拟法庭"],
    note: "ICC 模拟法庭赛事，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "art-expo-2025",
    title: "全国大学生艺术展演 2025",
    category: "艺术 / 表演",
    level: "B",
    organizer: "教育部",
    location: "省展演 + 国展演",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["艺术", "表演"],
    note: "艺术展演活动，时间以教育部通知为准。（2025-12-07核对：未找到独立官网，关注教育部通知）"
  },
  {
    id: "hunan-music-2025",
    title: "湖南省本科院校音乐舞蹈专业独唱、独奏、独舞比赛 2025",
    category: "艺术 / 音乐舞蹈",
    level: "B",
    organizer: "湖南省相关部门",
    location: "省级赛事",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["音乐", "舞蹈"],
    note: "省级音乐舞蹈专业赛事，时间以省教育部门通知为准。（2025-12-07核对：未找到独立官网）"
  },
  {
    id: "constitution-talk-2025",
    title: "学宪法讲宪法 2025",
    category: "法学 / 普法",
    level: "B",
    organizer: "教育部",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["普法", "演讲"],
    note: "普法主题演讲与知识竞赛，官网待补充。（2025-12-07核对：未找到独立官网，关注教育部通知）"
  },
  {
    id: "gcross-2025",
    title: "GCROSS 全球创意奖 2025",
    category: "创意 / 设计",
    level: "B",
    organizer: "GCROSS 组委会",
    location: "作品征集 + 终评",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["创意", "设计"],
    note: "国际创意作品征集，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "supply-chain-2025",
    title: "全国供应链大赛 2025",
    category: "供应链 / 管理",
    level: "B",
    organizer: "供应链相关机构",
    location: "校赛-省赛-国赛",
    registrationOpen: null,
    registrationDeadline: null,
    eventStart: null,
    website: "",
    tags: ["供应链", "运营"],
    note: "供应链规划与运营竞赛，官网待补充。（2025-12-07核对：未找到可靠官网）"
  },
  {
    id: "cucdc-2025",
    title: "中国大学生计算机设计大赛 2025",
    category: "设计 / 数媒",
    level: "B",
    organizer: "全国计算机教育研究会",
    location: "省赛遴选，国赛线上线下结合",
    registrationOpen: "2025-02-10T09:00:00+08:00",
    registrationDeadline: "2025-04-05T23:59:59+08:00",
    eventStart: "2025-06-28T09:00:00+08:00",
    website: "https://www.cucdc.org/",
    tags: ["数媒", "交互", "应用开发"],
    note: "涵盖数媒设计、人工智能、大数据、移动应用等多个命题赛道。"
  },
  {
    id: "neccs-2025",
    title: "全国大学生英语竞赛（NECCS）2025",
    category: "语言 / 综合素质",
    level: "C",
    organizer: "全国高等学校大学外语教学研究会",
    location: "校初赛、省复赛、国决赛",
    registrationOpen: "2024-12-15T09:00:00+08:00",
    registrationDeadline: "2025-03-25T18:00:00+08:00",
    eventStart: "2025-05-17T09:00:00+08:00",
    website: "https://www.chinaneccs.cn/",
    tags: ["语言", "综合", "听说读写"],
    note: "分A/B/C/D类，考查学术英语与综合应用能力。"
  }
];

const whitelistBase = [
  {"title": "中国国际“互联网+”大学生创新创业大赛（2024年更名为：中国国际大学生创新大赛）", "level": "A", "note": ""},
  {"title": "“挑战杯”全国大学生课外学术科技作品竞赛", "level": "A", "note": ""},
  {"title": "“挑战杯”中国大学生创业计划大赛", "level": "A", "note": ""},
  {"title": "ACM-ICPC国际大学生程序设计竞赛", "level": "A", "note": ""},
  {"title": "全国大学生数学建模竞赛", "level": "A", "note": ""},
  {"title": "全国大学生电子设计竞赛", "level": "A", "note": ""},
  {"title": "中国大学生医学技术技能大赛", "level": "B", "note": ""},
  {"title": "全国大学生机械创新设计大赛", "level": "B", "note": ""},
  {"title": "全国大学生结构设计竞赛", "level": "B", "note": ""},
  {"title": "全国大学生广告艺术大赛", "level": "B", "note": ""},
  {"title": "全国大学生智能汽车竞赛", "level": "B", "note": ""},
  {"title": "全国大学生电子商务“创新、创意及创业”挑战赛", "level": "B", "note": ""},
  {"title": "中国大学生工程实践与创新能力大赛", "level": "B", "note": ""},
  {"title": "全国大学生物流设计大赛", "level": "B", "note": ""},
  {"title": "外研社全国大学生英语系列赛-英语演讲、英语辩论、英语写作、英语阅读", "level": "B", "note": ""},
  {"title": "两岸新锐设计竞赛·华灿奖", "level": "B", "note": ""},
  {"title": "全国大学生创新创业训练计划年会展示", "level": "B", "note": ""},
  {"title": "全国大学生化工设计竞赛", "level": "B", "note": ""},
  {"title": "全国大学生机器人大赛-RoboMaster、RoboCon", "level": "B", "note": ""},
  {"title": "全国大学生市场调查与分析大赛", "level": "B", "note": ""},
  {"title": "全国大学生先进成图技术与产品信息建模创新大赛", "level": "B", "note": ""},
  {"title": "全国三维数字化创新设计大赛", "level": "B", "note": ""},
  {"title": "“西门子杯”中国智能制造挑战赛", "level": "B", "note": ""},
  {"title": "中国大学生服务外包创新创业大赛", "level": "B", "note": ""},
  {"title": "中国大学生计算机设计大赛", "level": "B", "note": ""},
  {"title": "中国高校计算机大赛-大数据**赛、团体程序设计天梯赛、移动应用创新赛、网络技术挑战赛", "level": "B", "note": ""},
  {"title": "蓝桥杯全国软件和信息技术专业人才大赛", "level": "B", "note": ""},
  {"title": "米兰设计周--中国高校设计学科师生优秀作品展", "level": "B", "note": ""},
  {"title": "全国大学生地质技能竞赛", "level": "B", "note": ""},
  {"title": "全国大学生光电设计竞赛", "level": "B", "note": ""},
  {"title": "全国大学生集成电路创新创业大赛", "level": "B", "note": ""},
  {"title": "全国大学生金相技能大赛", "level": "B", "note": ""},
  {"title": "全国大学生信息安全竞赛", "level": "B", "note": ""},
  {"title": "未来设计师·全国高校数字艺术设计大赛", "level": "B", "note": ""},
  {"title": "全国周培源大学生力学竞赛", "level": "B", "note": ""},
  {"title": "中国大学生机械工程创新创意大赛", "level": "B", "note": ""},
  {"title": "中国机器人大赛暨RoboCup机器人世界杯中国赛", "level": "B", "note": ""},
  {"title": "“中国软件杯”大学生软件设计大赛", "level": "B", "note": ""},
  {"title": "中美青年创客大赛", "level": "B", "note": ""},
  {"title": "睿抗机器人开发者大赛（RAICOM）", "level": "B", "note": ""},
  {"title": "“大唐杯”全国大学生新一代信息通信技术大赛", "level": "B", "note": ""},
  {"title": "华为ICT大赛", "level": "B", "note": ""},
  {"title": "全国大学生嵌入式芯片与系统设计竞赛", "level": "B", "note": ""},
  {"title": "全国大学生生命科学竞赛（CULSC)", "level": "B", "note": ""},
  {"title": "全国大学生物理实验竞赛", "level": "B", "note": ""},
  {"title": "全国高校BIM毕业设计创新大赛官网", "level": "B", "note": ""},
  {"title": "全国高校商业精英挑战赛", "level": "B", "note": ""},
  {"title": "“学创杯”全国大学生创业综合模拟大赛", "level": "B", "note": ""},
  {"title": "中国高校智能机器人创意大赛", "level": "B", "note": ""},
  {"title": "中国好创意暨全国数字艺术设计大赛", "level": "B", "note": ""},
  {"title": "中国机器人及人工智能大赛", "level": "B", "note": ""},
  {"title": "全国大学生节能减排社会实践与科技竞赛", "level": "B", "note": ""},
  {"title": "“21世纪杯”全国英语演讲比赛", "level": "B", "note": ""},
  {"title": "iCAN大学生创新创业大赛", "level": "B", "note": ""},
  {"title": "“工行杯”全国大学生金融科技创新大赛", "level": "B", "note": ""},
  {"title": "中华经典诵写讲大赛", "level": "B", "note": ""},
  {"title": "“外教社杯”全国高校学生跨文化能力大赛", "level": "B", "note": ""},
  {"title": "百度之星·程序设计大赛", "level": "B", "note": ""},
  {"title": "全国大学生工业设计大赛", "level": "B", "note": "教育部认可的全国大学生学科竞赛名单"},
  {"title": "全国大学生水利创新设计大赛", "level": "B", "note": ""},
  {"title": "全国大学生化工实验大赛", "level": "B", "note": ""},
  {"title": "全国大学生化学实验创新设计大赛", "level": "B", "note": ""},
  {"title": "全国大学生计算机系统能力大赛", "level": "B", "note": ""},
  {"title": "全国大学生花园设计建造竞赛", "level": "B", "note": ""},
  {"title": "全国大学生物联网设计竞赛", "level": "B", "note": ""},
  {"title": "全国大学生信息安全与对抗技术竞赛", "level": "B", "note": ""},
  {"title": "全国大学生测绘学科创新创业智能大赛", "level": "B", "note": ""},
  {"title": "全国大学生统计建模大赛", "level": "B", "note": ""},
  {"title": "全国大学生能源经济学术创意大赛", "level": "B", "note": ""},
  {"title": "全国大学生基础医学创新研究暨实验设计论坛（大赛）", "level": "B", "note": ""},
  {"title": "全国大学生数字媒体科技作品及创意竞赛", "level": "B", "note": ""},
  {"title": "全国本科院校税收风险管控案例大赛", "level": "B", "note": ""},
  {"title": "全国企业竞争模拟大赛", "level": "B", "note": ""},
  {"title": "全国高等院校数智化企业经营沙盘大赛", "level": "B", "note": ""},
  {"title": "全国数字建筑创新应用大赛", "level": "B", "note": ""},
  {"title": "全球校园人工智能算法精英大赛", "level": "B", "note": ""},
  {"title": "国际大学生智能农业装备创新大赛", "level": "B", "note": ""},
  {"title": "“科云杯”全国大学生财会职业能力大赛", "level": "B", "note": ""},
  {"title": "全国职业院校技能大赛", "level": "B", "note": ""},
  {"title": "全国大学生机器人大赛-RoboTac", "level": "B", "note": ""},
  {"title": "世界技能大赛", "level": "B", "note": "高职赛"},
  {"title": "世界技能大赛中国选拔赛", "level": "B", "note": "高职赛"},
  {"title": "一带一路暨金砖国家技能发展与技术创新大赛", "level": "B", "note": "高职赛（含本科赛"},
  {"title": "码蹄杯全国职业院校程序设计大赛", "level": "B", "note": "高职赛"},
  {"title": "大学生新文科实践创新大赛", "level": "B", "note": ""},
  {"title": "国际刑事法院模拟法庭竞赛", "level": "B", "note": ""},
  {"title": "全国大学生艺术展演", "level": "B", "note": ""},
  {"title": "湖南省本科院校音乐舞蹈专业独唱、独奏、独舞比赛", "level": "B", "note": ""},
  {"title": "学宪法讲宪法", "level": "B", "note": ""},
  {"title": "GCROSS全球创意奖", "level": "B", "note": ""},
  {"title": "全国供应链大赛", "level": "B", "note": ""}
];

const CATEGORY_BUCKETS = [
  { name: "算法 / 编程", keywords: ["算法", "编程", "软件", "ICPC", "程序设计", "CTF"] },
  { name: "硬件 / 工程", keywords: ["机械", "结构", "工程", "芯片", "嵌入式", "电子", "光电", "机器人", "智能车", "BIM", "水利", "测绘", "物联网", "能源", "沙盘"] },
  { name: "设计 / 艺术", keywords: ["设计", "艺术", "视觉", "三维", "工业设计", "广告", "作品展", "数媒", "数字艺术"] },
  { name: "经管 / 创业", keywords: ["商业", "创业", "创新创业", "电商", "供应链", "经营", "案例", "财会", "税务"] },
  { name: "AI / 数据", keywords: ["AI", "人工智能", "数据", "统计", "建模", "HPC", "算法精英"] },
  { name: "语言 / 人文", keywords: ["英语", "语言", "演讲", "辩论", "写作", "阅读", "法学", "宪法"] },
  { name: "学科综合", keywords: [] }
];

// 固定数据更新时间，如需修改直接改时间字符串
const FIXED_UPDATED_AT = "2025-12-07T12:00:00+08:00";

const competitions = buildCompetitions(detailedCompetitions, whitelistBase);

const state = {
  categories: new Set(),
  levels: new Set(),
  search: "",
  onlyOpen: false,
  sortBy: "rank"
};

const countdownRefs = new Map();
const levelClassMap = {
  A: "level-a",
  B: "level-b",
  C: "level-c",
  其他: "level-non",
  非CCF: "level-non"
};

document.addEventListener("DOMContentLoaded", () => {
  buildFilters();
  bindControls();
  renderList();
  setInterval(tick, 1000);
});

function buildCompetitions(detailed, whitelistList) {
  const map = new Map();

  whitelistList.forEach((entry, idx) => {
    const normalized = slugifyTitle(entry.title);
    const base = defaultCompetition({
      id: slugifyId(entry.title),
      title: entry.title,
      fromWhitelist: true,
      level: entry.level || "B",
      category: "未分类",
      organizer: "官方待更新",
      location: "待定",
      registrationOpen: null,
      registrationDeadline: null,
      eventStart: null,
      website: "",
      rank: idx + 1,
      tags: ["白名单"],
      note: entry.note || "教育部认定白名单赛事，等待补充报名时间和官网链接。"
    });
    map.set(normalized, base);
  });

  detailed.forEach((comp, idx) => {
    const normalized = slugifyTitle(comp.title);
    const existing = map.get(normalized);
    if (existing) {
      const mergedTags = Array.from(new Set([...(existing.tags || []), ...(comp.tags || [])]));
      map.set(
        normalized,
        defaultCompetition({
          ...existing,
          ...comp,
          tags: mergedTags,
          rank: existing.rank
        })
      );
    } else {
      map.set(
        normalized,
        defaultCompetition({
          ...comp,
          rank: whitelistList.length + idx + 1,
          tags: [...(comp.tags || [])]
        })
      );
    }
  });

  const categorized = Array.from(map.values()).map((comp) => {
    const category = classifyCategory(comp);
    return { ...comp, category };
  });

  return categorized.sort((a, b) => (a.rank || 0) - (b.rank || 0));
}

function defaultCompetition(comp) {
  const tags = comp.tags && comp.tags.length ? comp.tags : [];
  return {
    id: comp.id || slugifyId(comp.title),
    title: comp.title,
    level: comp.level || "B",
    category: comp.category || "未分类",
    organizer: comp.organizer || "待定",
    location: comp.location || "待定",
    registrationOpen: comp.registrationOpen || null,
    registrationDeadline: comp.registrationDeadline || null,
    eventStart: comp.eventStart || null,
    website: comp.website || "",
    tags,
    note: comp.note || "",
    fromWhitelist: comp.fromWhitelist || false,
    rank: comp.rank ?? Number.POSITIVE_INFINITY
  };
}

function slugifyId(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[（(].*?[)）]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function slugifyTitle(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[（(].*?[)）]/g, "")
    .replace(/\d+/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, "");
}

function dateOrNull(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isFinite(d.getTime()) ? d : null;
}

function buildFilters() {
  const categoryBox = document.getElementById("category-filters");
  const levelBox = document.getElementById("level-filters");
  const categories = [...new Set(competitions.map((c) => c.category))];
  const levels = [...new Set(competitions.map((c) => c.level))];

  categories.forEach((name) => {
    const chip = makeChip(name, "category");
    categoryBox.appendChild(chip);
  });

  levels.forEach((name) => {
    const chip = makeChip(name, "level");
    levelBox.appendChild(chip);
  });
}

function bindControls() {
  const search = document.getElementById("search");
  const onlyOpen = document.getElementById("only-open");
  const sort = document.getElementById("sort");
  const sideOpen = document.getElementById("side-open");
  const sideClose = document.getElementById("side-close");
  const sidePanel = document.getElementById("side-panel");
  const overlay = document.getElementById("overlay");
  const ctaSponsor = document.getElementById("cta-sponsor");
  const sponsorModal = document.getElementById("sponsor-modal");
  const sponsorClose = document.getElementById("sponsor-close");
  const modalOverlay = document.getElementById("modal-overlay");

  search.value = state.search;
  onlyOpen.checked = state.onlyOpen;
  if (sort) sort.value = state.sortBy;

  search.addEventListener("input", (e) => {
    state.search = e.target.value.trim().toLowerCase();
    renderList();
  });

  onlyOpen.addEventListener("change", (e) => {
    state.onlyOpen = e.target.checked;
    renderList();
  });

  if (sort) {
    sort.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderList();
    });
  }

  const openPanel = () => {
    if (sidePanel) sidePanel.classList.add("open");
    if (overlay) overlay.classList.add("show");
  };
  const closePanel = () => {
    if (sidePanel) sidePanel.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
  };

  if (sideOpen) sideOpen.addEventListener("click", openPanel);
  if (sideClose) sideClose.addEventListener("click", closePanel);
  if (overlay) overlay.addEventListener("click", closePanel);

  const openSponsor = () => {
    if (sponsorModal) sponsorModal.classList.add("open");
    if (modalOverlay) modalOverlay.classList.add("show");
  };
  const closeSponsor = () => {
    if (sponsorModal) sponsorModal.classList.remove("open");
    if (modalOverlay) modalOverlay.classList.remove("show");
  };

  if (ctaSponsor) ctaSponsor.addEventListener("click", openSponsor);
  if (sponsorClose) sponsorClose.addEventListener("click", closeSponsor);
  if (modalOverlay) modalOverlay.addEventListener("click", closeSponsor);
}

function makeChip(label, type) {
  const chip = document.createElement("button");
  chip.className = "chip";
  chip.textContent = label;
  chip.dataset.type = type;
  chip.dataset.value = label;
  chip.addEventListener("click", () => toggleChip(chip));
  return chip;
}

function toggleChip(chip) {
  const { type, value } = chip.dataset;
  const targetSet = type === "category" ? state.categories : state.levels;
  if (targetSet.has(value)) {
    targetSet.delete(value);
    chip.classList.remove("active");
  } else {
    targetSet.add(value);
    chip.classList.add("active");
  }
  renderList();
}

function renderList() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  countdownRefs.clear();

  const comparator = state.sortBy === "deadline" ? sortByDeadline : sortByRank;
  const filtered = competitions.filter(matchesFilters).sort(comparator);

  filtered.forEach((comp) => {
    const card = renderCard(comp);
    list.appendChild(card);
  });

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.style.color = "#9ca7c3";
    empty.textContent = "没有匹配的竞赛，试试清空筛选或修改关键词。";
    list.appendChild(empty);
  }

  updateMeta(filtered);
  updateNextDeadline(filtered);
  tick();
}

function matchesFilters(comp) {
  const now = new Date();
  const deadline = dateOrNull(comp.registrationDeadline);

  if (state.onlyOpen) {
    if (!deadline || deadline < now) return false;
  }
  if (state.categories.size && !state.categories.has(comp.category)) return false;
  if (state.levels.size && !state.levels.has(comp.level)) return false;
  if (state.search) {
    const haystack = `${comp.title} ${comp.note} ${(comp.tags || []).join(" ")}`.toLowerCase();
    if (!haystack.includes(state.search)) return false;
  }
  return true;
}

function sortByRank(a, b) {
  const ra = a.rank ?? Number.POSITIVE_INFINITY;
  const rb = b.rank ?? Number.POSITIVE_INFINITY;
  if (ra !== rb) return ra - rb;
  return a.title.localeCompare(b.title, "zh-CN");
}

function sortByDeadline(a, b) {
  const da = dateOrNull(a.registrationDeadline);
  const db = dateOrNull(b.registrationDeadline);
  const ta = da ? da.getTime() : Number.POSITIVE_INFINITY;
  const tb = db ? db.getTime() : Number.POSITIVE_INFINITY;
  if (ta !== tb) return ta - tb;
  return sortByRank(a, b);
}

function classifyCategory(comp) {
  const haystack = `${comp.category || ""} ${comp.title || ""} ${(comp.tags || []).join(" ")}`.toLowerCase();
  for (const bucket of CATEGORY_BUCKETS) {
    if (!bucket.keywords.length) continue;
    const hit = bucket.keywords.some((kw) => haystack.includes(kw.toLowerCase()));
    if (hit) return bucket.name;
  }
  return "学科综合";
}

function renderCard(comp) {
  const template = document.getElementById("card-template");
  const frag = template.content.cloneNode(true);
  const card = frag.querySelector(".card");
  const title = frag.querySelector(".card__title");
  const subtitle = frag.querySelector(".card__subtitle");
  const desc = frag.querySelector(".card__desc");
  const badgeRow = frag.querySelector(".badge-row");
  const meta = frag.querySelector(".card__meta");
  const status = frag.querySelector(".status");
  const deadlineClock = frag.querySelector(".deadline__clock");
  const deadlineDate = frag.querySelector(".deadline__date");
  const progressBar = frag.querySelector(".timeline__progress");
  const labels = frag.querySelector(".timeline__labels");
  const footerLink = frag.querySelector(".btn.link");

  const deadline = dateOrNull(comp.registrationDeadline);
  const openDate = dateOrNull(comp.registrationOpen);
  const eventDate = dateOrNull(comp.eventStart);
  const now = new Date();

  const hasDeadline = Boolean(deadline);
  const hasOpen = Boolean(openDate);
  const hasEvent = Boolean(eventDate);

  title.textContent = comp.title;
  subtitle.textContent = `${comp.organizer} · ${comp.location}`;
  desc.textContent = comp.note || "教育部白名单赛事，等待补充详细信息。";

  badgeRow.appendChild(makeBadge(`${comp.level || "B"} 类`, levelClassMap[comp.level] || "level-non"));
  badgeRow.appendChild(makeBadge(comp.category || "未分类"));
  (comp.tags || []).slice(0, 4).forEach((tag) => badgeRow.appendChild(makeBadge(tag)));

  meta.innerHTML = `
    <span>报名：${
      hasOpen && hasDeadline ? `${formatDate(openDate)} → ${formatDate(deadline)}` : "待公布"
    }</span>
    <span>开赛：${hasEvent ? formatDate(eventDate) : "待定"}</span>
    <span>官网：${comp.website ? comp.website.replace(/^https?:\/\//, "") : "待补充"}</span>
  `;

  footerLink.href = comp.website || "#";
  footerLink.textContent = comp.website ? "查看官网" : "待补充";
  footerLink.target = comp.website ? "_blank" : "_self";

  let statusText = "待更新";
  if (hasDeadline) {
    statusText = now > deadline ? "已截止" : now < openDate ? "未开报名" : "报名中";
  }
  status.textContent = statusText;
  if (!hasDeadline) status.classList.add("pending");
  if (hasDeadline && now > deadline) status.classList.add("closed");

  if (!hasDeadline) {
    deadlineClock.textContent = "待公布";
    deadlineDate.textContent = "等待官方时间";
  } else {
    const diff = deadline - now;
    deadlineClock.textContent = diff <= 0 ? "已截止" : formatCountdown(diff);
    deadlineDate.textContent = `${formatDate(deadline)} · ${formatTime(deadline)}`;
  }

  const labelsContent = [];
  if (hasOpen) labelsContent.push({ label: "报名开启", date: openDate });
  if (hasDeadline) labelsContent.push({ label: "截止", date: deadline });
  if (hasEvent) labelsContent.push({ label: "开赛", date: eventDate });

  labels.innerHTML = labelsContent.length
    ? labelsContent.map((item) => `<span>${item.label}<br>${formatShort(item.date)}</span>`).join("")
    : "<span>时间待更新</span>";

  if (hasDeadline && hasOpen) {
    const total = Math.max(deadline - openDate, 1);
    const progress = Math.min(Math.max((now - openDate) / total, 0), 1);
    progressBar.style.transform = `scaleX(${progress})`;
  } else {
    progressBar.style.transform = "scaleX(0)";
  }

  if (hasDeadline) {
    countdownRefs.set(comp.id, {
      deadline,
      openDate,
      progressEl: progressBar,
      clockEl: deadlineClock,
      statusEl: status,
      dateEl: deadlineDate
    });
  }

  return frag;
}

function makeBadge(text, extraClass = "") {
  const badge = document.createElement("span");
  badge.className = `badge ${extraClass}`.trim();
  badge.textContent = text;
  return badge;
}

function tick() {
  const now = new Date();
  countdownRefs.forEach((ref) => {
    const { deadline, openDate, progressEl, clockEl, statusEl, dateEl } = ref;
    const diff = deadline - now;
    const hasOpen = Boolean(openDate);
    const total = hasOpen ? Math.max(deadline - openDate, 1) : 1;
    const progress = hasOpen ? Math.min(Math.max((now - openDate) / total, 0), 1) : 0;

    progressEl.style.transform = `scaleX(${progress})`;

    if (diff <= 0) {
      clockEl.textContent = "已截止";
      statusEl.textContent = "已截止";
      statusEl.classList.add("closed");
      dateEl.textContent = `${formatDate(deadline)} · ${formatTime(deadline)}`;
      return;
    }

    clockEl.textContent = formatCountdown(diff);
    statusEl.textContent = openDate && now < openDate ? "未开报名" : "报名中";
    statusEl.classList.toggle("closed", false);
    dateEl.textContent = `${formatDate(deadline)} · ${formatTime(deadline)}`;
  });

  const metaUpdated = document.getElementById("meta-updated");
  if (metaUpdated) {
    metaUpdated.textContent = formatLastUpdated();
  }
}

function updateMeta(filtered) {
  const now = new Date();
  const withDeadline = competitions.filter((c) => dateOrNull(c.registrationDeadline));
  const open = withDeadline.filter((c) => dateOrNull(c.registrationDeadline) > now).length;
  const filteredOpen = filtered.filter((c) => dateOrNull(c.registrationDeadline) > now).length;

  document.getElementById("meta-total").textContent = `收录 ${competitions.length} 个白名单赛事`;
  document.getElementById("meta-open").textContent = `可报名 ${open} · 已筛选 ${filteredOpen}`;
  const updatedEl = document.getElementById("meta-updated");
  if (updatedEl) {
    updatedEl.textContent = formatLastUpdated();
  }
}

function updateNextDeadline(filtered) {
  const now = new Date();
  const pool = (filtered.length ? filtered : competitions).filter((c) => dateOrNull(c.registrationDeadline));
  const openList = pool.filter((c) => dateOrNull(c.registrationDeadline) > now);
  const next = openList.sort(
    (a, b) => dateOrNull(a.registrationDeadline) - dateOrNull(b.registrationDeadline)
  )[0];
  const box = document.getElementById("next-deadline");
  if (!next) {
    box.textContent = "所有收录赛事暂无可用截止时间";
    return;
  }
  const deadline = dateOrNull(next.registrationDeadline);
  const diff = deadline - now;
  box.innerHTML = `
    <div class="next-title">${next.title}</div>
    <div class="next-clock">${formatCountdown(diff)}</div>
    <div class="next-date">截止：${formatDate(deadline)} ${formatTime(deadline)}</div>
  `;
}

function formatCountdown(ms) {
  const totalSeconds = Math.max(Math.floor(ms / 1000), 0);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${days}天 ${hours}:${minutes}:${seconds}`;
}

function formatDate(date) {
  return date.toLocaleDateString("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function formatShort(date) {
  return date.toLocaleDateString("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric"
  });
}

function formatTime(date) {
  return date.toLocaleTimeString("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatLastUpdated() {
  const d = new Date(FIXED_UPDATED_AT);
  const validDate = Number.isFinite(d.getTime()) ? d : new Date();
  return `数据更新时间 ${formatDate(validDate)} ${formatTime(validDate)}`;
}
