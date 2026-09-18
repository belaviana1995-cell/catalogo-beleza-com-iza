const assert = require('node:assert/strict');
const fs = require('node:fs');

const source = fs.readFileSync('app.js', 'utf8');

for (const name of [
  'Ruby', 'Haven', 'Capri', 'Feive', 'Wonderful', 'Mauve',
  'Castilho', 'King Blue', 'Cassera',
]) {
  assert.ok(source.includes(`'${name}'`), `Produto ausente: ${name}`);
}

for (const mergedName of ['Ruby Haven', 'Heaven Capri', 'Feive Wonderful', 'King Blue Castilho', 'Mawe']) {
  assert.ok(!source.includes(`'${mergedName}'`), `Nome ainda unido: ${mergedName}`);
}

for (const name of ['Ruby', 'Capri', 'Feive', 'Wonderful', 'Castilho', 'King Blue', 'Cassera']) {
  assert.match(source, new RegExp(`'${name}':'https://wepink\\.vteximg\\.com\\.br/`));
}

for (const [name, cents] of [
  ['Musamam Intense', 4590], ['Athena', 3990], ['Yara Elixir', 3990],
  ['Durrat Al Aroos', 3990], ['Afeef', 4990], ['Fakhar Rose', 4590],
  ['Sabah Al Ward', 3590], ['Sabah Al Ward Sugar', 3590], ['Asad Bourbon', 4590], ['Dalal', 4590],
]) {
  assert.ok(source.includes(`make('${name}','Árabes',${cents},true)`), `Preço incorreto: ${name}`);
}

for (const [tier, cents] of [['wp24', 2499], ['wp22', 2299], ['wp21', 2199]]) {
  assert.ok(source.includes(`...${tier}.map(n=>make(n,'WePink',${cents}))`), `Preço incorreto na ${tier}`);
}
for (const name of ['Scarlette Radiance', 'Scarlette', 'VF Tropical', 'VF Golden', 'VF Bloom', 'VF Onyx', 'Infinity Cosmik', 'Infinity Tawny']) {
  assert.ok(source.includes(`'${name}'`), `Produto ausente: ${name}`);
}
for (const [name, cents] of [['Her Code Clímax', 3599], ['Her Code Touch', 3599], ['Floratta Red', 2199]]) {
  assert.ok(source.includes(`make('${name}','O Boticário',${cents})`), `Preço incorreto: ${name}`);
}
assert.ok(source.includes("'Her Code Touch':'assets/her-code-touch.png'"), 'Imagem Her Code Touch não vinculada');
assert.ok(source.includes("'Her Code Clímax':'assets/her-code-climax.webp'"), 'Imagem Her Code Clímax não vinculada');
assert.ok(fs.existsSync('assets/her-code-touch.png'), 'Arquivo da imagem Her Code Touch não existe');
assert.ok(fs.existsSync('assets/her-code-climax.webp'), 'Arquivo da imagem Her Code Clímax não existe');
assert.ok(source.includes("'Dalal':'assets/dalal-lattafa.webp'"), 'Imagem Dalal não vinculada');
assert.ok(fs.existsSync('assets/dalal-lattafa.webp'), 'Arquivo da imagem Dalal não existe');
assert.ok(source.includes("'One Touch Latte':'assets/one-touch-latte.png'"), 'Imagem One Touch Latte não vinculada');
assert.ok(source.includes("'One Touch Latte'"), 'Produto One Touch Latte ausente');
assert.ok(fs.existsSync('assets/one-touch-latte.png'), 'Arquivo da imagem One Touch Latte não existe');
assert.ok(!source.includes("make('Air Code Clímax'"), 'Nome antigo Air Code Clímax ainda está no catálogo');
assert.ok(!source.includes("make('Air Code Touch'"), 'Nome antigo Air Code Touch ainda está no catálogo');

const brl = cents => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);
assert.match(source, /const money=n=>\(n\/100\)\.toLocaleString\('pt-BR',\{style:'currency',currency:'BRL'\}\)/);
assert.equal(brl(2499), 'R$ 24,99');
assert.equal(brl(2299), 'R$ 22,99');
assert.equal(brl(2199), 'R$ 21,99');
assert.equal(brl(4590), 'R$ 45,90');
assert.equal(brl(3590), 'R$ 35,90');

console.log('Catálogo: nomes separados, imagens e preços em reais validados.');
