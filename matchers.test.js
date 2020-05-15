// toBe 匹配器 相当于 ===
test('toBe', () => {
  const a = { numer: '007' }
  expect(a).toBe(a)
})

// toEqual 匹配器 相当于 == 匹配
test('toEqual', () => {
  const a = { numer: '007' }
  expect(a).toEqual({ numer: '007' })
})

// toBeNull 匹配器 相当于 Null值匹配
test('toBeNull', () => {
  const a = null
  expect(a).toBeNull()
})

// toBeUndefined 匹配器 相当于 Undefined值匹配
test('toBeUndefined', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

// toBeDefined 匹配器 相当于 匹配Defined定义了
test('toBeDefined', () => {
  const a = 'hhh'
  expect(a).toBeDefined()
})

// toBeTruthy 匹配器 相当于 true,真值 匹配
test('toBeTruthy', () => {
  const a = true
  expect(a).toBeTruthy()
})

// toBeFalsy 匹配器 相当于 true,真值 匹配
test('toBeFalsy', () => {
  const a = ''
  expect(a).toBeFalsy()
})

// toBeGreaterThan 匹配器 相当于 大于匹配
test('toBeGreaterThan', () => {
  const a = 12
  expect(a).toBeGreaterThan(10)
})

// toBeGreaterThanOrEqual 匹配器 相当于 大于等于 匹配
test('toBeGreaterThanOrEqual', () => {
  const a = 12
  expect(a).toBeGreaterThanOrEqual(10)
})

// toBeLessThan 匹配器 相当于 小于匹配
test('toBeLessThan', () => {
  const a = 12
  expect(a).toBeLessThan(14)
})

// toBeLessThanOrEqual 匹配器 相当于 小于等于 匹配
test('toBeLessThanOrEqual', () => {
  const a = 12
  expect(a).toBeLessThanOrEqual(14)
})

// toBeCloseTo 匹配器 相当于 自动消除js浮点精准度错误 匹配
test('toBeCloseTo', () => {
  const a = 0.1
  const b = 0.2
  expect(a+b).toBeCloseTo(0.3)
})

// toMatch 匹配器 相当于 字符串 匹配
test('toMatch', () => {
  const str = '小哥，小白，百名'
  expect(str).toMatch('小白')
})

// toContain 匹配器 相当于 数组，Set 匹配
test('toContain', () => {
  const arr = ['小哥','小白','百名']
  expect(arr).toContain('小白')
})

// toContain 匹配器 相当于 数组，Set 匹配
test('toContain', () => {
  const arr = ['小哥','小白','百名']
  const set1 = new Set(arr)
  expect(set1).toContain('小白')
})

const throwNewErrorFunc = () => {
  throw new Error('this is Error')
}

// toThrow 匹配器 相当于 错误异常 匹配
test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow()
  // toThrow() 传参就表示抛出的错误信息要一致
  // expect(throwNewErrorFunc).toThrow('this is Error')
})

// not 匹配器 相当于 取反 匹配
// test('not', () => {
//   expect(throwNewErrorFunc).not.toThrow()
// })
