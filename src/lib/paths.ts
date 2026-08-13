/** Prefix public asset paths for GitHub Pages basePath. */
export function assetPath(path: string) {
  const base =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/portfolio" : "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
