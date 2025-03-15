
const App = () => {
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
            <input className="border h-10 p-4 rounded-lg" type="text" placeholder="ここにタスクを入力" />
          </div>
          <button className="bg-blue-400 rounded-lg py-2 px-4">
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
            <input className="border h-10 p-4 rounded-lg" type="search" placeholder="タスクを検索" />
          </div>

          
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="border max-h-full col-span-1 flex flex-col p-8 font-semibold bg-gray-100 space-y-4 underline">
            <h2>メモのタイトル</h2>
            <h2>メモのタイトル２</h2>
          </div>
          <div className="border max-h-full col-span-3 p-8 bg-white">
            2
          </div>
        </div>
      </div>
    </>
  )

}


export default App
