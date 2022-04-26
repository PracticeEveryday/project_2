import { add } from "./add";

// expect(함수).toBe(값) => 함수의 결과값이 toBe가 될 것이다.
test("2+5가 7이 맞는가?", () => {
  expect(add(2, 5)).toBe(7);
});

// 틀리면 fail 반환
test("2+5가 7이 맞는가?", () => {
  expect(add(2, 5)).toBe(17);
});

// not으로 부정 조건을 추가 할 수 있으며
test("2+5가 7이 맞는가?", () => {
  expect(add(2, 5)).not.toBe(17);
});

/*
  toBeGreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual 등으로 대소비교를 수행할 수도 있다.
*/
test("2+5가 7이 맞는가?", () => {
  expect(add(2, 5)).toBeGreaterThan(0);
});

// 0-100 사이의 범위값으로 검증하고 싶다면, 그냥 expect를 2개 쓰면 된다.
test("2+5가 7이 맞는가?", () => {
  const result = add(2, 5);
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThan(100);
});

//이외에도 toBeTrusty, toBeFalsy 등의 논리값 검증 함수와 toMacth 등의 문자열 정규식 검증 함수가 있다.
test("2+5가 7이 맞는가?", () => {
  expect(true).toBeTruthy(); //true 일 때만 유효
  expect(false).toBeFalsy(); // false 일때만 유효
  expect("foobar").toMatch(/o/); // 정규식이 매칭 될 때만 유효
});

//test 대신 test.each를 사용하면 여러개의 테스트 케이스를 동시에 구동할 수 있다.

test.each([
  [2, 5, 7],
  [10, 20, 30],
  [4, 4, 8],
  [23, -1, 22],
])("add(%i, %i)가 %i가 맞는지?", (l, r, sum) => {
  expect(add(l, r)).toBe(sum);
});
