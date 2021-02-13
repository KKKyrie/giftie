
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '520送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是第一行文案', },
    { key: 's', wording: '这是第二行文案', },
    { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: 'XXX'
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
export const gifts = [
  { key: 'q', name: 'Dior双飞套装', image: '/images/1.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
  { key: 'w', name: '腾讯视频终身VIP', image: '/images/2.png',  description: '“为你承包一辈子的 VIP”' },
  { key: 'e', name: '兰蔻小黑瓶套装', image: '/images/3.png',  description: '「强维稳，快修护」' },
  { key: 'r', name: '520红包', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: 'Dior星空套装', image: '/images/5.png',  description: '「百变唇妆，精美雕琢」' },
  { key: 'y', name: '1314红包', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: 'UR购物券：¥1,000', image: '/images/7.png',  description: '“UR！买！”' },
  { key: 'i', name: 'Dyson美发套装', image: '/images/8.png',  description: '「不同造型需求，全面满足」' },
];
