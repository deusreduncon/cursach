import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { changeTrim, getClaimId } from "../../https";


function Claims() {
    const [res, setRes] = useState()
    const [inp, setInp] = useState()

    const { id } = useParams();
    let user = JSON.parse(localStorage.getItem('user')) 
    useEffect(() => {
      getClaimId(id).then((data) => {
        setRes(data)
      })
    }, [])

  let token = localStorage.getItem('token')

  if(!token) {
    window.location.replace('/auth')
  }

  const clickRab = () => {
    changeTrim(id, 2, user.name, inp).then(() => {
      window.location.reload()
    })
  }

  const clickRabTwo = () => {
    changeTrim(id, 3, user.name, inp).then(() => {
      window.location.reload()
    })
  }

  return (
    <div className="container" style={{color: '#fff'}}>
      <h2>Запрос</h2>
      <p>Название: {res && res.name}</p>
      <p>Статус: {res && res.trim === 1 && <>Отложен</>} {res && res.trim === 2 && <>В работе</>} {res && res.trim === 3 && <>Завершен</>}</p>
      <p>Ответсвенный: {res && res.executor}</p>
      <p>Ответ: {res && res.answer}</p>
      {user.role === 2 && res && res.trim === 1 &&
        <div>
          <button class="btn btn-outline-primary me-2" onClick={() => clickRab()}>Взять в работу</button>
        </div>
      }
      {user.role === 2 && res && res.trim === 2 &&
        <div>
          <input
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button class="btn btn-outline-primary me-2" onClick={() => clickRabTwo()}>Отправить</button>
        </div>
      }
    </div>
  );
}

export default Claims;
