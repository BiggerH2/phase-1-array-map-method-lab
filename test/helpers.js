// helpers.js

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const babel = require('babel-core');

async function loadChai() {
  const chai = await import('chai');
  return chai;
}

async function setupDOM() {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
  const babelResult = babel.transformFileSync(path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  });
  const src = babelResult.code;

  const { window } = new JSDOM(html, { runScripts: 'outside-only' });
  global.window = window;
  global.document = window.document;

  const scriptEl = window.document.createElement('script');
  scriptEl.textContent = src;
  window.document.body.appendChild(scriptEl);
}

module.exports = {
  loadChai,
  setupDOM,
};
