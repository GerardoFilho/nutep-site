// src/components/DoacaoPix.jsx
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import { montarPixCopiaCola } from "../../utils/pix"; // seu util que monta EMV

const PrimaryBtn = styled.button`
  margin-top: 8px;
  background-color: transparent;
  border: 2px solid #48af66;
  border-radius: 24px;
  color: #48af66;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: #48af66;
    color: #fff;
  }

  /* Seta (→) opcional */
  &::after {
    content: ">";
    font-size: 14px;
    margin-left: 4px;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 9999;
`;
const Modal = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  width: min(560px, 92vw);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;
const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 8px 0 12px;
`;
const GhostBtn = styled.button`
  background: transparent;
  color: #09aa64;
  border: 2px solid #09aa64;
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  &:hover {
    background: #eafff1;
  }
`;

function normalizarValor(valor) {
  if (!valor) return "";
  const limpo = String(valor)
    .replace(/[^0-9,.]/g, "")
    .replace(",", ".");
  const num = parseFloat(limpo);
  return isNaN(num) ? "" : num.toFixed(2);
}

/**
 * valorPreset: string "20.00" (opcional).
 * Será aplicado somente quando o usuário clicar para abrir a modal.
 */
export default function DoacaoPix({ valorPreset }) {
  const [aberta, setAberta] = useState(false);
  const [valor, setValor] = useState("");
  const [copiado, setCopiado] = useState(null);

  const valorFormatado = useMemo(() => normalizarValor(valor), [valor]);

  const payload = useMemo(() => {
    const paramsBase = {
      poi: "11",
      chave: "doarnutep@nutep.org.br",
      nomeRecebedor: "NUCLEO DE TRATAMENTO E ESTIMULACAO PRECOCE - NUTEP",
      cidade: "FORTALEZA",
      valor: "20.00",
      txid: "DOARSITENUTEP",
    };
    return montarPixCopiaCola({
      ...paramsBase,
      valor: valorFormatado || undefined,
    });
  }, [valorFormatado]);

  function abrirModal() {
    if (valorPreset) setValor(valorPreset);
    setAberta(true);
  }

  async function copiar() {
    try {
      await (navigator.clipboard?.writeText
        ? navigator.clipboard.writeText(payload)
        : (function () {
            const ta = document.createElement("textarea");
            ta.value = payload;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
          })());
      setCopiado("ok");
      setTimeout(() => setCopiado(null), 2000);
    } catch {
      setCopiado("erro");
      setTimeout(() => setCopiado(null), 2000);
    }
  }

  return (
    <>
      <PrimaryBtn onClick={abrirModal}>Doar</PrimaryBtn>

      {aberta && (
        <Backdrop role="dialog" aria-modal="true" aria-label="Doação via Pix">
          <Modal>
            <h4 style={{ marginTop: 0, color: "#072d4b" }}>Doação via Pix</h4>

            <div
              style={{
                background: "#fff",
                padding: 12,
                borderRadius: 12,
                display: "grid",
                placeItems: "center",
              }}
            >
              <QRCode value={payload} size={220} />
            </div>

            <div style={{ marginTop: 10, fontSize: 12, color: "#555" }}>
              Copie o código Pix abaixo (ou escaneie o QR):
            </div>
            <div
              style={{
                marginTop: 6,
                wordBreak: "break-all",
                fontSize: 12,
                color: "#333",
                maxHeight: 120,
                overflowY: "auto",
              }}
            >
              {payload}
            </div>

            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <PrimaryBtn onClick={copiar}>
                {copiado === "ok" ? "Copiado ✔" : "Copiar código Pix"}
              </PrimaryBtn>
              <GhostBtn onClick={() => setAberta(false)}>Fechar</GhostBtn>
            </Row>
          </Modal>
        </Backdrop>
      )}
    </>
  );
}
