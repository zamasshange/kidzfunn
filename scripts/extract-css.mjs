import fs from 'fs';

const htmlBuffer = fs.readFileSync('site.html');
const html =
  htmlBuffer[0] === 0xff && htmlBuffer[1] === 0xfe
    ? htmlBuffer.toString('utf16le')
    : htmlBuffer.toString('utf8');

function extractBetween(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  if (start === -1) return '';
  const contentStart = html.indexOf('>', start) + 1;
  const end = html.indexOf(endMarker, contentStart);
  return html.slice(contentStart, end);
}

function fixUrls(css) {
  return css
    .replace(/url\(\/wp-content\//g, 'url(https://bayareadiscoverymuseum.org/wp-content/')
    .replace(/url\('\/wp-content\//g, "url('https://bayareadiscoverymuseum.org/wp-content/")
    .replace(/content: url\(\/wp-content\//g, 'content: url(https://bayareadiscoverymuseum.org/wp-content/');
}

const featuredCss = fixUrls(extractBetween('<style>\n.featured-classes-wrapr', '</style>'));
const testimonialCss = fixUrls(extractBetween('<style>\n  .testimonial-itemr', '</style>'));
const customCss = fixUrls(extractBetween('<style id="wp-custom-css">', '</style>'));

const wpcodeCss = fixUrls(extractBetween('<style class="wpcode-css-snippet">', '</style>'));

const combined = `/* Homepage announcement bar */
${featuredCss}

/* Homepage testimonials */
${testimonialCss}

/* WordPress custom CSS */
${customCss}

/* Inner page styles (membership, plan your visit, etc.) */
${wpcodeCss}
`;

fs.mkdirSync('app/styles', { recursive: true });
fs.writeFileSync('app/styles/badm-custom.css', combined, 'utf8');
console.log('Extracted', combined.length, 'bytes to app/styles/badm-custom.css');
