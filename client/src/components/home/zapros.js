import { useState } from "react";
import { sendForm } from "../../https";

function Zapros() {
  const [text, setText] = useState('')
  const [select, setSelect] = useState('Проблема с ПО')
  const [res, setRes] = useState()

  const changeSelect = (value) => {
    setSelect(value.target.value)
  }

  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

  const sendButton = () => {
    sendForm(user.name, select, text, user.id).then(data => setRes(data))
    alert('succes')
  }
  
  return (
    <div className="d-flex align-items-center py-4 " style={{width: '420px', margin: 'auto', height: '720px'}}>
      <main className="form-signin w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal" style={{color: '#fff'}}>Форма</h1>
          <div className="form-floating mb-2">
            <textarea 
              type="text" 
              className="form-control" 
              id="floatingText" 
              placeholder="text" 
              style={{resize: 'none', height: '150px'}}
              setValue={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label for="floatingPassword">Описание</label>
          </div>
          <div className="form-floating mb-2">
            <select className="form-control" onChange={changeSelect}>
              <option value={'Проблема с ПО'}>Проблема с ПО</option>
              <option value={'Проблема с функционалом'}>Проблема с функционалом</option>
              <option value={'Данные о документе'}>Данные о документе</option>
              <option value={'Данные о заказе'}>Данные о заказе</option>
            </select>
          </div>
          {text === '' || select === '' ?
            <button className="btn btn-primary  w-100 py-2" style={{backgroundColor: '#333', borderColor:'#333' }}  disabled>Отправить</button>
            :
            <button className="btn btn-primary w-100 py-2"style={{backgroundColor: '#555', borderColor:'#555'}} onClick={sendButton}>Отправить</button>
          }
          
      </main>
      
    </div>
  );
}

export default Zapros;
