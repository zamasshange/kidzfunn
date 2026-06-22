import fs from 'fs';

const html = fs.readFileSync('membership-source.html', 'utf8');

function extractStyle(id) {
  const start = html.indexOf(`<style id='${id}'>`);
  if (start === -1) return '';
  const contentStart = html.indexOf('>', start) + 1;
  const end = html.indexOf('</style>', contentStart);
  return html.slice(contentStart, end).trim();
}

const blocks = [
  extractStyle('acf-membership-plan-style-inline-css'),
  extractStyle('acf-promo-card-style-inline-css'),
  extractStyle('acf-jump-nav-style-inline-css'),
];

const css = blocks
  .join('\n\n')
  .replace(/url\(\/wp-content\//g, 'url(https://bayareadiscoverymuseum.org/wp-content/');

fs.writeFileSync('app/styles/membership-blocks.css', css, 'utf8');
console.log('Wrote', css.length, 'bytes to app/styles/membership-blocks.css');
