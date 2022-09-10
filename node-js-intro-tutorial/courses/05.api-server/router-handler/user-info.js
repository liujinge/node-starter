const db = require('../db');

exports.getUserInfo = (req, res) => {
  const sql = `select id, username, nickname, email, user_pic from ev_users where id=?`;
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err);

    if (results.length !== 1) res.cc('获取用户信息失败');

    res.send({
      status: 0,
      message: '获取用户信息成功',
      data: results[0],
    });
  });
};
