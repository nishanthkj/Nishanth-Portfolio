import{s as o,_ as r}from"./index-9f0a276a.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-707b16ec.js"),["assets/Remover-707b16ec.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-9f0a276a.js","assets/index-f480d8c2.css"]);return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
