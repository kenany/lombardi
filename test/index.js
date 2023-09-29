const test = require('tape');
const isFunction = require('lodash.isfunction');
const almostEqual = require('almost-equal');
const lombardi = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(lombardi));
});

test('100 for 10', function(t) {
  t.plan(1);
  t.ok(almostEqual(lombardi(100, 10), 125, 1));
});

test('100 for 6', function(t) {
  t.plan(1);
  t.ok(almostEqual(lombardi(100, 6), 119, 1));
});
