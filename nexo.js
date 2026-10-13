/* Nexo - assistant IA de Studio Code */
(function(){
  if(window.__nexoLoaded)return;window.__nexoLoaded=true;
    var URL_WEBHOOK="https://nexo-chat.elomonchet.workers.dev/";
  var css="#nexo-root{--nx-bg:#0c0b09;--nx-panel:#171510;--nx-accent:#f0d58a;--nx-accent2:#c9a24a;--nx-text:#f4efe3;--nx-muted:#a79f8c;position:fixed;right:16px;bottom:16px;z-index:99999;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}"+
  "#nexo-root *{box-sizing:border-box}"+
  "#nexo-btn{display:flex;align-items:center;gap:10px;border:0;cursor:pointer;color:#17120a;font-weight:700;font-size:15px;padding:12px 18px;border-radius:999px;background:linear-gradient(135deg,var(--nx-accent),var(--nx-accent2));box-shadow:0 10px 30px rgba(201,162,74,.35);transition:transform .2s}"+
  "#nexo-btn:hover{transform:translateY(-2px)}"+
  "#nexo-btn .dot{width:9px;height:9px;border-radius:50%;background:#17120a;animation:nxp 1.6s infinite}"+
  "@keyframes nxp{50%{opacity:.25}}"+
  "#nexo-win{display:none;flex-direction:column;width:min(380px,calc(100vw - 32px));height:min(540px,calc(100vh - 100px));background:var(--nx-bg);color:var(--nx-text);border:1px solid rgba(201,162,74,.4);border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.45)}"+
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
  "#nexo-input{flex:1;border:1px solid rgba(255,255,255,.12);background:var(--nx-bg);color:var(--nx-text);border-radius:12px;padding:10px 12px;font-size:16px;outline:none}"+
  "#nexo-input:focus{border-color:var(--nx-accent)}"+
  "#nexo-send{border:0;border-radius:12px;padding:0 16px;font-weight:700;cursor:pointer;color:#17120a;background:linear-gradient(135deg,var(--nx-accent),var(--nx-accent2))}"+
  "#nexo-send:disabled{opacity:.5;cursor:default}"+
  "#nexo-legal{padding:7px 14px 10px;font-size:11px;color:var(--nx-muted);background:var(--nx-panel);line-height:1.35}"+
  "#nexo-mic{border:1px solid rgba(255,255,255,.12);background:var(--nx-bg);color:var(--nx-accent);border-radius:12px;width:44px;min-width:44px;flex-shrink:0;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}"+
  "#nexo-mic.on{background:var(--nx-accent);color:#17120a;animation:nxp 1s infinite}"+
  "#nexo-voice{background:none;border:0;color:var(--nx-muted);cursor:pointer;padding:4px 6px;display:flex;align-items:center}#nexo-voice.on{color:var(--nx-accent)}"+
  "#nexo-tools{display:flex;align-items:center;gap:4px}"+
  "@media (prefers-reduced-motion:reduce){#nexo-btn,#nexo-btn .dot{animation:none;transition:none}}";
  var html='<button id="nexo-btn" type="button" aria-label="Discuter avec Nexo, assistant IA de Studio Code"><span class="dot"></span>Discuter avec Nexo</button>'+
  '<section id="nexo-win" role="dialog" aria-label="Chat avec Nexo, assistant IA de Studio Code">'+
  '<div id="nexo-head"><div><b>Nexo</b><small>Assistant IA de Studio Code</small></div><div id="nexo-tools"><button id="nexo-voice" type="button" aria-pressed="false" aria-label="Activer ou couper la voix de Nexo" title="Voix de Nexo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg></button><button id="nexo-close" type="button" aria-label="Fermer le chat">&times;</button></div></div>'+
  '<div id="nexo-log"></div>'+
  '<form id="nexo-form" autocomplete="off"><input id="nexo-input" type="text" maxlength="500" placeholder="Votre question..." aria-label="Votre message" required><button id="nexo-mic" type="button" aria-label="Parler avec le micro" title="Parler"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg></button><button id="nexo-send" type="submit">Envoyer</button></form>'+
  '<div id="nexo-legal">Nexo est une intelligence artificielle. Votre message est traité par un service d\'IA et peut être transmis à Studio Code pour vous répondre. Ne saisissez pas de données sensibles. Avec le micro, la reconnaissance vocale est assurée par votre navigateur.</div>'+
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
    function open(){root.classList.add("open");if(!greeted){greeted=true;add("Bonjour, je suis Nexo, l'assistant IA de Studio Code. Posez-moi vos questions sur nos offres, nos tarifs ou votre projet de site.","nx-bot")}input.focus()}
    root.querySelector("#nexo-btn").addEventListener("click",open);
    root.querySelector("#nexo-close").addEventListener("click",function(){root.classList.remove("open");stopVoice()});
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var msg=input.value.trim();if(!msg||busy)return;
      busy=true;send.disabled=true;input.value="";
      add(msg,"nx-me");
      var wait=add("Nexo écrit...","nx-bot nx-typing");
      var ctrl=new AbortController(),to=setTimeout(function(){ctrl.abort()},45000);
      fetch(URL_WEBHOOK+"?message="+encodeURIComponent(msg)+"&h="+encodeURIComponent(JSON.stringify(hist.slice(-5))),{signal:ctrl.signal})
        .then(function(r){if(!r.ok)throw 0;return r.text()})
        .then(function(t){wait.className="nx-m nx-bot";var rep=t.trim()||"Je n'ai pas pu répondre, pouvez-vous reformuler ?";wait.textContent=rep;hist.push({role:"user",content:msg.slice(0,260)});hist.push({role:"assistant",content:rep.slice(0,260)});speak(rep)})
        .catch(function(){wait.className="nx-m nx-bot";wait.textContent="Désolé, je rencontre un souci technique. Vous pouvez réessayer dans un instant ou utiliser le formulaire de devis."})
        .finally(function(){clearTimeout(to);busy=false;send.disabled=false;log.scrollTop=log.scrollHeight;input.focus()});
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
