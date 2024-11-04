javascript:!function(){var e,t,n=document.getElementById("party");if(!n){console.log("No 'party' div found.");return}var o=Array.from(n.querySelectorAll("div")).find(e=>"Party"===e.textContent.trim());if(o){var r=document.createElement("div");r.style.cssText="margin-bottom: 10px; font-size: 12px; margin-left: 10px";var i=document.createElement("a");i.href="https://github.com/mintersdev/kamiBot",i.target="_blank",i.textContent="kamiBot",i.style.cssText="color: #5bc0de; text-decoration: none;";var a=document.createTextNode(" by "),l=document.createElement("a");l.href="https://x.com/mintersdev",l.target="_blank",l.textContent="minters",l.style.cssText="color: #5bc0de; text-decoration: none;",r.appendChild(i),r.appendChild(a),r.appendChild(l),o.appendChild(r);var c=document.createElement("span");c.id="countdown-timer",c.style.cssText="display: inline-block; margin-left: 10px; margin-top: -5px; color: black; font-weight: bold;",o.appendChild(c);var d=document.createElement("span");d.id="evacuation-reason",d.style.cssText="display: block; margin-top: 5px; color: #5bc0de; font-weight: bold;",o.appendChild(d);var s=document.createElement("div");s.style.cssText="display: flex; gap: 5px; margin-top: 5px;";var f=document.createElement("button");f.textContent="Pause Bot",f.style.cssText="background-color:#f0ad4e; color:white; border:none; padding:5px 10px; cursor:pointer; font-family:monospace;",s.appendChild(f);var p=document.createElement("button");p.textContent="Terminate Bot",p.style.cssText="background-color:#d9534f; color:white; border:none; padding:5px 10px; cursor:pointer; font-family:monospace;",s.appendChild(p);var u=document.createElement("button");u.textContent="Evacuate All Kamis",u.style.cssText="background-color:#5bc0de; color:white; border:none; padding:5px 10px; cursor:pointer; font-family:monospace;",s.appendChild(u),o.appendChild(s)}var m=!1,v={},g={};function h(e){var t=new Date().toTimeString().split(" ")[0];console.log(`[kamiBot][${t}] ${e}`)}function x(e){var n=e;c.textContent=`(Next scan in: ${n}s)`,t&&clearInterval(t),t=setInterval(function(){if(m){clearInterval(t);return}n-=1,c.textContent=`(Next scan in: ${n}s)`,n<=0&&clearInterval(t)},1e3)}function y(){!m&&(n.querySelectorAll("img[src$='.gif']").forEach(function(e){var t=e.closest("div");if(t){var n=t.querySelector("div > div");if(n){var o,r=n.querySelector("div > div"),i=r?(o=r).textContent.trim().replace(/-\d+$/,""):"Unknown Kami",a=n.querySelector('span[aria-label*="Health"]');if(a){var l=a.getAttribute("aria-label").match(/Health:\s*(\d+)\/(\d+)/);if(l){var c,d,s,f=parseInt(l[1]),p=parseInt(l[2]);t.maxHp=p,c=i,d=f,v[s=c.replace(/-\d+$/,"")]||(v[s]=[]),v[s].push(d),v[s].length>20&&v[s].shift();var u=p-f;h(`HP found for ${i}: ${f}/${p} (-${u})`);var m=n.querySelector(".missing-hp-indicator");m||((m=document.createElement("span")).className="missing-hp-indicator",m.style.cssText="color: red; font-weight: bold; margin-left: 10px;",a.parentNode.appendChild(m)),m.textContent=`-${u}`,u>=25&&(h(`Kami ${i} is missing more than 25 HP (missing ${u})`),function e(t,n,o){var r=n.replace(/-\d+$/,"");if(void 0!==g[r]){if(h(`Checking HP after feeding ${n}`),h(`HP before feeding: ${g[r]}, Current HP: ${o}`),o<=g[r]){h(`WARNING: HP did not increase after feeding! Before: ${g[r]}, Now: ${o}`),b("Feeding failure detected - possible desynchronization");return}h(`HP increased successfully after feeding (${g[r]} -> ${o})`),g[r]=void 0}var i=t.querySelector('span[aria-label="Feed Kami"] button');i?(h(`Found feed button for ${n}: ${i.id||i.className||"No ID/unique class"}`),h(`Initiating feeding sequence. Current HP: ${o}`),i.click(),h("Clicked feed button for kami"),setTimeout(function(){var e=!1;document.querySelectorAll("div").forEach(function(t){t.textContent.includes("Maple-Flavor Ghost Gum (+25hp)")&&(t.click(),e=!0,g[r]=o,h(`Fed ${n} with Maple-Flavor Ghost Gum. HP before feeding: ${o}`))}),e||(h("Maple-Flavor Ghost Gum not found in the item list. Initiating evacuation due to no more food."),b("No more food"))},500)):h(`Feed button not found for ${n}`)}(t,i,f))}}}else h("Info container not found for this kami.")}}),console.log("Current Kami HP History:",v),function e(){for(let t in v){var n=v[t];if(20===n.length&&n.every(e=>e===n[0])){h(`Desynchronization detected for ${t}. Initiating evacuation.`),h(`HP history for ${t}: ${n.join(", ")}`),b("Frontend desynchronization detected");break}}}(),h("Scanning for kami HP again in 180 seconds"),x(180))}function b(e){var t,n=document.getElementById("node");if(!n){h("Node div not found.");return}var o=n.querySelectorAll('span[aria-label="Stop Harvest"]');if(0===o.length){h("No kamis currently harvesting.");return}o.forEach(t=>{var n=t.querySelector("button");n?(n.click(),h(`Stopped kami from harvesting. Reason: ${e}`)):h("Stop button not found within Stop Harvest span.")}),t=e,d.textContent=`Kamis evacuated, reason: ${t}`}f.addEventListener("click",function e(){(m=!m)?(c.textContent="(Bot is paused)",c.style.color="orange",f.textContent="Resume Bot"):(c.style.color="black",f.textContent="Pause Bot",x(180))}),p.addEventListener("click",function n(){clearInterval(e),clearInterval(t),c.remove(),d.remove(),s.remove(),r.remove(),document.querySelectorAll(".missing-hp-indicator").forEach(e=>e.remove()),h("KamiBot terminated.")}),u.addEventListener("click",()=>b("Manual evacuation")),y(),e=setInterval(y,18e4)}();