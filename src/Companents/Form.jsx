import React from 'react'

function Form({ list, setList, newTitle, setNewTitle }) {



  return (
    <div>
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholer="listye ekle"
        /><br /><br />

        <button
          className='button_style'
          onClick={() => {
            setList([
              ...list,
              { id: Date.now(), baslik: newTitle, complated: false }
            ]);
            setNewTitle("");
          }}>

          Ekle

        </button>


      </div>
    </div>


  )
}

export default Form
