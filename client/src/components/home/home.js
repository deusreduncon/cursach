import { useEffect, useState } from "react";
import { getClaim, getClaimUser } from "../../https";
import { Link } from "react-router-dom";

function Home() {
  const [res, setRes] = useState()

  let user = JSON.parse(localStorage.getItem('user')) 
  console.log(res)
  useEffect(() => {
    if(user.role === 1) {
        getClaimUser(user.id).then((data) => {
          setRes(data.filter(item => item.trim < 3))
        })
    } else {
      getClaim().then((data) => {
          setRes(data.filter(item => item.trim < 3))
        })
    }
    
  }, [])

  let token = localStorage.getItem('token')

  if(!token) {
    window.location.replace('/auth')
  }

  const clickActi = () => {
    if(user.role === 1) {
        getClaimUser(user.id).then((data) => {
          setRes(data.filter(item => item.trim === 3))
        })
    } else {
      getClaim().then((data) => {
          setRes(data.filter(item => item.trim === 3))
        })
    }
  }

  const clickBack = () => {
    if(user.role === 1) {
        getClaimUser(user.id).then((data) => {
          setRes(data.filter(item => item.trim < 3))
        })
    } else {
      getClaim().then((data) => {
          setRes(data.filter(item => item.trim < 3))
        })
    }
  }

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{color: '#fff'}}>Мои запросы</h2>
        <div>
            <button className="btn btn-outline-primary me-2 mb-2" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d', color: '#fff'}} onClick={() => clickBack()}>Активные</button>
            <button className="btn btn-outline-primary me-2 mb-2" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d', color: '#fff'}} onClick={() => clickActi()}>Архив</button>
        </div>
    </div>
        <div>
          {res && res.map((data) => {
            return (
              <div className="card-claim-user" style={{color: '#fff'}}>
                  <div>
                    <h3>{data.name}</h3>
                    <div className="dop-info">
                      <div className="info-do">
                        Статус работы: {data.trim === 1 && <>Отложен</>} {data.trim === 2 && <>В работе</>} {data.trim === 3 && <>Завершен</>}
                      </div>
                      {data.trim === 2 && 
                        <div className="info-do">
                          Ответсвенный: {data.executor}
                        </div>
                      }
                    </div>
                  </div>
                  <Link className="link-zapros" style={{color: '#fff'}} to={`/claim/${data.id}`}>Подробнее</Link>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default Home;
