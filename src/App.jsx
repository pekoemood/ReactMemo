import { useState } from "react"

const initial = [{
  id: 1,
  title: '明日の予定',
  description: '今日はとても良い日でした。明日も元気に過ごしたいです'
}]

let nextId = 1
const App = () => {
  const [ memos, setMemos ] = useState(initial);
  const [ text, setText ] = useState('');
  const [selectMemoId, setSelectMemoId] = useState(null); 

  const addMemo = () => {
    setMemos((pre) => [...pre, {id: nextId++, title: text, description: ''}]);
    setText('');
  }

  const handleTitleClick =(memoId) => {
    setSelectMemoId(memoId);
  }

  const editMemo = (e,selectMemo) => {
    const updateDescription = e.target.value;
    // setMemos((pre) => [...pre, {id: newMemo.id, title: newMemo.title, description: e.target,value} ])
    setMemos((pre) => pre.map((memo) => memo.id === selectMemo.id ? {...memo, description: updateDescription} : memo ))
  }

  const selectMemo = memos.find((memo) => memo.id === selectMemoId);

  return (
    <>
      <div className="container mx-auto px-4">
        <header className="mt-8">
          <h1 className="text-center text-4xl font-bold text-blue-400">
            簡易メモアプリ
          </h1>
        </header>
        <div className="flex mt-8 justify-center items-center a space-x-4">
          <div className="">
            <input className="border h-10 p-4 rounded-lg" type="text" placeholder="ここにタイトルを入力" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <button className="bg-blue-400 rounded-lg py-2 px-4" onClick={addMemo}>
            追加
          </button>
          <div className="flex items-center space-x-2">
            <label className="text-gray-700 font-semibold" htmlFor="category">カテゴリ</label>
            <select name="category" id="category" className="border rounded-lg p-2 bg-white text-gray-700 focus:outline-none focus:ring-blue-400">
              <option value="">仕事</option>
              <option value="">趣味</option>
            </select>
          </div>
          <div className="">
            <input className="border h-10 p-4 rounded-lg" type="search" placeholder="タイトルを検索" />
          </div>

          
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="border max-h-full col-span-1 flex flex-col p-8 font-semibold space-y-4 underline bg-white">
            {memos.map((memo) => (
              <h2 key={memo.id} onClick={() => handleTitleClick(memo.id)}>{memo.title}</h2>
            ))}
          </div>
          <div className="border max-h-full col-span-3 p-8 bg-white">
          <div className="flex items-center space-x-4">
            <label htmlFor="">カテゴリを追加</label>
            <input className="border h-10 p-4 rounded-lg" type="text" placeholder="ここにカテゴリを入力" />
            <button className="bg-teal-400 rounded-lg py-2 px-4">カテゴリを設定</button>
          </div>
          <div className="mt-8">
            {selectMemo && (<input className='border max-h-full w-full' value={selectMemo.description} onChange={(e) => editMemo(e,selectMemo)}/>)}
          </div>

          </div>
        </div>
      </div>
    </>
  )

}


export default App
