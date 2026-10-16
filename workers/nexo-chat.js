// Nexo - assistant IA de Studio Code (Cloudflare Worker) - version 2
const ORIGINES = ["https://studio-code.fr", "https://www.studio-code.fr"];

// Les consignes de Nexo sont privees et ne sont pas publiees dans ce depot.
const CONSIGNE = "(consignes privees)";

export default {
  async fetch(request, env) {
    const origine = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ORIGINES.includes(origine) ? origine : ORIGINES[0],
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "text/plain; charset=utf-8"
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    const url = new URL(request.url);
    const message = (url.searchParams.get("message") || "").trim().slice(0, 500);
    if (!message) return new Response("Posez-moi votre question.", { headers: cors });

    let h = [];
    try {
      h = JSON.parse(url.searchParams.get("h") || "[]").slice(-6).map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: String(m.content || "").slice(0, 300)
      }));
    } catch (e) {}

    let texte = "";
    for (const modele of ["@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fp8-fast"]) {
      try {
        const r = await env.AI.run(modele, {
          messages: [{ role: "system", content: CONSIGNE }, ...h, { role: "user", content: message }],
          max_tokens: 300
        });
        texte = String(r?.response || r?.choices?.[0]?.message?.content || "").trim();
        if (texte) break;
      } catch (e) { texte = ""; }
    }
    return new Response(
      texte || "Désolé, je rencontre un souci technique. Vous pouvez réessayer dans un instant ou utiliser le formulaire de devis.",
      { headers: cors }
    );
  }
};
