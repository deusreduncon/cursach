import { useEffect, useState } from "react";
import { changeTrim, deleteTrim, getClaim } from "../../https";

function Admin() {
  const [res, setRes] = useState()

  useEffect(() => {
    getClaim().then(data => setRes(data))
  }, [])

  const changeSelect = (id, value) => {
    changeTrim(id, value).then(() => {
      getClaim().then(data => setRes(data))
    })
  }

  return (
    <div>
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4" style={{ color: '#fff' }}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4" style={{ color: '#fff' }}>Admin</span>
                </a>
                <ul class="nav nav-pills">
                    <li class="nav-item"><button class="nav-link active" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d', color: '#fff' }} onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                    }}>Вернуться</button></li>
                </ul> 
            </header>
          </div>
          <div style={{width: '520px', margin: 'auto'}}>
            <div>
              {res?.map(data => {
                let name = ''
                switch (true) {
                  case data.pick === 1:
                    name = 'Создание landing page'
                    break;
                  case data.pick === 2:
                    name = 'Создание cайта-визитки'
                    break;
                  case data.pick === 3:
                    name = 'Создание корпоративного сайта'
                    break;
                  case data.pick === 4:
                    name = 'Создание интернет-магазина'
                    break;
                  case data.pick === 5:
                    name = 'Создание маркетплейса'
                    break;
                  default:
                    break;
                }
                return (
                  <div style={{display: 'flex', border: '1px solid #ccc', borderRadius: '15px',  marginBottom: '15px', padding: '15px', flexDirection: "column", color:'#fff'}}>
                    <p>id: {data.id}</p>
                    <p>Описание:{data.text}</p>
                    <select value={data.trim} onChange={(e) => changeSelect(data.id, Number(e.target.value))}>
                      <option value={1}>Не завершен</option>
                      <option value={2}>В процессе</option>
                      <option value={3}>Закончен</option>
                    </select>
                    <p>{name}</p>
                    {data.trim === 3 && 
                      <button class="nav-link active" onClick={() => {
                        deleteTrim(data.id).then(() => {
                            getClaim().then(data => setRes(data))
                          })
                        }}
                      >
                        Удалить
                      </button>
                    }
                    
                  </div>
                )
              })}
            </div>
          </div>
    </div>
  );
}

export default Admin;
