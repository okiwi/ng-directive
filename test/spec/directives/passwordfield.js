
'use strict';

describe('Directive: PasswordField', function () {
  it('password should be 8 characters minimum', function () {
    var status = validatePassword('blahblah');
    expect(status).toBe('ok');
  })
});
