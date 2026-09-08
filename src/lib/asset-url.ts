type LovableAsset = {
  url: string;
  asset_id: string;
  original_filename?: string;
};

/**
 * Resolve o caminho de uma imagem.
 *
 * - No app normal (Lovable/TanStack) usa a URL servida pela plataforma ou o asset importado.
 * - No build estático para Apache (VITE_STATIC_BUILD=1) usa o arquivo
 *   copiado para `assets-img/` pelo script `scripts/build-static.mjs`.
 */
export function assetUrl(asset: LovableAsset | string): string {
  if (typeof asset === "string") {
    return asset;
  }
  if (import.meta.env.VITE_STATIC_BUILD) {
    return `assets-img/${staticFileName(asset)}`;
  }
  return asset.url;
}

export function staticFileName(asset: LovableAsset): string {
  const ext = asset.url.split(".").pop() ?? "png";
  return `${asset.asset_id}.${ext}`;
}
