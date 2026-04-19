export const glossary = {
  // Nav & UI
  "Contact": "联系我们",
  "FAQ": "常见问题",
  "What to Expect": "疗程须知",
  "Book Now": "立即预约",

  // CTA buttons (GT mistranslates "Book" as 图书/书籍)
  "Book a Session": "预约疗程",
  "Book Discovery": "预约初体验",
  "Book Session": "预约疗程",
  "Book Extended": "预约加长疗程",
  "Explore Classes": "浏览课程",
  "See What to Expect": "了解疗程须知",
  "Join Class": "加入课程",
  "Register": "报名",
  "Reserve Spot": "预留位置",
  "Get in Touch": "联系我们",
  "View Details": "查看详情",

  // Section headings & card titles
  "Classes & Sessions": "课程与疗程",
  "Private Sessions": "私人疗程",
  "First-Time Discovery": "初次体验",
  "Private Reiki Session": "私人灵气疗程",
  "Extended Session": "加长疗程",
  "Grounded Healing": "扎根疗愈",
  "The Session": "疗程",
  "Afterwards": "疗程之后",

  // Card content (GT mistranslates contextual terms)
  "Brief check-in": "简短沟通",
  "Extended intake conversation": "深入了解交流",
  "Post-session guidance": "疗程后指导",
  "Post-session debrief": "疗程后总结",

  // Testimonial attributions
  "First-time client": "首次体验客户",
  "Regular client": "常客",
  "Discovery session client": "初体验客户",
} as const;

export type GlossaryTerm = keyof typeof glossary;
