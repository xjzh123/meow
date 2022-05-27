export default (req, res) => {//箭头函数
    res.status(200).send(process.env.pusher_key);//大括号表示字符串格式化，连续的方法调用都是response的方法
};//输出default方法，用import default导入，因为default必定只有一个，不需要加大括号