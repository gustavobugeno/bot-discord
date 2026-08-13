
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// ===============================
// PANEL ZVZ (antes crearpanel)
// ===============================
let cuposZVZ = {
    caller: "Vacante",
    lecho1: "Vacante",
    lecho2: "Vacante",
    silence: "Vacante",
    paratempo: "Vacante",
    santi1: "Vacante",
    santi2: "Vacante",
    infortunio: "Vacante",
    exaltado: "Vacante",
    juradores: "Vacante",
    locus: "Vacante",
    enraizado: "Vacante",
    lifecurse: "Vacante",
    putrefacto: "Vacante",
    damnation: "Vacante",
    prisma: "Vacante",
    rompe: "Vacante",
    caza: "Vacante",
    arcolargo1: "Vacante",
    arcolargo2: "Vacante",
    fisurante1: "Vacante",
    fisurante2: "Vacante",
    puas: "Vacante",
    cancion1: "Vacante",
    cancion2: "Vacante",
    torre: "Vacante",
    martillolargo: "Vacante",
    stoperhielo: "Vacante"
};

let panelZVZMessageId = null;
let panelZVZChannelId = null;
let mensajeZVZ = "";

// ===============================
// PANEL AVA
// ===============================
let cuposAVA = {
    martillo: "Vacante",
    offtank: "Vacante",
    silence: "Vacante",
    healer: "Vacante",
    raizferrea1: "Vacante",
    raizferrea2: "Vacante",
    dps1: "Vacante",
    dps2: "Vacante",
    dps3: "Vacante",
    dps4: "Vacante",
    dps5: "Vacante",
    sc: "Vacante"
};

let panelAVAMessageId = null;
let panelAVAChannelId = null;
let mensajeAVA = "";

// ===============================
// PANEL GRUPAL
// ===============================
let cuposGRUPAL = {
    tanque: "Vacante",
    healer: "Vacante",
    shadowcaller: "Vacante",
    flamigero: "Vacante",
    prisma: "Vacante",
    dps1: "Vacante"

};

let panelGRUPALMessageId = null;
let panelGRUPALChannelId = null;
let mensajeGRUPAL = "";

// ===============================
// PANEL ZVZ MELEE
// ===============================
let cuposZVZMELEE = {
    caller: "Vacante",
    pesada: "Vacante",
    martillo: "Vacante",
    ga: "Vacante",
    juradores: "Vacante",
    enrazaido: "Vacante",
    locus: "Vacante",
    lifecurse: "Vacante",
    damnation: "Vacante",
    santificador1: "Vacante",
    santificador2: "Vacante",
    santificador3: "Vacante",
    infortunio: "Vacante",
    rompe: "Vacante",
    puas: "Vacante",
    ozunas: "Vacante",
    brazales1: "Vacante",
    brazales2: "Vacante",
    astral: "Vacante",
    hachas1: "Vacante",
    hachas2: "Vacante",
    dps: "Vacante",
    equilibrio: "Vacante",
    stoper: "Vacante"
};

let panelZVZMELEEMessageId = null;
let panelZVZMELEEChannelId = null;
let mensajeZVZMELEE = "";

