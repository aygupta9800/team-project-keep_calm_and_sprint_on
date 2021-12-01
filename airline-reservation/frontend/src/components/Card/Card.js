import React, { useState } from "react"
import image1 from '../../images/carousel1.jpg';
import axios from "axios";
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import PopUp from '../../components/Popup/Popup';
import {Link} from 'react-router-dom';

export default function Card(props){
  //  console.log(props)
    const [open, setOpen] = useState(false);
    //const imageURL = `http://${window.location.hostname}:3001/resources/${props.item.dishImage}`;
    const imageURL = `http://${window.location.hostname}:3001` + props.item.dishImage;
    const [message, setMessage] = useState('Dish has been added to the cart!');

    var addToCart = (flag)=>{
        const headerConfig = {
            headers: {
                'x-authentication-header': localStorage.getItem('token')
            }
        }
        if(flag === 2){
            axios.get(`http://${window.location.hostname}:3001/addToCart/` + props.item._id+"?type="+flag, headerConfig)
        .then(
            res => {
               props.refreshCart()
                setOpen(true);
                setTimeout(()=>{
                    setOpen(false);
                }, 2000)
            }
        )
            setMessage('Dish has been added to the Favorite!');
        }else{
            flag=0;
            axios.get(`http://${window.location.hostname}:3001/addToCart/` + props.item._id+"?type="+flag, headerConfig)
        .then(
            res => {
               props.refreshCart()
                setOpen(true);
                setTimeout(()=>{
                    setOpen(false);
                }, 2000)
            }
        )
        }
        //console.log(flag);
        
    }
    function addToFavorite(){
        addToCart(2);
    }

    return(
    <div className="cardBody">
            <Link to={'/my-restaurant?resId='+ props.item.restaurantMobileNumber}><img className="card-img-top" src={imageURL} alt="Card image cap" /></Link>
                <div className="card-body">
                <h5 className="card-title">{props.item.restaurant}</h5>
                            {console.log("restaurant details", props.item)}
                            <div className="d-flex justify-content-between align-items-center p-2">
                                    <span className="card-text">{props.item.dishName}</span> 
                                     <span className="card-text">{props.item.dishPrice || props.item.itemPrice+ '$'}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                    <span className="card-text">{props.item.restaurantId.name}</span> 
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <Link to={'/my-restaurant?resId='+ props.item.mobileNumber}><span style={{color: '#06c167', fontSize: '14px'}} className="card-text">{props.item.name}</span></Link> 
                            </div> 

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <IconButton className="addToCart" aria-label="add to favorites" onClick={addToCart}>
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    
                                    <IconButton className="favoriteButton" onClick={addToFavorite} aria-label="add to favorites" style={{color: props.item.checkedOut  == 2 ? 'red' : ''}}>
                                        <FavoriteIcon />
                                    </IconButton>
                                </div>  
 
                                {props.item.dishTag =='Veg' ? <CircleIcon style={{color: 'green', fontSize: '20px', right: 0}}/> : <CircleIcon style={{color: 'red', fontSize: '20px'}}/>}
                            </div>
                            </div>
                            <PopUp open={open} message={message}/>
                    </div>   
    )
}