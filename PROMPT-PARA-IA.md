# Prompt para continuar este projeto com outra IA

Você é responsável por manter e evoluir o catálogo digital **Beleza com a Iza**. Leia primeiro `README-PARA-IA.md`, `produtos.json` e `index.html`. Preserve o estilo visual e altere apenas o que foi solicitado.

## Objetivo atual

Manter um catálogo de decants WePink com:
- preço fixo de **R$ 21,99** por decant de **5 ml**;
- logo em `assets/logo-beleza-com-a-iza.jpeg`;
- botão de pedido para WhatsApp **+55 21 96406-0058**;
- filtros/abas: Todos, Feminino e Masculino;
- catálogo público sem painel de administração; as alterações reais são feitas nos arquivos e enviadas ao GitHub;
- produtos indisponíveis continuam visíveis, mas sem botão de pedido;
- fotos inteiras, centralizadas, com `object-fit: contain`, nunca recortadas.

## Regras obrigatórias

1. `index.html` deve continuar autoexecutável, sem build, sem dependências e compatível com GitHub Pages.
2. Não usar links de “Ficha oficial WePink” nos cards.
3. Não remover os filtros por categoria. O painel de administração foi removido da versão pública; atualizações devem ser feitas pelos arquivos versionados no GitHub.
4. Para novos produtos, solicitar/definir categoria Feminino ou Masculino.
5. Não substituir a logo da marca; preservar a paleta lilás/roxo/dourado.
6. Validar no navegador os fluxos alterados antes de concluir.
7. Caso o cliente peça administração compartilhada entre celulares/computadores, explicar que é preciso migrar de `localStorage` para backend/banco de dados e implementar autenticação real.

## Publicação

Repositório público: `https://github.com/belaviana1995-cell/catalogo-beleza-com-iza`.

O catálogo será publicado no GitHub Pages a partir da branch `main`. Não envie dados pessoais, senhas, tokens, chaves de API ou informações de fornecedores ao repositório.
