import { useState, useEffect } from "react";


export default function BuscadorPersonagens() {
  const[busca, setBusca] = useState("");
  const[termo, setTermo] = useState("");
  const[personagens, setPersonagens] = useState([]);
  const[carregando, setCarregando] = useState(false);
  const[erro, setErro] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {setTermo(busca)}, 500);
    return () => clearTimeout(timer);
  }, [busca]);

  useEffect(() => {
    const ctrl = new AbortController();

    async function carregar() {
      setCarregando(true);
      setErro(null);

      const url = termo
        ? `https://dragonball-api.com/api/characters?name=${encodeURIComponent(termo)}` : "https://dragonball-api.com/api/characters?limit=12";
        try {
          const resposta = await fetch(url, { signal: ctrl.signal });
          if (!resposta.ok) throw new Error("Erro ao buscar personagens");

        const json = await resposta.json();
        setPersonagens(Array.isArray(json) ? json : []);
        }catch (erro) {
          if (erro.name !== "AbortError") {
            setErro(erro.message);
          }
        } finally {
          setCarregando(false);
        }
    }

    carregar();

    return () => ctrl.abort();
  }, [termo]);

  return (
    <div>
      <input
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      placeholder="Buscar personagens"
      placeholder="Buscar personagens"
      />
      {carregando && <p>Carregando...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <ul>
        {personagens.map((personagem) => (
          <li key={personagem.id}>{personagem.name}</li>
        ))}
      </ul>
    </div>
  );
}