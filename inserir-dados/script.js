
const enviar = document.getElementById('enviar');
enviar.addEventListener('click', go);

function go() {
    const data = document.getElementById('inserir-data').value;
    document.getElementById('databombeio').innerHTML = data;

    const num_bomb = document.getElementById('inserir-bombeio-num').value;
    document.getElementById('numerobombeio').innerHTML = num_bomb;

    const num_tanque = document.getElementById('inserir-num-tanque').value;
    document.getElementById('numero-tq-receb').innerHTML = num_tanque;

    const produto = document.getElementById('inserir-produto').value;
    document.getElementById('produto').innerHTML = produto;

    const alt_inic_mm = document.getElementById('inserir-alt-inicial').value;
    document.getElementById('alt-inic').innerHTML = alt_inic_mm;

    const alt_inic_mt = document.getElementById('inserir-alt-inicial').value;
    const alt_inic_mt_litros = (alt_inic_mt * 183)/1000;
    document.getElementById('mt-inic').innerHTML = alt_inic_mt_litros;

    const esp_vazio_mm = document.getElementById('alt-seg-mm').innerHTML;
    document.getElementById('esp-vazio-mm').innerHTML = esp_vazio_mm - alt_inic_mm;

    const esp_vazio_mt = document.getElementById('alt-seg-mt').innerHTML;
    const mtiniclitros = (alt_inic_mt * 183)/1000;
    const esp_vazio_inicial = document.getElementById('esp-vazio-mt').innerHTML = (esp_vazio_mt - mtiniclitros).toFixed(0);

    const cota = document.getElementById('inserir_cota_receber').value;
    document.getElementById('cota').innerHTML = cota;

    const alt_final_mm = document.getElementById('cota').innerHTML;
    document.getElementById('altura-final-mm').innerHTML = parseInt(alt_final_mm * 1000 / 183) + parseInt(alt_inic_mm);

    const alt_final_mt = document.getElementById('cota').innerHTML;
    document.getElementById('altura-final-mt').innerHTML = parseInt(alt_final_mt) + parseInt(alt_inic_mt_litros);

    const altura_final_mm = document.getElementById('altura-final-mm').innerHTML = parseInt(alt_final_mm * 1000 / 183) + parseInt(alt_inic_mm);
    const altura_final_mt = document.getElementById('altura-final-mt').innerHTML;
    
    if ( esp_vazio_mm < altura_final_mm )
    {
        document.getElementById('altura-final-mm').style.backgroundColor = "grey";
    }
    else 
    {
        document.getElementById('altura-final-mm').style.backgroundColor = "green";
    }

    if ( esp_vazio_mt < altura_final_mt )
    {
        document.getElementById('altura-final-mt').style.backgroundColor = "grey";
    }
    else 
    {
        document.getElementById('altura-final-mt').style.backgroundColor = "green";
    }

    if ( esp_vazio_inicial < cota )
    {
        document.getElementById('cota').style.backgroundColor = "grey";
    }
    else 
    {
        document.getElementById('cota').style.backgroundColor = "green";
    }
}