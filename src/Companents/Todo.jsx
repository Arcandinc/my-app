import React from 'react'
import { BsPencilFill } from 'react-icons/bs';

function Todo({ list, setList }) {



  return (
    <div className="list"><br />
      {list.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setList(
              list.map(el =>
                el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi } : el
              )
            );
          }}
          className={item.tamamlandi ? "check" : ""}>
          {item.baslik} <BsPencilFill />
        </div>
      ))}
    </div>
  )
}

export default Todo
