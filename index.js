const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const babel = require('babel-core');

// Import the necessary functions from helpers.js
const { loadChai, setupDOM } = require('./helpers');

// Describe the test suite for index.js
describe('index.js', function () {
  // Define the before hook to set up the DOM and load Chai
  before(async function () {
    // Load Chai library
    const chai = await loadChai();
    global.expect = chai.expect;

    // Set up the DOM with the HTML and script files
    await setupDOM();
  });

  // Describe the titleCased() function
  describe('titleCased()', function () {
    // Test case: it should return an array with title case tutorial names
    it('returns an array with title case tutorial names', function () {
      // Define the expected result
      const expectedTitles = [
        "What Does The This Keyword Mean?",
        "What Is The Constructor OO Pattern?",
        "Implementing Blockchain Web API",
        "The Test Driven Development Workflow",
        "What Is NaN And How Can We Check For It",
        "What Is The Difference Between StopPropagation And PreventDefault?",
        "Immutable State And Pure Functions",
        "What Is The Difference Between == And ===?",
        "What Is The Difference Between Event Capturing And Bubbling?",
        "What Is JSONP?"
      ];

      // Call the titleCased function and compare the result with expectedTitles
      expect(titleCased()).to.have.all.members(expectedTitles);
    });
  });
});
