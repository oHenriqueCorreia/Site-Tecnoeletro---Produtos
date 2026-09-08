import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tecnoeletro — Produtos Próprios" },
      {
        name: "description",
        content:
          "Conheça os produtos próprios Tecnoeletro: balança de bateladas, sensor de umidade, sistema de visão, robô industrial e IoT industrial.",
      },
      { property: "og:title", content: "Tecnoeletro — Produtos Próprios" },
      {
        property: "og:description",
        content:
          "Conheça os produtos próprios Tecnoeletro: balança de bateladas, sensor de umidade, sistema de visão, robô industrial e IoT industrial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Navigate to="/produtos" replace />;
}
