var frontend_block_accordion;(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t={duration:400,easing:"cubic-bezier(0.2, 0.6, 0.4, 1)"};var o;window.stackableAccordion=new class{init=()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=!("ResizeObserver"in window)||e,n=new ResizeObserver((e=>e.forEach((e=>{const o=e.borderBoxSize[0].blockSize,n=e.target;if(n.dataset.height=o,n.doAnimate){n.doAnimate=!1;const e=n.dataset.preHeight;n.style.userSelect="none",clearTimeout(n.textSelectTimeout);const i=!!n.closest(".stk-block-columns");let a=null;i&&(a=s(n)),n.anim=n.animate({height:[`${e}px`,`${o}px`]},t),o-e>=0&&(n.contentEl.anim=n.contentEl.animate({maxHeight:["0px",o-e+"px"]},t)),n.anim.onfinish=n.anim.oncancel=()=>{i&&r(n,a),n.style.userSelect="auto"},n.textSelectTimeout=setTimeout((()=>{n.style.userSelect="auto"}),700)}})))),i=new MutationObserver((function(e){e.forEach((function(e){const t=e.target;if(t.anim&&t.anim.cancel(),t.contentEl.anim&&t.contentEl.anim.cancel(),t.classList[Array.from(t.classList).includes("stk--is-open")?"remove":"add"]("stk--is-open"),t.dataset.preHeight=t.dataset.height,o||(t.doAnimate=!0),t.open&&t.classList.contains("stk--single-open")){let e=t.nextElementSibling;for(;e&&e.classList.contains("stk-block-accordion");)e.open&&(e.open=!1),e=e.nextElementSibling;for(e=t.previousElementSibling;e&&e.classList.contains("stk-block-accordion");)e.open&&(e.open=!1),e=e.previousElementSibling}t.open&&t.getBoundingClientRect().top<0&&t.scrollIntoView({inline:"start",block:"start",behavior:"instant"}),t.open&&t.getAttribute("id")&&window.location.hash!==t.getAttribute("id")&&history.pushState({},"",`#${t.getAttribute("id")}`),!t.hasAttribute("open")&&t.getAttribute("id")&&window.location.hash===`#${t.getAttribute("id")}`&&history.pushState({},"",window.location.href.replace(`#${t.getAttribute("id")}`,""))}))})),a=document.querySelectorAll(".stk-block-accordion"),c={};if(a.forEach((e=>{e._StackableHasInitAccordion||(e.contentEl=e.querySelector(".stk-block-accordion__content"),o||n.observe(e),i.observe(e,{attributeFilter:["open"],attributeOldValue:!0}),e.getAttribute("id")&&(c[e.getAttribute("id")]=e),e._StackableHasInitAccordion=!0)})),Object.keys(c).length){window.addEventListener("hashchange",(()=>{const e=window.location.hash.slice(1);e in c&&c[e].setAttribute("open","")}));const e=window.location.hash.slice(1);e in c&&c[e].setAttribute("open","")}const s=e=>{const t=document.createElement("div");t.classList.add("stk-block-accordion__wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e);const o=e.querySelector("summary .stk--svg-wrapper:not(.stk--has-icon2)");if(o){const t=e.open?{from:0,to:180}:{from:180,to:0};o.anim=o.animate({transform:[`rotate(${t.from}deg)`,`rotate(${t.to}deg)`]},{duration:700,easing:"cubic-bezier(0.2, 0.6, 0.4, 1)"})}return t},r=(e,t)=>{t.parentNode?.insertBefore(e,t),t?.remove()}}},window?.matchMedia("print").addEventListener("change",(e=>{if(e.matches){const e=document.querySelectorAll("details.stk-block-accordion:not([open])");for(const t of e)t.setAttribute("open",""),t.dataset.wasclosed=""}else{const e=document.body.querySelectorAll("details.stk-block-accordion[data-wasclosed]");for(const t of e)t.removeAttribute("open"),delete t.dataset.wasclosed}})),o=window.stackableAccordion.init,"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",o):o()),frontend_block_accordion=e})();