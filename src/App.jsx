import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Description from "./components/Description";

const initial = [
  {
    id: 1,
    title: "明日の予定",
    description: "今日はとても良い日でした。明日も元気に過ごしたいです",
    edit: false,
    category: '仕事',
  },
];

let nextId = 1;
const App = () => {
  const [memos, setMemos] = useState(() => {
    const saveMemos = localStorage.getItem("memos");
    return saveMemos ? JSON.parse(saveMemos) : initial
  });
  const [text, setText] = useState("");
  const [selectMemoId, setSelectMemoId] = useState(1);
  const [filterTitleText, setFilterTitleText] = useState('');

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos))
  },[memos])

  const addMemo = (category) => {
    setMemos((pre) => [
      ...pre,
      { id: nextId++, title: text, description: "", edit: false, category: category },
    ]);
    setText("");
  };

  const handleTitleClick = (memoId) => {
    setSelectMemoId(memoId);
  };

  const editMemo = (e, selectMemo) => {
    const updateDescription = e.target.value;
    setMemos((pre) =>
      pre.map((memo) =>
        memo.id === selectMemo.id
          ? { ...memo, description: updateDescription }
          : memo
      )
    );
  };

  const toggleEditClick = (id) => {
    setMemos((pre) =>
      pre.map((memo) =>
        memo.id === id ? { ...memo, edit: !memo.edit } : memo
      )
    );
  };

  const handleDeleteTitleClick = (memoId) => {
    setMemos((pre) => pre.filter((memo) => memo.id !== memoId));
  };

  const selectMemo = memos.find((memo) => memo.id === selectMemoId);
  const filterMemos = memos.filter((memo) => memo.title.toLowerCase().includes(filterTitleText));

  return (
    <>
      <div className="container mx-auto px-4">
        <header className="mt-8">
          <h1 className="text-center text-4xl font-bold text-blue-400">
            簡易メモアプリ
          </h1>
        </header>
        <Navbar text={text} setText={setText} addMemo={addMemo} filter={filterTitleText} setFilter={setFilterTitleText}/>
        <div className="grid grid-cols-16 gap-5 mt-8">
          <Title
            memos={filterMemos}
            handleTitleClick={handleTitleClick}
            handleDeleteTitleClick={handleDeleteTitleClick}
          />
          <Description selectMemo={selectMemo} editMemo={editMemo} toggleEditClick={toggleEditClick} />
        </div>
      </div>
    </>
  );
};

export default App;
