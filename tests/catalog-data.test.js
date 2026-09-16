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
  ['Sabah Al Ward', 3590], ['Sabah Al Ward Sugar', 3590], ['Asad Bourbon', 4590],
]) {
  assert.ok(source.includes(`make('${name}','Árabes',${cents},true)`), `Preço incorreto: ${name}`);
}

const brl = cents => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);
assert.equal(brl(2499), 'R$ 24,99');
assert.equal(brl(2299), 'R$ 22,99');
assert.equal(brl(2199), 'R$ 21,99');
assert.equal(brl(4590), 'R$ 45,90');
assert.equal(brl(3590), 'R$ 35,90');

console.log('Catálogo: nomes separados, imagens e preços em reais validados.');
