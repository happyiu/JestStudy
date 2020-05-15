const dabaojian =require('./dabaojian')
const  {baojian1, baojian2 } = dabaojian

test('大保健1花了 300元', () => {
  expect(baojian1(300)).toBe('至尊享受')
  expect(baojian1(100)).toBe('普通享受')
})

test('大保健2花了 300元', () => {
  expect(baojian2(300)).toBe('单人服务')
})
