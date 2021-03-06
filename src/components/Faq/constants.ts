interface QnAItem {
  id: number;
  title: string;
  desc: string;
}

export const questionsAndAnswers: QnAItem[] = [
  {
    id: 1,
    title: "對象是？",
    desc:
      "這個對象主要是針對剛入門前端的工程師（已有基礎知識），對於工作上一些疑難雜症或是許多問題常常一知半解，如果你覺得自己的基礎能力不夠扎實如 html / css / js / ts / react / vue / work flow / wordpress / 業界狀態 / 常用工具 / 產品開發甚至職涯發展等等相關問題都能詢問！倘若是尚未接觸想了解或想轉職前端的人也歡迎諮詢，我將會針對業界的狀況與你目前狀態給予最佳解。",
  },
  {
    id: 2,
    title: "怎麼會有這個想法？",
    desc:
      "近年來轉職工程師正夯，常常看到許多轉職是失敗的例子，就算是成功也只是下個開始！當你想要試著從 junior 前往 senior 的過程勢必會遇到許多問題，這段學習曲線是陡峭的，若沒有遇到好的人或是好的環境很有可能就會停滯不前！這也造成明明工程師很熱門很缺人許多公司卻常常感慨找不到合適的人。而隨著市面上 junior 的人越來越多後初期的競爭就越來越激烈。試著去遇到一個好的 mentor 很重要！如果你已經很幸運的有一個好的 mentor 一定要好好珍惜，如果沒有歡迎你來這邊試試。",
  },
  {
    id: 3,
    title: "這邊有什麼特別？",
    desc:
      "最大的不同我想就是我更偏向建立起心態這件事吧！技術問題有時是找不到方向，有時是不知道方向，但當一個工程師所需的一些特質將會是支撐你一直往下走很重要的元素像是如何問問題，問問題的方式要去哪找資源尋找問題的能力等..同時我也會收納大家的問題，並慢慢建立起生態系來達到永續經營，來試試看吧！",
  },
];
