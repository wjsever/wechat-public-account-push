export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx2febe943b2b69142",
    // 公众号APP_SECRET
    APP_SECRET: "dcbdf64af6e7ebede6d7eb473ba2af4c",
    // 模板消息id
    TEMPLATE_ID: "FhS6aeYbQA1cB_3fVBS5GetB_GvAQgAV8AHoV7zFr2M",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["omSkI6BROE_am-lx9UdunnvwZWDY", "omSkI6ItA3UYjjE2esYdMI7QIkUk"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "河南",
    // 所在城市
    CITY: "郑州",


    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2021-11-25",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天

// {{note_en.DATA}}  
// {{note_ch.DATA}}  
