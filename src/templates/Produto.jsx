import { useState } from "react";
export default function Produto(props){
    const [quantidade, setQuantidade] = useState(1);
    const produto= {
        image:'',
        description:'',
        title:'',
        price: '',
        rating: {
            rate: ''
        }
    }

    function manipularCompra(){
        produto.image = props.produto.image;
        produto.description = props.produto.description;
        produto.title = props.produto.title;
        produto.price = props.produto.price;
        produto.rating.rate = props.produto.rating.rate;
    }

    return(
        <div style={{
            width: '200px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '10px',
            padding: '10px',
            marginBottom: '40px'
        }}>
            <div style={{
                width:'100px',
                height: '100px',
            }}
            id='imagem-produto'>
                <img style={{
                     width:"100%",
                     height:"100%"
                }} src={props.produto?.image || ''} 
                   alt={props.produto?.description || ''}/>
            </div>
            <div style={{height: '40px'}} id='titulo-produto'>
                <p><strong>{props.produto?.title.substring(0, 20)}</strong></p>
            </div>
            <div style={{
                color: 'rgb(0,120,0)',
            }} id='preco-produto'>
                <p><strong>R$ {props.produto?.price}</strong></p>
            </div>
            <div style={{
                
            }}id="opinioes-produoto">
                <span>{((props.produto ? props.produto.rating.rate : 0) * 20) || 0}% gostaram</span>
            </div>
            <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                id='quantidade-selecionada'>
                <p style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    margin: '0px',
                    padding: '0px',
                    marginRight: '10px',
                }}>Quantidade:</p>
                <input 
                    style={{
                        width: '40px',
                        border: '0px',
                        outline: 'none',
                    }}
                    type="number" 
                    value={quantidade} 
                    onChange={(e) => setQuantidade(e.target.value)} 
                    step={1}
                    min={1}/>
            </div>
            <div id='botao-comprar'>
                <button 
                    onClick={()=>{
                        props.setQtdeCarrinho(Number(props.qtdeCarrinho+1));
                        manipularCompra();
                        props.setListaCarrinho([...props.listaCarrinho, produto]);
                        localStorage.setItem('qtdeCarrinho', props.qtdeCarrinho);
                        localStorage.setItem('listaCarrinho', props.listaCarrinho);
                    }}
                    style={{
                        backgroundColor: 'rgb(255,60,60)',
                        color: 'white',
                        border: '0px',
                        borderRadius:'10px',
                        height: '40px',
                        width: '120px',
                    }}
                    type='button'>
                        Comprar
                </button>
            </div>
        </div>
    )
}