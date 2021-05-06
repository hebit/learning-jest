const sum = require("./script-1");
/**
 * Usa-se assim: test("descrição do teste", funcaoQueExecutaOTeste).
 *
 * O expect() retorna um expectation,
 * que é um objeto com metodos de
 * matches (toBe, toEqual, toContain, ...)
 * que verificam as condições do teste.
 */

test("adds 1 + 3 to equal 4", () => {
  expect(sum(1, 3)).toBe(4);
});

test("7 is less than 10 and greather than or equal 5", () => {
  expect(7).toBeLessThan(10);
  expect(7).toBeGreaterThanOrEqual(5);
});

test("there's no 'love' in 'Evolution' string", () => {
  expect("Evolution").not.toMatch("love");
});
