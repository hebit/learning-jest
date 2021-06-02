const { createPerson, analysePeopleAge } = require("./script-3");

/**
 * Podemos usar mock functions (jest.fn)
 * para criar funções depuraveis para teste.
 *
 * Essas funções podem ou não ter uma
 * implementação, e conseguimos testar
 * o comportamento da mock function por
 * métodos específicos do expect, como o
 * 'toHaveBeenCalled', 'toHaveBeenCalledWith',
 * 'toHaveReturned' e outros.
 */

test("check age of all persons", () => {
  const people = [
    createPerson("Ana", 23),
    createPerson("Paula", 55),
    createPerson("Pedro", 23),
    createPerson("Eloah", 42),
    createPerson("João", 66),
  ];

  const underageRule = jest.fn((x) => x < 18);
  analysePeopleAge(people, underageRule);

  expect(underageRule).toHaveBeenCalledTimes(people.length);
});
