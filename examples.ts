function canAsync(cadesplugin: CADESPlugin): cadesplugin is CADESPluginAsync {
    return !!(cadesplugin as CADESPluginAsync).CreateObjectAsync;
}

function canSync(cadesplugin: CADESPlugin): cadesplugin is CADESPluginSync {
    return !!(cadesplugin as CADESPluginSync).CreateObject;
}

async function main(): Promise<void> {
    if (canAsync(cadesplugin)) {
        await cadesplugin;
        await getCertificatesListAsync(cadesplugin);
        const signature = await SignCreate(cadesplugin, '1628BD226C5BB9B56C860AFA9FE6C461D22F8DFF', 'data');
        if (signature !== null) {
            const result = await SignVerify(cadesplugin, signature, 'data');
            alert(result);
        }
    } else if (canSync(cadesplugin)) {
        // sync code
    }
}

async function getCertificatesListAsync(cadesplugin: CADESPluginAsync): Promise<void> {
    const store = await cadesplugin.CreateObjectAsync('CAPICOM.Store');

    await store.Open(
        cadesplugin.CAPICOM_CURRENT_USER_STORE,
        cadesplugin.CAPICOM_MY_STORE,
        cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);

    const certificates = await store.Certificates;

    const div = document.getElementById('certs');
    if (div) {
        for (let i = 1; i <= await certificates.Count; ++i) {
            const cert = await certificates.Item(i);
            const elem = document.createElement('p');
            elem.innerHTML = `${await cert.Thumbprint}<br/>${await cert.SubjectName}`;
            div.appendChild(elem);
        }
    }

    await store.Close();
}

async function SignCreate(cadesplugin: CADESPluginAsync, thumbprint: string, dataToSign: string): Promise<string | null> {
    const store = await cadesplugin.CreateObjectAsync('CAPICOM.Store');

    await store.Open(
        cadesplugin.CAPICOM_CURRENT_USER_STORE,
        cadesplugin.CAPICOM_MY_STORE,
        cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);

    const certs = await store.Certificates;
    const result = await certs.Find(cadesplugin.CAPICOM_CERTIFICATE_FIND_SHA1_HASH, thumbprint);

    if (await result.Count < 1) {
        alert('Certificate not found.');
        return null;
    }

    const cert = await result.Item(1);
    const signer = await cadesplugin.CreateObjectAsync('CAdESCOM.CPSigner');
    await signer.propset_Certificate(cert);

    const signedData = await cadesplugin.CreateObjectAsync('CAdESCOM.CadesSignedData');
    await signedData.propset_ContentEncoding(cadesplugin.CADESCOM_BASE64_TO_BINARY);
    await signedData.propset_Content(dataToSign);

    let signedMessage = '';
    try {
        signedMessage = await signedData.SignCades(signer, cadesplugin.CADESCOM_CADES_BES, true);
    } catch (err) {
        alert(cadesplugin.getLastError(err));
        return null;
    }

    await store.Close();

    return signedMessage;
}

async function SignVerify(cadesplugin: CADESPluginAsync, signature: string, origData: string): Promise<boolean> {
    const data = await cadesplugin.CreateObjectAsync('CAdESCOM.CadesSignedData');
    try {
        await data.propset_ContentEncoding(cadesplugin.CADESCOM_BASE64_TO_BINARY);
        await data.propset_Content(origData);
        await data.VerifyCades(signature, cadesplugin.CADESCOM_CADES_BES, true);
        return true;
    } catch (err) {
        alert(cadesplugin.getLastError(err));
        return false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main();
});