// ===============================
// EVENTO MENSAJE
// ===============================
client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const contenido = message.content.toLowerCase().trim();

    // ============================================
    // CREAR PANEL ZVZ
    // ============================================
    if (contenido.startsWith('!panelzvz')) {
        await message.delete().catch(() => {});

        for (let puesto in cuposZVZ) cuposZVZ[puesto] = "Vacante";

        const match = message.content.match(/\((.*?)\)/);
        mensajeZVZ = match ? match[1] : "";

        const textoAviso = "@everyone **Panel ZVZ — Anótense** 🔥";
        const panelText = generarPanelZVZ();

        const sentMessage = await message.channel.send(`${textoAviso}\n\n${panelText}`);

        panelZVZMessageId = sentMessage.id;
        panelZVZChannelId = message.channel.id;

        return;
    }

    // ============================================
    // CREAR PANEL AVA
    // ============================================
    if (contenido.startsWith('!panelava')) {
        await message.delete().catch(() => {});

        for (let puesto in cuposAVA) cuposAVA[puesto] = "Vacante";

        const match = message.content.match(/\((.*?)\)/);
        mensajeAVA = match ? match[1] : "";

        const textoAviso = "@everyone **Panel AVA — Anótense** ⚔️🔥";
        const panelText = generarPanelAVA();

        const sentMessage = await message.channel.send(`${textoAviso}\n\n${panelText}`);

        panelAVAMessageId = sentMessage.id;
        panelAVAChannelId = message.channel.id;

        return;
    }

    // ============================================
    // CREAR PANEL GRUPAL
    // ============================================
    if (contenido.startsWith('!panelgrupal')) {
        await message.delete().catch(() => {});

        for (let puesto in cuposGRUPAL) cuposGRUPAL[puesto] = "Vacante";

        const match = message.content.match(/\((.*?)\)/);
        mensajeGRUPAL = match ? match[1] : "";

        const textoAviso = "@everyone **Panel GRUPAL — Anótense** ⚔️🔥";
        const panelText = generarPanelGRUPAL();

        const sentMessage = await message.channel.send(`${textoAviso}\n\n${panelText}`);

        panelGRUPALMessageId = sentMessage.id;
        panelGRUPALChannelId = message.channel.id;

        return;
    }

    // ============================================
    // CREAR PANEL ZVZ MELEE
    // ============================================
    if (contenido.startsWith('!panelzvzmele')) {
         await message.delete().catch(() => {});

        for (let puesto in cuposZVZMELEE) cuposZVZMELEE[puesto] = "Vacante";

        const match = message.content.match(/\((.*?)\)/);
        mensajeZVZMELEE = match ? match[1] : "";

        const textoAviso = "@everyone **Panel ZVZ MELEE — Anótense** ⚔️🔥";
        const panelText = generarPanelZVZMELEE();

        const sentMessage = await message.channel.send(`${textoAviso}\n\n${panelText}`);

        panelZVZMELEEMessageId = sentMessage.id;
        panelZVZMELEEChannelId = message.channel.id;

    return;
}

    // ============================================
    // ANOTARSE EN PANEL ZVZ
    // ============================================
    if (contenido.startsWith('!zvz-')) {
        const rol = contenido.replace('!zvz-', '');

        if (!cuposZVZ.hasOwnProperty(rol)) return;

        const nombre = `${message.member.displayName} (${message.guild.name})`;

        if (Object.values(cuposZVZ).includes(nombre)) return;

        if (cuposZVZ[rol] !== "Vacante") return;

        cuposZVZ[rol] = nombre;

        await actualizarPanelZVZ();
        await message.react('✅');
        return message.delete().catch(() => {});
    }

    // ============================================
    // ANOTARSE EN PANEL AVA
    // ============================================
    if (contenido.startsWith('!ava-')) {
        const rol = contenido.replace('!ava-', '');

        if (!cuposAVA.hasOwnProperty(rol)) return;

        const nombre = `${message.member.displayName} (${message.guild.name})`;

        if (Object.values(cuposAVA).includes(nombre)) return;

        if (cuposAVA[rol] !== "Vacante") return;

        cuposAVA[rol] = nombre;

        await actualizarPanelAVA();
        await message.react('✅');
        return message.delete().catch(() => {});
    }

    // ============================================
    // ANOTARSE EN PANEL GRUPAL
    // ============================================
    if (contenido.startsWith('!gr-')) {
        const rol = contenido.replace('!gr-', '');

        if (!cuposGRUPAL.hasOwnProperty(rol)) return;

        const nombre = `${message.member.displayName} (${message.guild.name})`;

        if (Object.values(cuposGRUPAL).includes(nombre)) return;

        if (cuposGRUPAL[rol] !== "Vacante") return;

        cuposGRUPAL[rol] = nombre;

        await actualizarPanelGRUPAL();
        await message.react('✅');
        return message.delete().catch(() => {});
    }
    // ============================================
    // ANOTARSE EN PANEL ZVZ MELEE
    // ============================================
    if (contenido.startsWith('!mele-')) {
        const rol = contenido.replace('!mele-', '');

        if (!cuposZVZMELEE.hasOwnProperty(rol)) return;

        const nombre = `${message.member.displayName} (${message.guild.name})`;

        if (Object.values(cuposZVZMELEE).includes(nombre)) return;

        if (cuposZVZMELEE[rol] !== "Vacante") return;

        cuposZVZMELEE[rol] = nombre;

        await actualizarPanelZVZMELEE();
        await message.react('✅');
        return message.delete().catch(() => {});
}

});

// ===============================
// FUNCIONES PANEL ZVZ
// ===============================
async function actualizarPanelZVZ() {
    const channel = await client.channels.fetch(panelZVZChannelId);
    const msg = await channel.messages.fetch(panelZVZMessageId);
    const textoAviso = "@everyone **Panel ZVZ — Anótense** 🔥";
    await msg.edit(`${textoAviso}\n\n${generarPanelZVZ()}`);
}

