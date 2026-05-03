export const glossary = {
  // Nav & UI
  "About Us": "关于我们",
  "About Yin Ling": "关于颖玲",
  "About Reiki": "关于灵气",
  "Reiki": "灵气",
  "What is Reiki": "什么是灵气",
  "Services": "疗程与课程",
  "Events": "活动",
  "Contact": "联系我们",
  "FAQ": "常见问题",
  "What to Expect": "疗程须知",

  // CTA buttons (GT mistranslates "Book" as 图书/书籍)
  "Book a Session": "预约疗程",
  "Book Session": "预约疗程",
  "Explore Services": "浏览疗程",
  "Register Interest": "登记报名",
  "Reserve Your Spot": "预留位置",
  "Get in Touch": "联系我们",
  "View Details": "查看详情",
  "View Event": "查看活动",

  // Section headings & topics
  "Why Reiki": "为什么选择灵气",
  "Benefits of Reiki": "灵气的益处",
  "Book a Reiki Healing Session": "预约灵气疗程",
  "Reiki Healing Session for Pets": "宠物灵气疗程",
  "Learn Reiki": "学习灵气",
  "Simple. Practical. Grounded.": "简单 · 实用 · 踏实",
  "Reiki Workshops": "灵气课程",
  "Reiki Master Teacher Training": "灵气导师培训",
  "Reiki Share": "灵气分享会",
  "Topics Covered": "课程内容",
  "Prerequisites": "入学要求",
  "Open to All": "开放报名",

  // Services hub
  "Reiki Healing": "灵气疗愈",
  "Reiki Healing Sessions": "灵气疗程",
  "Explore healing sessions": "浏览灵气疗程",
  "Explore workshops": "浏览灵气课程",
  "Choose your track": "选择您的课程",
  "Healing Sessions": "灵气疗程",
  "Workshops": "灵气课程",

  // Workshop tracks (services page)
  "Online + Hybrid": "线上 + 实体混合",
  "Fully In-Person": "全程实体",
  "On Request": "可预约",
  "Online + Hybrid Workshops": "线上 + 实体混合课程",
  "Chinese Reiki Workshops": "中文灵气课程",
  "Hybrid learning experience": "混合式学习课程",
  "Two-day in-person workshop": "两日制实体课程",
  "in partnership with": "合作单位:",
  "Self-paced online theory + 2× 3-hour in-person sessions":
    "自学线上课程 + 两次 3 小时实体课",
  "2-day in-person workshop in Tanjong Pagar": "丹戎巴葛 两日制实体课程",
  "Levels 1 · 2 · 3 · Master": "第一级 · 第二级 · 第三级 · 师资级",
  "View English track": "查看英语课程",
  "View Chinese track": "查看中文课程",
  "View available workshop dates and reserve your spot":
    "查看可预约日期并预留位置",
  "If you prefer a fully in-person workshop experience, please feel free to contact us to register your interest.":
    "如希望参加全程实体课程,请联系我们登记报名。",
  "ENGLISH": "英语课程",
  "中文": "中文课程",

  // Curriculum / availability badges
  "EN · Online + Hybrid": "英语 · 线上 + 实体混合",
  "中文 · In-Person": "中文 · 实体课",
  "EN · On Request": "英语 · 可预约",

  // Workshop / cohort details
  "Language": "授课语言",
  "Format": "课程形式",
  "Dates": "日期",
  "Time": "时间",
  "Workshop Fee": "课程费用",
  "Manual and certificate on completion": "完成后获颁讲义与结业证书",
  "Includes a non-refundable deposit": "费用包含不可退还订金",
  "Contact Yin Ling": "联系颖玲",

  // Healing session card titles (GT mistranslates contextual terms)
  "In-Person Reiki Healing Session": "上门灵气疗程",
  "Distant Reiki Healing Session": "远距灵气疗程",
  "In-Person Reiki for Pets": "上门宠物灵气疗程",
  "Distant Reiki for Pets": "远距宠物灵气疗程",

  // Card content
  "Brief discussion before": "疗程前简短沟通",
  "Brief check-in before": "疗程前简短沟通",
  "Full Reiki treatment": "完整灵气疗程",
  "Distant Reiki treatment": "远距灵气疗程",
  "Post-session debrief": "疗程后总结",
  "Short sharing afterwards": "疗程后简短分享",

  // Event details
  "Date & Time": "日期与时间",
  "Venue": "地点",
  "Energy Exchange": "能量交换",
} as const;

export type GlossaryTerm = keyof typeof glossary;
