/**
 * 艺术家页面json模板,艺术家总目录
 * 详情每个艺术家分别建立文件夹
 * @type {object}
 *
 * artista -  艺术家头像图片
 * id - 数组 index
 * name - 姓名
 * description - 描述
 *
 */

const PangMaokun = require("./PangMaokun.js");
const EnzoCucchi = require("./EnzoCucchi.js");
const SandroChia = require("./SandroChia.js");
const FangLijun = require("./FangLijun.js");
const WangYi = require("./WangYi.js");
const VincenzoVentimiglia = require("./VincenzoVentimiglia.js");

const ARTISTI =  [
    PangMaokun,
    EnzoCucchi,
    SandroChia,
    FangLijun,
    WangYi,
    VincenzoVentimiglia
]

// artistInfo 路由和 nav artisti 使用
module.exports.artistInfo = ARTISTI.map(

        (item)=>{
            return {
                name:item.name,
                avatar:item.avatar,
                id:item.id,
            }
        }

    )

