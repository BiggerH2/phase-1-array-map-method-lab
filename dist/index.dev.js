"use strict";

var _require = require('chai'),
    expect = _require.expect;

var _require2 = require('jsdom'),
    JSDOM = _require2.JSDOM;

var fs = require('fs');

var path = require('path');

var babel = require('babel-core'); // Import the necessary functions from helpers.js


var _require3 = require('./helpers'),
    loadChai = _require3.loadChai,
    setupDOM = _require3.setupDOM; // Describe the test suite for index.js


describe('index.js', function () {
  // Define the before hook to set up the DOM and load Chai
  before(function _callee() {
    var chai;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(loadChai());

          case 2:
            chai = _context.sent;
            global.expect = chai.expect; // Set up the DOM with the HTML and script files

            _context.next = 6;
            return regeneratorRuntime.awrap(setupDOM());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // Describe the titleCased() function

  describe('titleCased()', function () {
    // Test case: it should return an array with title case tutorial names
    it('returns an array with title case tutorial names', function () {
      // Define the expected result
      var expectedTitles = ["What Does The This Keyword Mean?", "What Is The Constructor OO Pattern?", "Implementing Blockchain Web API", "The Test Driven Development Workflow", "What Is NaN And How Can We Check For It", "What Is The Difference Between StopPropagation And PreventDefault?", "Immutable State And Pure Functions", "What Is The Difference Between == And ===?", "What Is The Difference Between Event Capturing And Bubbling?", "What Is JSONP?"]; // Call the titleCased function and compare the result with expectedTitles

      expect(titleCased()).to.have.all.members(expectedTitles);
    });
  });
});