function generarPanelZVZ() {
    const f = p => cuposZVZ[p] === "Vacante" ? "*Vacante*" : `**${cuposZVZ[p]}**`;
    let n = 1;

    return `
### 📋 **PANEL ZVZ**
--------------------------------------------------
${mensajeZVZ ? `📝 **Mensaje:** ${mensajeZVZ}\n--------------------------------------------------` : ""}
${n++}. 🍺 **Caller:** > ${f('caller')}
${n++}. 🟦 **Lecho 1:** > ${f('lecho1')}
${n++}. 🔇 **Silence:** > ${f('silence')}
${n++}. ⏱️ **Paratempo:** > ${f('paratempo')}
${n++}. 🐉 **Santi 1:** > ${f('santi1')}
${n++}. 🐉 **Santi 2:** > ${f('santi2')}
${n++}. 🐉 **Infortunio:** > ${f('infortunio')}
${n++}. 🟨 **Exaltado:** > ${f('exaltado')}
${n++}. 🟨 **Juradores:** > ${f('juradores')}
${n++}. 🟨 **Locus:** > ${f('locus')}
${n++}. 🟨 **Enraizado:** > ${f('enraizado')}
${n++}. 🟨 **Lifecurse:** > ${f('lifecurse')}
${n++}. 🟨 **Putrefacto:** > ${f('putrefacto')}
${n++}. 🟥 **Puas:** > ${f('puas')}
${n++}. 🟥 **Prisma:** > ${f('prisma')}
${n++}. 🟫 **Rompe:** > ${f('rompe')}
${n++}. 🟫 **Caza:** > ${f('caza')}
${n++}. 🟥 **Arcolargo 1:** > ${f('arcolargo1')}
${n++}. 🟥 **Fisurante 1:** > ${f('fisurante1')}
${n++}. 🟥 **Cancion: 1** > ${f('cancion1')}
${n++}. 🟥 **Fisurante 2:** > ${f('fisurante2')}
${n++}. 🟥 **Arcolargo 2:** > ${f('arcolargo2')}
${n++}. 🟥 **Cancion 2:** > ${f('cancion2')}
${n++}. 🟦 **Lecho 2:** > ${f('lecho2')}
${n++}. 🟦 **Martillolargo:** > ${f('martillolargo')}
${n++}. 🟦 **Stoperhielo:** > ${f('stoperhielo')}
${n++}. 🚑 **Torre:** > ${f('torre')}
${n++}. 🟨 **Damnation:** > ${f('damnation')}
--------------------------------------------------
`;
}

// ===============================
// FUNCIONES PANEL AVA
// ===============================
async function actualizarPanelAVA() {
    const channel = await client.channels.fetch(panelAVAChannelId);
    const msg = await channel.messages.fetch(panelAVAMessageId);
    const textoAviso = "@everyone **Panel AVA — Anótense** ⚔️🔥";
    await msg.edit(`${textoAviso}\n\n${generarPanelAVA()}`);
}

function generarPanelAVA() {
    const f = p => cuposAVA[p] === "Vacante" ? "*Vacante*" : `**${cuposAVA[p]}**`;
    let n = 1;

    return `
### ⚔️ **PANEL AVA**
--------------------------------------------------
${mensajeAVA ? `📝 **Mensaje:** ${mensajeAVA}\n--------------------------------------------------` : ""}
${n++}. 🔨 **Martillo:** > ${f('martillo')}
${n++}. 🔨 **Offtank:** > ${f('offtank')}
${n++}. 🔇 **Silence:** > ${f('silence')}
${n++}. 🐉 **Healer:** > ${f('healer')}
${n++}. 🌿 **Raiz Ferrea 1:** > ${f('raizferrea1')}
${n++}. 🌿 **Raiz Ferrea 2:** > ${f('raizferrea2')}
${n++}. 🟥 **DPS 1:** > ${f('dps1')}
${n++}. 🟥 **DPS 2:** > ${f('dps2')}
${n++}. 🟥 **DPS 3:** > ${f('dps3')}
${n++}. 🟥 **DPS 4:** > ${f('dps4')}
${n++}. 🟥 **DPS 5:** > ${f('dps5')}
${n++}. 🚑 **SC:** > ${f('sc')}
--------------------------------------------------
`;
}

