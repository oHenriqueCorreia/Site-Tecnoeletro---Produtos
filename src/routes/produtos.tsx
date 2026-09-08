import { createFileRoute } from "@tanstack/react-router";

import ProdutosPage from "@/pages/produtos-page";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Nossos Produtos | Tecnoeletro — Automação Inteligente" },
      {
        name: "description",
        content:
          "Balança de fluxo, sensor de umidade, sistema de visão e robô industrial: soluções da Tecnoeletro para automação inteligente na indústria.",
      },
      { property: "og:title", content: "Nossos Produtos | Tecnoeletro" },
      {
        property: "og:description",
        content:
          "Transforme sua empresa com automação inteligente: produtos Tecnoeletro para precisão, eficiência e controle em tempo real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProdutosPage,
});
