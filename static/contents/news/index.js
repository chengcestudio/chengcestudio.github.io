/**
 * 给 < next.config > 生成路由文件
 * 给 NAV 传送扼要信息
 *
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

const artistplan2018 = require("./2018_artists_plan.js");


const NEWS =  [artistplan2018]


// 发送到 nav NEWS 使用
module.exports.newsInfo = NEWS.map(

        (item)=>{
            return {
                id:item.id,
                title:item.title,
                // avatar:item.avatar,??? 图片
                data:item.data,
            }
        }
    )

