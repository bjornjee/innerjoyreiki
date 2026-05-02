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
  "Book Now": "立即预约",

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
  "Reiki Healing Sessions": "灵气疗程",
  "Reiki Healing Session for Pets": "宠物灵气疗程",
  "Learn Reiki": "学习灵气",
  "Reiki Workshops": "灵气课程",
  "Reiki Master Teacher Training": "灵气导师培训",
  "Reiki Share": "灵气分享会",
  "Topics Covered": "课程内容",
  "Prerequisites": "入学要求",
  "Open to All": "开放报名",

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
