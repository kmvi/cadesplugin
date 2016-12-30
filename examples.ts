function canAsync(cadesplugin: CADESPlugin): cadesplugin is CADESPluginAsync {
    return !!(cadesplugin as CADESPluginAsync).CreateObjectAsync;
}

async function getCertificatesListAsync(): Promise<void> {
    const plugin = cadesplugin as CADESPluginAsync;
    await plugin;

    const store = await plugin.CreateObjectAsync('CAPICOM.Store');

    await store.Open(
        plugin.CAPICOM_CURRENT_USER_STORE,
        plugin.CAPICOM_MY_STORE,
        plugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);

    const certificates = await store.Certificates;

    const div = document.getElementById('certs');
    if (div) {
        for (let i = 1; i <= await certificates.Count; ++i) {
            const cert = await certificates.Item(i);
            const elem = document.createElement('p');
            elem.innerText = await cert.Thumbprint;
            div.appendChild(elem);
        }
    }

    await store.Close();
}

document.addEventListener('DOMContentLoaded', () => {
    getCertificatesListAsync();
});