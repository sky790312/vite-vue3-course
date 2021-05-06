interface PlanItem {
  id: number;
  title: string;
  desc: string;
}

export const plans: PlanItem[] = [
  {
    id: 1,
    title: "方案一",
    desc: "對於前端一些環節想解惑？一次搞定！",
  },
  {
    id: 2,
    title: "方案二",
    desc: "不知道該怎麼精進自己？立即了解！",
  },
];
