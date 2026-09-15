# Kit de reprodução — Catálogo Beleza com a Iza

Este kit contém a versão final do catálogo digital de decants WePink criada para **Beleza com a Iza**. O arquivo `index.html` é a fonte de verdade: ele funciona sozinho, sem instalar dependências.

## Arquivos

| Arquivo | Uso |
|---|---|
| `index.html` | Site completo: visual, produtos, abas, pedidos via WhatsApp e administração local. |
| `assets/logo-beleza-com-a-iza.jpeg` | Logo original da marca. |
| `produtos.json` | Lista estruturada dos 12 perfumes iniciais, categorias, notas e URLs de imagens oficiais. |
| `PROMPT-PARA-IA.md` | Prompt pronto para outra IA continuar ou recriar o projeto. |
| `catalogo-referencia.pdf` | Referência visual do catálogo impresso. |

## Como abrir e testar

1. Abra `index.html` em um navegador.
2. O catálogo deve mostrar 12 perfumes, a logo, abas **Todos**, **Feminino** e **Masculino**.
3. Os botões `Pedir` abrem uma conversa no WhatsApp da loja: `+55 21 96406-0058`.
4. O botão **Administração** abre o painel local.

## Acesso da administração local

- Usuário: `admin`
- No primeiro acesso em cada navegador, defina uma senha de administração. Ela fica salva somente naquele navegador/dispositivo.

Após entrar, o painel permite:
- cadastrar perfume com nome, caminho olfativo, categoria, notas e imagem carregada do computador/celular;
- definir cada produto como disponível/indisponível;
- remover produto com confirmação;
- alterar a senha;
- restaurar os 12 produtos iniciais.

As alterações usam `localStorage`: são salvas somente no navegador/dispositivo em que foram feitas. Este modelo funciona em uma página estática, mas não compartilha alterações entre visitantes. Para administração real on-line, migrar produtos, imagens, login e disponibilidade para um backend/banco de dados.

## Diretrizes de visual e conteúdo

- Marca: **Beleza com a Iza**.
- Paleta: lilás/roxo, roxo escuro, branco e detalhes dourados; valores principais estão no bloco `:root` em `index.html`.
- Estilo: elegante, feminino, minimalista, sem poluição visual.
- Decants: todos de **5 ml**, preço padrão **R$ 21,99**.
- Imagens dos produtos devem usar `object-fit: contain`, centralizadas e com margem branca, sem corte.
- Produtos indisponíveis continuam visíveis, recebem selo `Indisponível` e não exibem o botão de pedido.
- Ao adicionar novos produtos, sempre exigir categoria `Feminino` ou `Masculino`.

## Publicação

- Repositório privado: `https://github.com/belaviana1995-cell/catalogo-beleza-com-iza`
- O site ainda não está publicado. Como o repositório é privado, a publicação no GitHub Pages exige um plano/organização compatível ou a mudança do repositório para público.

## Como enviar uma atualização ao GitHub

Na pasta do repositório:

```bash
git add index.html assets/logo-beleza-com-a-iza.jpeg
git commit -m "feat: atualiza catálogo"
git push
```

O GitHub Pages reconstrói o site automaticamente após o push.

> Não expor tokens, senhas pessoais ou credenciais de API no repositório. A senha local acima é apenas o acesso embutido do protótipo estático e não é uma proteção adequada para um painel público.
