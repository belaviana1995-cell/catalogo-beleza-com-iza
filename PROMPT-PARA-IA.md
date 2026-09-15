# Prompt para continuar este projeto com outra IA

Você é responsável por manter e evoluir o catálogo digital **Beleza com a Iza**. Leia primeiro `README-PARA-IA.md`, `produtos.json` e `index.html`. Preserve o estilo visual e altere apenas o que foi solicitado.

## Objetivo atual

Manter um catálogo de decants WePink com:
- preço fixo de **R$ 21,99** por decant de **5 ml**;
- logo em `assets/logo-beleza-com-a-iza.jpeg`;
- botão de pedido para WhatsApp **+55 21 96406-0058**;
- filtros/abas: Todos, Feminino e Masculino;
- administração local para cadastrar, marcar indisponível, remover perfume e carregar foto;
- produtos indisponíveis continuam visíveis, mas sem botão de pedido;
- fotos inteiras, centralizadas, com `object-fit: contain`, nunca recortadas.

## Regras obrigatórias

1. `index.html` deve continuar autoexecutável, sem build, sem dependências e compatível com GitHub Pages.
2. Não usar links de “Ficha oficial WePink” nos cards.
3. Não remover os filtros por categoria nem o painel de administração sem pedido explícito.
4. Para novos produtos, solicitar/definir categoria Feminino ou Masculino.
5. Não substituir a logo da marca; preservar a paleta lilás/roxo/dourado.
6. Validar no navegador os fluxos alterados antes de concluir.
7. Caso o cliente peça administração compartilhada entre celulares/computadores, explicar que é preciso migrar de `localStorage` para backend/banco de dados e implementar autenticação real.

## Acesso de administração inicial

Usuário: `admin`. No primeiro acesso em cada navegador, a pessoa administradora define a própria senha local.

## Publicação

Repositório privado: `https://github.com/belaviana1995-cell/catalogo-beleza-com-iza`.

O site ainda não está publicado. Para usar GitHub Pages, confirme se a conta/plano permite Pages em repositório privado ou altere a visibilidade para público.
