import GradeCarrinho from "./componentes/GradeCarrinho";
import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
  }, []);

  const [produtos, setProdutos] = useState([]);
  const [qtdeCarrinho, setQtdeCarrinho] = useState(()=>{
    let qtde= Number(localStorage.getItem('qtdeCarrinho'))
    if(qtde){
      return qtde;
    }
    localStorage.setItem('qtdeCarrinho', 0);
    return 0;
  });
  const [exibirCarrinho, setExibirCarrinho] = useState(false);
  const [listaCarrinho, setListaCarrinho] = useState([]);

  if (exibirCarrinho) {
    return (
      <div>
        <Cabecalho />
        <GradeCarrinho setExibirCarrinho={setExibirCarrinho}
        listaCarrinho={listaCarrinho}
        setListaCarrinho={setListaCarrinho}
        />
      </div>

    );
  }
  else {
    return (
      <div className="App">
        <Cabecalho />
        <BarraBusca
          qtdeCarrinho={qtdeCarrinho}
          setExibirCarrinho={setExibirCarrinho}
          listaCarrinho={listaCarrinho}
          setListaCarrinho={setListaCarrinho}
        />
        <GradeProdutos
          listaProdutos={produtos}
          qtdeCarrinho={qtdeCarrinho}
          setQtdeCarrinho={setQtdeCarrinho}
          listaCarrinho={listaCarrinho}
          setListaCarrinho={setListaCarrinho}
        />
      </div>
    );
  }

}

export default App;
