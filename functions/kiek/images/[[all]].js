export async function onRequestGet(ctx) {
  const path = new URL(ctx.request.url).pathname.replace("/kiek/images/", "");
  const file = await ctx.env.KIEK_IMAGES.get(path);
  if (!file) return new Response(null, { status: 404 });
  return new Response(file.body, {
    headers: { "Content-Type": file.httpMetadata.contentType },
  });
}
