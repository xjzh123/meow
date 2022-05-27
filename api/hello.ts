/*
require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');
connection.end();
*/
import type { VercelRequest, VercelResponse } from '@vercel/node';
export default (request: VercelRequest, response: VercelResponse) => {//箭头函数
    const { name } = request.query;//大括号表示对象
    response.status(200).send(`Hello ${name}!`);//大括号表示字符串格式化，连续的方法调用都是response的方法
  };//输出default方法，用import default导入，因为default必定只有一个，不需要加大括号