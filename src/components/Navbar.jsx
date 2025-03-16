import { useState } from "react";

const Navbar = ({ text, setText, addMemo, filter, setFilter }) => {
  const [category, setCategory] = useState('仕事');
  return (
    <div className="flex mt-8 justify-center items-center a space-x-4">
      <div className="">
        <input
          className="border h-10 p-4 rounded-lg"
          type="text"
          placeholder="ここにタイトルを入力"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-400 rounded-lg py-2 px-4"
        onClick={() => addMemo(category)}
      >
        追加
      </button>
      <div className="flex items-center space-x-2">
        <label
          className="text-gray-700 font-semibold"
          htmlFor="category"
          
        >
          カテゴリ
        </label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-2 bg-white text-gray-700 focus:outline-none focus:ring-blue-400"
        >
          <option value="仕事">仕事</option>
          <option value="趣味">趣味</option>
        </select>
      </div>
      <div className="">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border h-10 p-4 rounded-lg"
          type="search"
          placeholder="タイトルを検索"
        />
      </div>
    </div>
  );
};

export default Navbar;