// ===============================
// FUNCIONES PANEL GRUPAL
// ===============================
async function actualizarPanelGRUPAL() {
    const channel = await client.channels.fetch(panelGRUPALChannelId);
    const msg = await channel.messages.fetch(panelGRUPALMessageId);
    const textoAviso = "@everyone **Panel GRUPAL — Anótense** ⚔️🔥";
    await msg.edit(`${textoAviso}\n\n${generarPanelGRUPAL()}`);
}

function generarPanelGRUPAL() {
    const f = p => cuposGRUPAL[p] === "Vacante" ? "*Vacante*" : `**${cuposGRUPAL[p]}**`;
    let n = 1;

    return `
### ⚔️ **PANEL GRUPAL**
--------------------------------------------------
${mensajeGRUPAL ? `📝 **Mensaje:** ${mensajeGRUPAL}\n--------------------------------------------------` : ""}
${n++}. 🛡️ **Tanque:** > ${f('tanque')}
${n++}. 🐉 **Healer:** > ${f('healer')}
${n++}. 🔥 **Shadowcaller:** > ${f('shadowcaller')}
${n++}. 🔥 **Flamigero:** > ${f('flamigero')}
${n++}. 💎 **Prisma:** > ${f('prisma')}
${n++}. 🟥 **DPS 1:** > ${f('dps1')}

--------------------------------------------------
`;
}
// ===============================
// FUNCIONES PANEL ZVZ-MELEE
// ===============================
async function actualizarPanelZVZMELEE() {
    try {
        const channel = await client.channels.fetch(panelZVZMELEEChannelId);
        const msg = await channel.messages.fetch(panelZVZMELEEMessageId);

        const textoAviso = "@everyone **Panel ZVZ MELEE — Anótense** ⚔️🔥";
        await msg.edit(`${textoAviso}\n\n${generarPanelZVZMELEE()}`);

    } catch (err) {
        console.log("⚠️ No se pudo actualizar el panel ZVZ MELEE.");
    }
}
function generarPanelZVZMELEE() {
    const f = p => cuposZVZMELEE[p] === "Vacante" ? "*Vacante*" : `**${cuposZVZMELEE[p]}**`;
    let n = 1;

    return `
### ⚔️ **PANEL ZVZ MELEE**
--------------------------------------------------
${mensajeZVZMELEE ? `📝 **Mensaje:** ${mensajeZVZMELEE}\n--------------------------------------------------` : ""}

${n++}. 🍺 **Caller:** > ${f('caller')}
${n++}. 🟦 **Pesada:** > ${f('pesada')}
${n++}. 🔨 **Martillo:** > ${f('martillo')}
${n++}. 🔥 **GA:** > ${f('ga')}
${n++}. ⚖️ **Juradores:** > ${f('juradores')}
${n++}. 🌿 **Enrazaido:** > ${f('enrazaido')}
${n++}. 📍 **Locus:** > ${f('locus')}
${n++}. 💀 **Lifecurse:** > ${f('lifecurse')}
${n++}. 🔥 **Damnation:** > ${f('damnation')}
${n++}. 🐉 **Santificador 1:** > ${f('santificador1')}
${n++}. 🐉 **Santificador 2:** > ${f('santificador2')}
${n++}. 🐉 **Santificador 3:** > ${f('santificador3')}
${n++}. 🐉 **Infortunio:** > ${f('infortunio')}
${n++}. 🟫 **Rompe:** > ${f('rompe')}
${n++}. 🟥 **Puas:** > ${f('puas')}
${n++}. 🟥 **Ozunas:** > ${f('ozunas')}
${n++}. 🟦 **Brazales 1:** > ${f('brazales1')}
${n++}. 🟦 **Brazales 2:** > ${f('brazales2')}
${n++}. 🌌 **Astral:** > ${f('astral')}
${n++}. 🪓 **Hachas 1:** > ${f('hachas1')}
${n++}. 🪓 **Hachas 2:** > ${f('hachas2')}
${n++}. 🟥 **DPS:** > ${f('dps')}
${n++}. ⚖️ **Equilibrio:** > ${f('equilibrio')}
${n++}. 🟦 **Stoper:** > ${f('stoper')}

--------------------------------------------------
💡 Usa comandos como \`!mele-caller\`, \`!mele-martillo\`, \`!mele-hachas1\`.  
💡 Usa \`!salir\` para desanotarte.
`;
}


client.login(process.env.DISCORD_TOKEN);
