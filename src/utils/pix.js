// src/utils/pix.js
// Gera payload EMV Pix com CRC16-CCITT (0x1021)

const emv = (id, value) => {
  const len = String(value.length).padStart(2, "0");
  return `${id}${len}${value}`;
};

// CRC16-CCITT
function crc16(payload) {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc = crc << 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

/**
 * Monta o payload Pix "Copia e Cola"
 * @param {Object} params
 * @param {string} params.chave - chave Pix (e-mail, aleatória, cpf, cnpj, telefone)
 * @param {string} params.nomeRecebedor - até 25 chars recomendados
 * @param {string} params.cidade - até 15 chars recomendados
 * @param {string} [params.valor] - "12.34" (duas casas decimais). Se omitir, pagador escolhe o valor.
 * @param {string} [params.txid] - até 25 chars
 */
export function montarPixCopiaCola({
  chave,
  nomeRecebedor,
  cidade,
  valor,
  txid = "TX123",
}) {
  // 00 - Payload Format Indicator
  const pfi = emv("00", "01");
  // 01 - Point of Initiation Method (11 = estático, 12 = dinâmico)
  const poiMethod = emv("01", "11");

  // 26 - Merchant Account Information
  const gui = emv("00", "BR.GOV.BCB.PIX");
  const chaveField = emv("01", chave);
  const mai = emv("26", gui + chaveField);

  // 52 - MCC; 53 - Moeda (986 = BRL)
  const mcc = emv("52", "0000");
  const currency = emv("53", "986");
  const amount = valor ? emv("54", valor) : ""; // opcional
  const country = emv("58", "BR");

  // 59 - Nome; 60 - Cidade (corte por segurança)
  const merchantName = emv("59", (nomeRecebedor || "").slice(0, 25));
  const merchantCity = emv("60", (cidade || "").slice(0, 15));

  // 62 - Additional Data Field (inclui TXID)
  const additional = emv("62", emv("05", (txid || "").slice(0, 25)));

  const semCRC =
    pfi +
    poiMethod +
    mai +
    mcc +
    currency +
    amount +
    country +
    merchantName +
    merchantCity +
    additional +
    "6304"; // 63 = CRC, 04 = tamanho do CRC

  const crc = crc16(semCRC);
  return semCRC + crc;
}
