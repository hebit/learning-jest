const getPosts = require("./script-2");

/**
 * Para testar código asyncrono,
 * usa-se a função done que recebemos
 * como parametro da funcao de testes
 * e passamos um callback (cb) para a
 * função asyncrona chamar.
 *
 * Neste caso, a função getPost pega os
 * dados da API e executa cb(data) no
 * final da função.
 */

test("fetch posts data from API", (done) => {
  function cb(data) {
    try {
      expect(data).toContainEqual({
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      });
      done();
    } catch (err) {
      done(err);
    }
  }
  getPosts(cb);
});
