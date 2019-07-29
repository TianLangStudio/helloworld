import { serve } from "https://deno.land/std@v0.12/http/server.ts";
const body = new TextEncoder().encode("Hello TianlangStudio\n");
const s = serve(":8000");
window.onload = async () => {
  console.log("http://localhost:8000/");
  for await (const req of s) {
    req.respond({ body });
  }
};
