import{_ as i}from"./index-9f0a276a.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-b2f9c3f8.js"),["assets/LifeUpdater-b2f9c3f8.js","assets/ValueWithRandom-da03c229.js","assets/index-9f0a276a.js","assets/index-f480d8c2.css"]);return new r(e)},a)}export{d as loadLifeUpdater};
