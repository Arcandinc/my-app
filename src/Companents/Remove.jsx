import React from 'react'

function Remove({list,setList}) {
  return (
    <div>
      <br/>
      <button
        onClick={() =>
          setList(list.filter(item => !item.tamamlandi))
        }
        className='button_style'>
        Tamamlananları Temizle
      </button>
    </div>
  )
}

export default Remove
