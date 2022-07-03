import React,{useState} from 'react'
import { connect } from "react-redux";
import { Router,Switch,Route,NavLink } from 'react-router-dom';
import Login from './Login.js';
import { listeyeEkle,isaretle,temizle } from "../actions/index.js";
import './Form.css';

const Form = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
   
    const[text,setText]=useState("");
    const renderForm=(
    <div className='container'>
    
    <form className='row'>
      <div className='col-md-4'>
        <div className='form-group mb-3'>
      <button type="button" className=' btn-secondary btn-sm ' onClick={()=>{
        setIsSubmitted(true)
      }}  >ÇIKIŞ YAP</button>
      </div>
      </div>
    </form>
    <form className='row'>
     <div className='col-md-12'>
        <div className='form-group mb-3'>
        <h1>Yapılacaklar listesi</h1>
        <div className="ekleme_formu">
          <input placeholder="Görev ekle" color='white' value={text} onChange={e=>setText(e.target.value)}/>
          <button type='button' onClick={()=>{
            setText('');
            props.listeyeEkle(text)}}>Ekle</button>
        </div>
      <div className="liste">
        {props.liste.map(item=>(
          <div onClick={()=> props.isaretle(item.id)} key={item.id} className={item.tamamlandi ? "yapildi":""}>{item.baslik}</div>))}
      </div>
      <button className="temizle" type={'button'} onClick={()=>props.temizle()}>Tamamlananları temizle</button>
      </div>
     </div>
     </form>
   
    </div>);
    console.log("a");
  return (
   
   <div>{isSubmitted ?<div>{secimegidis()}</div>:renderForm}</div>
  );
}

const mapStateToProps=(state)=>{
    return{liste: state.liste}
  }
  function secimegidis(){
    return(
        <Login/>
        
    );

};
  export default connect (mapStateToProps,{listeyeEkle,isaretle,temizle})(Form)