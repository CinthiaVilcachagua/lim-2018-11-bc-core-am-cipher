describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG" )
    });

    it('deberia retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLM NOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLM NOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG")
    })
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    it('deberia retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRST UVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRST UVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    })
  });

  /* describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });
*/
});
