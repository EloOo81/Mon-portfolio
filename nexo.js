/* Nexo - assistant IA de Studio Code */
(function(){
  if(window.__nexoLoaded)return;window.__nexoLoaded=true;
    var URL_WEBHOOK="https://nexo-chat.studio-code.workers.dev/";
  var AV="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="46 2 108 108"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8a3d"/><stop offset="1" stop-color="#f76707"/></linearGradient><radialGradient id="halo" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#f76707" stop-opacity=".55"/><stop offset="1" stop-color="#f76707" stop-opacity="0"/></radialGradient><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a2110"/><stop offset="1" stop-color="#0c0b09"/></linearGradient><radialGradient id="face" cx=".5" cy=".3" r=".8"><stop offset="0" stop-color="#2b261a"/><stop offset="1" stop-color="#14120d"/></radialGradient><filter id="gl" x="-30%" y="-60%" width="160%" height="220%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><clipPath id="cp"><circle cx="100" cy="56" r="54"/></clipPath></defs><g clip-path="url(#cp)"><circle cx="100" cy="56" r="54" fill="url(#bg)"/><g transform="translate(31,-4) scale(.69)"><circle cx="100" cy="100" r="82" fill="none" stroke="#ff8a3d" stroke-opacity=".18" stroke-width="2"/><circle cx="100" cy="100" r="62" fill="url(#halo)"/><g transform="translate(0,-14) scale(1,1)"><path d="M52 200 Q52 156 100 152 Q148 156 148 200 Z" fill="url(#face)" stroke="url(#g)" stroke-width="5"/><path d="M84 154 L100 172 L116 154 L100 160 Z" fill="url(#g)"/></g><g transform="translate(0,-10)"><line x1="100" y1="36" x2="100" y2="52" stroke="url(#g)" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="30" r="8" fill="url(#g)"/><circle cx="100" cy="30" r="14" fill="none" stroke="#ff8a3d" stroke-opacity=".35" stroke-width="2"/><rect x="34" y="82" width="12" height="36" rx="6" fill="url(#g)"/><rect x="154" y="82" width="12" height="36" rx="6" fill="url(#g)"/><rect x="46" y="52" width="108" height="94" rx="42" fill="url(#face)" stroke="url(#g)" stroke-width="5"/><path d="M62 70 Q100 56 138 70" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="6" stroke-linecap="round"/><circle cx="78" cy="98" r="13" fill="url(#g)"/><circle cx="122" cy="98" r="13" fill="url(#g)"/><circle cx="83" cy="93" r="4.5" fill="#fff" opacity=".9"/><circle cx="127" cy="93" r="4.5" fill="#fff" opacity=".9"/><circle cx="73" cy="104" r="2" fill="#fff" opacity=".6"/><circle cx="117" cy="104" r="2" fill="#fff" opacity=".6"/><ellipse cx="62" cy="116" rx="8" ry="5" fill="#e8907a" opacity=".55"/><ellipse cx="138" cy="116" rx="8" ry="5" fill="#e8907a" opacity=".55"/><path d="M82 120 Q100 138 118 120" fill="none" stroke="url(#g)" stroke-width="5" stroke-linecap="round"/></g><path d="M150 140 Q170 122 168 104" fill="none" stroke="url(#g)" stroke-width="7" stroke-linecap="round"/><circle cx="168" cy="100" r="8" fill="url(#g)"/></g></g></svg>');
  var HERO="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8a3d"/><stop offset="1" stop-color="#f76707"/></linearGradient><radialGradient id="halo" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#f76707" stop-opacity=".55"/><stop offset="1" stop-color="#f76707" stop-opacity="0"/></radialGradient><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a2110"/><stop offset="1" stop-color="#0c0b09"/></linearGradient><radialGradient id="face" cx=".5" cy=".3" r=".8"><stop offset="0" stop-color="#2b261a"/><stop offset="1" stop-color="#14120d"/></radialGradient><filter id="gl" x="-30%" y="-60%" width="160%" height="220%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="200" height="200" rx="28" fill="url(#bg)"/><circle cx="24" cy="40" r="13" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><circle cx="176" cy="34" r="9" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><circle cx="180" cy="120" r="15" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><circle cx="20" cy="112" r="7" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><circle cx="158" cy="16" r="5" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><circle cx="40" cy="16" r="4" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><circle cx="30" cy="78" r="5" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><circle cx="172" cy="82" r="5" fill="none" stroke="#ff8a3d" stroke-opacity=".3" stroke-width="2"/><g transform="translate(31,-4) scale(.69)"><circle cx="100" cy="100" r="82" fill="none" stroke="#ff8a3d" stroke-opacity=".18" stroke-width="2"/><circle cx="100" cy="100" r="62" fill="url(#halo)"/><g transform="translate(0,-14) scale(1,1)"><path d="M52 200 Q52 156 100 152 Q148 156 148 200 Z" fill="url(#face)" stroke="url(#g)" stroke-width="5"/><path d="M84 154 L100 172 L116 154 L100 160 Z" fill="url(#g)"/></g><g transform="translate(0,-10)"><line x1="100" y1="36" x2="100" y2="52" stroke="url(#g)" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="30" r="8" fill="url(#g)"/><circle cx="100" cy="30" r="14" fill="none" stroke="#ff8a3d" stroke-opacity=".35" stroke-width="2"/><rect x="34" y="82" width="12" height="36" rx="6" fill="url(#g)"/><rect x="154" y="82" width="12" height="36" rx="6" fill="url(#g)"/><rect x="46" y="52" width="108" height="94" rx="42" fill="url(#face)" stroke="url(#g)" stroke-width="5"/><path d="M62 70 Q100 56 138 70" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="6" stroke-linecap="round"/><circle cx="78" cy="98" r="13" fill="url(#g)"/><circle cx="122" cy="98" r="13" fill="url(#g)"/><circle cx="83" cy="93" r="4.5" fill="#fff" opacity=".9"/><circle cx="127" cy="93" r="4.5" fill="#fff" opacity=".9"/><circle cx="73" cy="104" r="2" fill="#fff" opacity=".6"/><circle cx="117" cy="104" r="2" fill="#fff" opacity=".6"/><ellipse cx="62" cy="116" rx="8" ry="5" fill="#e8907a" opacity=".55"/><ellipse cx="138" cy="116" rx="8" ry="5" fill="#e8907a" opacity=".55"/><path d="M82 120 Q100 138 118 120" fill="none" stroke="url(#g)" stroke-width="5" stroke-linecap="round"/></g><path d="M150 140 Q170 122 168 104" fill="none" stroke="url(#g)" stroke-width="7" stroke-linecap="round"/><circle cx="168" cy="100" r="8" fill="url(#g)"/></g><text x="100" y="150" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="25" font-weight="700" fill="#ffb37a" letter-spacing="5" filter="url(#gl)">NEXO</text><rect x="14" y="156" width="172" height="17" rx="8.5" fill="url(#g)" filter="url(#gl)"/><text x="100" y="168" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="8.2" font-weight="800" fill="#17120a" letter-spacing=".8">ASSISTANT IA DE STUDIO CODE</text><text x="100" y="188" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="11.5" font-weight="700" fill="#ffb37a" filter="url(#gl)">Le premier pas vers votre site</text></svg>');
  var css="#nexo-root{--nx-bg:#0c0b09;--nx-panel:#171510;--nx-accent:#ff8a3d;--nx-accent2:#f76707;--nx-text:#f4efe3;--nx-muted:#a79f8c;position:fixed;right:16px;bottom:16px;z-index:99999;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}"+
  "#nexo-root *{box-sizing:border-box}"+
  "#nexo-btn{display:flex;align-items:center;gap:12px;border:0;cursor:pointer;color:#17120a;font-weight:800;font-size:15px;line-height:1.2;text-align:left;padding:8px 22px 8px 8px;border-radius:999px;background:linear-gradient(135deg,var(--nx-accent),var(--nx-accent2));box-shadow:0 10px 34px rgba(247,103,7,.55);animation:nxg 2.2s infinite;transition:transform .2s}"+
  "#nexo-btn img{width:58px;height:58px;border-radius:50%;flex:none;background:#0c0b09}"+
  "#nexo-btn small{display:block;font-size:11.5px;font-weight:700;opacity:.85;margin-top:2px}"+
  "@keyframes nxg{0%{box-shadow:0 0 0 0 rgba(255,138,61,.7),0 10px 34px rgba(247,103,7,.5)}70%{box-shadow:0 0 0 18px rgba(255,138,61,0),0 10px 34px rgba(247,103,7,.5)}100%{box-shadow:0 0 0 0 rgba(255,138,61,0),0 10px 34px rgba(247,103,7,.5)}}"+
  ".nx-hero{width:100%;max-width:240px;align-self:center;border-radius:18px;margin:2px 0 6px;flex:none}"+
  "#nexo-btn:hover{transform:translateY(-2px)}"+
  "#nexo-btn .dot{width:9px;height:9px;border-radius:50%;background:#17120a;animation:nxp 1.6s infinite}"+
  "@keyframes nxp{50%{opacity:.25}}"+
  "#nexo-win{display:none;flex-direction:column;width:min(380px,calc(100vw - 32px));height:min(540px,calc(100vh - 100px));background:var(--nx-bg);color:var(--nx-text);border:1px solid rgba(247,103,7,.4);border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.45)}"+
  "#nexo-root.open #nexo-win{display:flex}#nexo-root.open #nexo-btn{display:none}"+
  "#nexo-head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:var(--nx-panel);border-bottom:1px solid rgba(255,255,255,.07)}"+
  "#nexo-head b{font-size:15px}#nexo-head small{display:block;color:var(--nx-muted);font-size:12px;margin-top:2px}"+
  "#nexo-close{background:none;border:0;color:var(--nx-muted);font-size:22px;cursor:pointer;line-height:1}"+
  "#nexo-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}"+
  ".nx-m{max-width:86%;padding:10px 13px;border-radius:14px;font-size:14.5px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}"+
  ".nx-bot{background:var(--nx-panel);align-self:flex-start;border-bottom-left-radius:4px}"+
  ".nx-me{background:linear-gradient(135deg,var(--nx-accent),var(--nx-accent2));color:#17120a;align-self:flex-end;border-bottom-right-radius:4px}"+
  ".nx-typing{color:var(--nx-muted);font-style:italic}"+
  "#nexo-form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid rgba(255,255,255,.07);background:var(--nx-panel)}"+
  "#nexo-input{flex:1;min-width:0;border:1px solid rgba(255,255,255,.12);background:var(--nx-bg);color:var(--nx-text);border-radius:12px;padding:10px 12px;font-size:16px;outline:none}"+
  "#nexo-input:focus{border-color:var(--nx-accent)}"+
  "#nexo-send{border:0;border-radius:12px;padding:0 16px;font-weight:700;cursor:pointer;color:#17120a;background:linear-gradient(135deg,var(--nx-accent),var(--nx-accent2))}"+
  "#nexo-send:disabled{opacity:.5;cursor:default}"+
  "#nexo-legal{padding:7px 14px 10px;font-size:11px;color:var(--nx-muted);background:var(--nx-panel);line-height:1.35}"+
  "#nexo-mic{border:1px solid rgba(255,255,255,.12);background:var(--nx-bg);color:var(--nx-accent);border-radius:12px;width:44px;min-width:44px;flex-shrink:0;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}"+
  "#nexo-mic.on{background:var(--nx-accent);color:#17120a;animation:nxp 1s infinite}"+
  "#nexo-voice{background:none;border:0;color:var(--nx-muted);cursor:pointer;padding:4px 6px;display:flex;align-items:center}#nexo-voice.on{color:var(--nx-accent)}"+
  "#nexo-tools{display:flex;align-items:center;gap:4px}"+
  "#nexo-form,#nexo-voice{display:none!important}.nx-opts{display:flex;flex-direction:column;gap:8px;align-self:stretch;margin:2px 0}.nx-opt{border:1px solid rgba(255,138,61,.55);background:var(--nx-panel);color:var(--nx-text);border-radius:12px;padding:11px 14px;font-size:14.5px;text-align:left;cursor:pointer;font-family:inherit}.nx-opt:hover{border-color:var(--nx-accent)}.nx-go{background:linear-gradient(135deg,var(--nx-accent),var(--nx-accent2));color:#17120a;font-weight:700;text-align:center;border:0}.nx-tel{border:1px solid rgba(255,255,255,.18);background:var(--nx-bg);color:var(--nx-text);border-radius:12px;padding:11px 12px;font-size:16px;font-family:inherit}"+
  "@media (prefers-reduced-motion:reduce){#nexo-btn,#nexo-btn .dot{animation:none;transition:none}}";
  var html='<button id="nexo-btn" type="button" aria-label="Discuter avec Nexo, assistant IA de Studio Code"><img alt="" src="'+AV+'"><span>Discuter avec Nexo<small>Assistant IA de Studio Code</small></span></button>'+
  '<section id="nexo-win" role="dialog" aria-label="Chat avec Nexo, assistant IA de Studio Code">'+
  '<div id="nexo-head"><div><b>Nexo</b><small>Assistant IA de Studio Code</small></div><div id="nexo-tools"><button id="nexo-voice" type="button" aria-pressed="false" aria-label="Activer ou couper la voix de Nexo" title="Voix de Nexo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg></button><button id="nexo-close" type="button" aria-label="Fermer le chat">&times;</button></div></div>'+
  '<div id="nexo-log"></div>'+
  '<form id="nexo-form" autocomplete="off"><input id="nexo-input" type="text" maxlength="500" placeholder="Votre question..." aria-label="Votre message" required><button id="nexo-mic" type="button" aria-label="Parler avec le micro" title="Parler"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg></button><button id="nexo-send" type="submit">Envoyer</button></form>'+
  '<div id="nexo-legal">Nexo pose des questions simples. Votre demande est envoyée par e-mail, depuis votre messagerie, à Studio Code, uniquement pour vous rappeler.</div>'+
  '</section>';
  function start(){
    var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
    var root=document.createElement("div");root.id="nexo-root";root.setAttribute("aria-live","polite");root.innerHTML=html;document.body.appendChild(root);
    var log=root.querySelector("#nexo-log"),form=root.querySelector("#nexo-form"),input=root.querySelector("#nexo-input"),send=root.querySelector("#nexo-send"),greeted=false,busy=false,hist=[],voiceOn=false,rec=null,mic=root.querySelector("#nexo-mic"),vbtn=root.querySelector("#nexo-voice"),SR=window.SpeechRecognition||window.webkitSpeechRecognition,TTS=window.speechSynthesis;
    if(!SR)mic.style.display="none";if(!TTS)vbtn.style.display="none";
    function syncVoice(){vbtn.classList.toggle("on",voiceOn);vbtn.setAttribute("aria-pressed",voiceOn?"true":"false")}
    function stopVoice(){if(TTS)TTS.cancel()}
    function speak(t){if(!voiceOn||!TTS)return;stopVoice();var u=new SpeechSynthesisUtterance(t);u.lang="fr-FR";var vs=TTS.getVoices().filter(function(x){return /^fr/i.test(x.lang)});var ml=vs.filter(function(x){return /thomas|paul|henri|claude|daniel|nicolas|antoine|mathieu|male|homme/i.test(x.name)});var vo=ml[0]||vs[0];if(vo)u.voice=vo;u.rate=1.18;u.pitch=ml[0]?1.05:0.8;TTS.speak(u)}
    vbtn.addEventListener("click",function(){voiceOn=!voiceOn;if(!voiceOn)stopVoice();syncVoice()});
    mic.addEventListener("click",function(){
      if(rec){rec.stop();return}
      stopVoice();
      rec=new SR();rec.lang="fr-FR";rec.interimResults=false;rec.maxAlternatives=1;
      rec.onstart=function(){mic.classList.add("on")};
      rec.onresult=function(e){var t=e.results[0][0].transcript;if(t){input.value=t;voiceOn=true;syncVoice();if(form.requestSubmit)form.requestSubmit();else send.click()}};
      rec.onerror=function(e){if(e.error==="not-allowed"||e.error==="service-not-allowed")add("Le micro est bloqué. Autorisez-le dans votre navigateur ou écrivez votre message.","nx-bot")};
      rec.onend=function(){mic.classList.remove("on");rec=null};
      try{rec.start()}catch(x){rec=null}
    });
    function add(text,cls){var d=document.createElement("div");d.className="nx-m "+cls;d.textContent=text;log.appendChild(d);log.scrollTop=log.scrollHeight;return d}
    function open(){root.classList.add("open");if(!greeted){greeted=true;var hero=document.createElement("img");hero.src=HERO;hero.alt="Nexo, assistant IA de Studio Code";hero.className="nx-hero";log.appendChild(hero);add("Bonjour, je suis Nexo, l'assistant de Studio Code. Quelques questions rapides pour préparer votre projet de site. Cela prend 1 minute.","nx-bot");runFlow()}}
    var answers=[],STEPS=[
      {k:"Métier",q:"Quel est votre métier ?",o:["Maçon","Plaquiste ou peintre","Couvreur ou chauffagiste","Autre artisan du bâtiment"]},
      {k:"Ville",q:"Dans quelle ville travaillez-vous ?",o:["Mazamet","Castres","Albi","Autre ville"]},
      {k:"Site actuel",q:"Avez-vous déjà un site internet ?",o:["Non, pas encore","Oui, mais à refaire"]},
      {k:"Site souhaité",q:"Quel type de site vous intéresse ?",o:["Site simple (à partir de 700 €)","Site avec assistant IA (assistant de devis, assistant d'accueil, réponses aux questions fréquentes… à partir de 1 100 €)","Je ne sais pas encore"]}
    ];
    function clearOpts(){var o=log.querySelector(".nx-opts");if(o)o.remove()}
    function runFlow(i){
      i=i||0;clearOpts();
      if(i>=STEPS.length){return askPhone()}
      var s=STEPS[i];add(s.q,"nx-bot");
      var box=document.createElement("div");box.className="nx-opts";
      s.o.forEach(function(label){var b=document.createElement("button");b.type="button";b.className="nx-opt";b.textContent=label;b.addEventListener("click",function(){answers.push(s.k+" : "+label);clearOpts();add(label,"nx-me");runFlow(i+1)});box.appendChild(b)});
      log.appendChild(box);log.scrollTop=log.scrollHeight;
    }
    function askPhone(){
      add("Dernière étape : à quel numéro peut-on vous rappeler ?","nx-bot");
      var f=document.createElement("form");f.className="nx-opts";
      f.innerHTML='<input type="tel" class="nx-tel" placeholder="Votre numéro de téléphone" aria-label="Votre numéro de téléphone" inputmode="tel" maxlength="20" required><button type="submit" class="nx-opt nx-go">Continuer</button>';
      f.addEventListener("submit",function(e){e.preventDefault();var v=f.querySelector("input").value.trim();if(!v)return;answers.push("Téléphone : "+v);f.remove();add(v,"nx-me");finish()});
      log.appendChild(f);log.scrollTop=log.scrollHeight;f.querySelector("input").focus();
    }
    function finish(){
      add("Merci ! Cliquez sur le bouton ci-dessous : un e-mail déjà rempli s'ouvre, il ne reste qu'à l'envoyer. Je vous rappelle sous 48 h. Vous pouvez aussi écrire à contact.studio.code@gmail.com.","nx-bot");
      var b=document.createElement("button");b.type="button";b.className="nx-opt nx-go";b.textContent="Envoyer ma demande par e-mail";
      b.addEventListener("click",function(){var body="Bonjour,\n\nVoici ma demande de site internet :\n\n"+answers.join("\n")+"\n\nMerci !";window.location.href="mailto:contact.studio.code@gmail.com?subject="+encodeURIComponent("Demande de site internet")+"&body="+encodeURIComponent(body)});
      var box=document.createElement("div");box.className="nx-opts";box.appendChild(b);log.appendChild(box);log.scrollTop=log.scrollHeight;
    }
    root.querySelector("#nexo-btn").addEventListener("click",open);
    root.querySelector("#nexo-close").addEventListener("click",function(){root.classList.remove("open");stopVoice()});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
