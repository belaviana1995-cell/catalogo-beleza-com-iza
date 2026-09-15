# Kit de reprodução — Catálogo Beleza com a Iza

Este kit contém a versão final do catálogo digital de decants WePink criada para **Beleza com a Iza**. O arquivo `index.html` é a fonte de verdade: ele funciona sozinho, sem instalar dependências.

## Arquivos

| Arquivo | Uso |
|---|---|
| `index.html` | Site público: visual, produtos, abas e pedidos via WhatsApp. |
| `assets/logo-beleza-com-a-iza.jpeg` | Logo original da marca. |
| `produtos.json` | Lista estruturada dos 12 perfumes iniciais, categorias, notas e URLs de imagens oficiais. |
| `PROMPT-PARA-IA.md` | Prompt pronto para outra IA continuar ou recriar o projeto. |
| `catalogo-referencia.pdf` | Referência visual do catálogo impresso. |

## Como abrir e testar

1. Abra `index.html` em um navegador.
2. O catálogo deve mostrar 12 perfumes, a logo e as abas **Todos**, **Feminino** e **Masculino**.
3. Os botões `Pedir` abrem uma conversa no WhatsApp da loja: `+55 21 96406-0058`.
4. O catálogo público não possui painel de administração. Para atualizar produtos, edite os arquivos e envie as alterações ao GitHub.

## Atualizações e segurança

As alterações reais do catálogo são versionadas no GitHub. Nunca envie dados pessoais, senhas, tokens, chaves de API ou informações de fornecedores ao repositório. Para uma administração on-line compartilhada no futuro, será necessário usar backend, banco de dados e autenticação real.

## Diretrizes de visual e conteúdo

- Marca: **Beleza com a Iza**.
- Paleta: lilás/roxo, roxo escuro, branco e detalhes dourados; valores principais estão no bloco `:root` em `index.html`.
- Estilo: elegante, feminino, minimalista, sem poluição visual.
- Decants: todos de **5 ml**, preço padrão **R$ 21,99**.
- Imagens dos produtos devem usar `object-fit: contain`, centralizadas e com margem branca, sem corte.
- Produtos indisponíveis continuam visíveis, recebem selo `Indisponível` e não exibem o botão de pedido.
- Ao adicionar novos produtos, sempre exigir categoria `Feminino` ou `Masculino`.

## Publicação

- Repositório público: `https://github.com/belaviana1995-cell/catalogo-beleza-com-iza`
- Site público: `https://belaviana1995-cell.github.io/catalogo-beleza-com-iza/`
- Publicação: GitHub Pages, branch `main`, diretório raiz.

## Como enviar uma atualização ao GitHub

Na pasta do repositório:

```bash
git add index.html assets/logo-beleza-com-a-iza.jpeg
git commit -m "feat: atualiza catálogo"
git push
```

O GitHub Pages reconstrói o site automaticamente após o push.

> Não expor tokens, senhas pessoais, credenciais de API, dados pessoais ou informações de fornecedores no repositório público.
