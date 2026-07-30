# Design System

Um sistema de tokens e componentes reutilizáveis, construído como peça de portfolio, documentado como uma ficha de catálogo, onde cada componente carrega sua referência, suas variações e o raciocínio por trás das decisões técnicas.

🔗 [Demo ao vivo](#) · 🔗 [Portfolio](#)

## Stack

- **Next.js** (App Router) + **TypeScript**
- **SCSS Modules** para estilização
- **CSS Custom Properties** para tokens e tema (light/dark)
- [`lucide-react`](https://lucide.dev) para ícones

## Identidade visual

Em vez de seguir o padrão genérico de UI kit (cards arredondados, sombra + elevação no hover, badges em pill colorido), este design system adota uma linguagem **editorial/arquivo**, inspirada em fichas de catálogo e etiquetas de museu:

- Cantos retos ou quase retos, bordas finas em vez de sombra pesada
- Tipografia mista: **Fraunces** (serifada, itálico) para títulos, **Manrope** para corpo, **IBM Plex Mono** para metadados (referências, preços, labels de estado)
- Sinal de interatividade via sublinhado animado ou traço de cor, não elevação/`translateY`
- Paleta **paper / ink / brass**: tons de papel envelhecido, tinta escura e um dourado como cor de destaque

## Estrutura

```
src/
├── app/
│   ├── page.tsx              → home / índice do catálogo
│   ├── globals.scss          → reset + import dos tokens
│   ├── tokens/                → páginas de cor, tipografia, espaçamento
│   └── components/            → uma rota de documentação por componente
│
├── components/
│   ├── ui/                    → os componentes reais (Button, Input, Card...)
│   └── theme/                 → ThemeProvider e toggle de dark mode
│
└── styles/
    └── tokens.scss             → variáveis de cor, fonte e espaçamento
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Componentes

| Componente           | Descrição                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| **Button**           | Variantes primary/secondary/ghost/danger, tamanhos, estado de loading com spinner acessível              |
| **Input**            | Label, erro, sucesso, ícone, toggle de senha funcional, contador de caracteres, tamanhos                 |
| **Card**             | Composição com Header/Body/Footer, variante clicável via _stretched link_ (não `role="button"` numa div) |
| **Badge**            | Indicador de status em estilo "selo/carimbo"                                                             |
| **Modal**            | Portal, focus trap, restauração de foco, fecha com ESC                                                   |
| **Select**           | Dropdown customizado com navegação completa por teclado (setas, Home/End, ESC)                           |
| **Checkbox / Radio** | Input nativo escondido + visual customizado via `:checked`, mantendo acessibilidade nativa               |
| **Toast**            | Sistema de notificação via Context + Portal, auto-dismiss + fechamento manual                            |

## Decisões técnicas relevantes

- **Tokens separados em "crus" e "semânticos"** — cores
