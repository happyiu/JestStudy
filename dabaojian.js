function baojian1(money) {
  return money>=200?'至尊享受':'普通享受'
}

function baojian2(money) {
  return money>=1000?'多人服务':'单人服务'
}

module.exports = {
  baojian1,
  baojian2
}
