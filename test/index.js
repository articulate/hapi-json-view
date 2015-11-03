'use strict';

// Load external modules
const Lab = require('lab');

// Load internal modules
const Environment = require('../lib/environment.js');
const HapiJsonView = require('../lib/index.js');

// Test shortcuts
const lab = exports.lab = Lab.script();
const expect = Lab.assertions.expect;

lab.describe('create()', () => {
  lab.it('creates a new environment', (done) => {
    const engine = HapiJsonView.create();

    expect(engine).to.be.an.instanceof(Environment);
    done();
  });
});
