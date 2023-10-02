import Produto from "../templates/Produto";
export default function GradeCarrinho(props) {
    const listaC = localStorage.getItem('listaCarrinho');

    const p = {
        image: '',
        description: '',
        title: '',
        price: '',
        rating: {
            rate: ''
        }
    };
    /*
    if (listaC.length > 0) {
        for (let i = 0; i < listaC.length; i++) {
            p.image = listaC[i].produto.image;
            p.description = listaC[i].produto.description;
            p.title = listaC[i].produto.title;
            p.price = listaC[i].produto.price;
            p.rating.rate = listaC[i].produto.rating.rate;
            props.setListaCarrinho([...props.listaCarrinho, p]);
        }
    }
    */
    return (
        <div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {props.listaCarrinho.map((produto) => (
                    <Produto key={produto.id} produto={produto}
                        setQtdeCarrinho={props.setQtdeCarrinho}
                        qtdeCarrinho={props.qtdeCarrinho}
                        listaCarrinho={props.listaCarrinho}
                        setListaCarrinho={props.setListaCarrinho}
                    />
                ))}
            </div>

            <div style={{
                textAlign: 'center',
                margin: '4px',
                padding: '2px',
                width: '40px'
            }}>
                <button id='botao-carrinho' style={{
                    backgroundColor: "inherit",
                    border: '0px',
                }
                } type='button'
                    onClick={() => {
                        props.setExibirCarrinho(false);
                    }}>
                    Voltar
                </button>
            </div>
        </div>
    );
}