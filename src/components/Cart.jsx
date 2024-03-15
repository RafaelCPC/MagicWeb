import { useEffect, useState } from "react";
import Boton from "./Boton";
import Lists from "./Lists";
import CloseIcon from "./CloseIcon";
import DeleteIcon from "./DeleteIcon";
import ManaSvg from "./ManaSvg";
import { Link } from "react-router-dom";


function Cart({ isOpen, setOpen,setTotalCart,initContentCart }) {

	const [contentCart,setContentCart] = useState([])

    useEffect(()=>{
        if(localStorage.getItem("cart")){
            setContentCart(JSON.parse(localStorage.getItem("cart")))
        }else{
            setContentCart(initContentCart)  
        }
    },[])

    useEffect(()=>{
        if(!!contentCart[0]){
            localStorage.setItem("cart", JSON.stringify(contentCart));  
        }
        setTotalCart(contentCart.map(item=>item.total).reduce((a,b)=>a+b,0));
    },[contentCart])

	function handleIncreaseItem(id){
        setContentCart((prev)=>prev.map(item=>(item.id==id && item.total<10)?({...item,["total"]:item.total+1}):{...item}))  
    }

	function handleDecreaseItem(id){
        setContentCart((prev)=>prev.map(item=>(item.id==id && item.total>1)?({...item,["total"]:item.total-1}):{...item}))  
    }
       
    function handleDeleteCartItem(id) {
        setContentCart((prev)=>prev.filter(item=>item.id!==id))
    }


  return (
    isOpen && <>
		<div className="sections-overlay cart-overlay">
			<div>
				<div>
					<h3>Your Cart</h3>
					<Boton text={<CloseIcon/>} callback={()=>setOpen()} isDisabled={false} />
				</div>
				<ul>
					{contentCart.map((cartItem) => {
					return (
						<div key={cartItem.id}>
							<img src={cartItem.img} alt={`card ${cartItem.content[0]}`} width={80}/>
							<div>
								<Lists content={cartItem.content} />
							</div>
							<p>{(cartItem.price*cartItem.total).toFixed(2)} EUR</p>
							<div>
								<Boton text="+" callback={()=>handleIncreaseItem(cartItem.id)} isDisabled={false}/>
								<p>{cartItem.total}</p>
								<Boton text="-" callback={()=>handleDecreaseItem(cartItem.id)} isDisabled={false}/>
							</div>
							<Boton className="svg-delete-item" text={<DeleteIcon/>} callback={() => handleDeleteCartItem(cartItem.id)}/>
						</div>
					);
					})}
				</ul>
			<div>
				<Boton className="LoginFooterBar-button" text={<Link to={"/"}>"Continue Shopping"</Link>}/>
				<Boton className="LoginFooterBar-button" text={"Checkout"}/>
			</div>
			</div>
		</div>
		<ManaSvg/>
		</>
  );
}

export default Cart;
