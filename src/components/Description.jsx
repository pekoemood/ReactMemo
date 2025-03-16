const Description = ({ selectMemo, editMemo, toggleEditClick }) => {
  return (
    <div className="border max-h-full col-span-10 p-8 bg-white">
      <div className="flex items-center space-x-4">
        <label htmlFor="">カテゴリを追加</label>
        <input
          className="border h-10 p-4 rounded-lg"
          type="text"
          placeholder="ここにカテゴリを入力"
        />
        <button className="bg-teal-400 rounded-lg py-2 px-4">
          カテゴリを設定
        </button>
        <button
          className="bg-blue-400 rounded-lg py-2 px-4 w-18 hover:bg-blue-500 transform"
          onClick={() => toggleEditClick(selectMemo.id)}
        >
          {selectMemo.edit ? "保存" : "編集"}
        </button>
      </div>
      <div className="mt-8 flex space-x-4 justify-between">
        {selectMemo.edit ? (
          <input
            className="p-2 border max-h-full w-full rounded-lg flex-1 break-words "
            value={selectMemo.description}
            onChange={(e) => editMemo(e, selectMemo)}
          />
        ) : (
          <p>{selectMemo.description || '編集ボタンをクリックしてメモを追加してください'}</p>
        )}
      </div>
    </div>
  );
};

export default Description;
