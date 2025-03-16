import { useState } from "react";

const Title = ({ memos, handleTitleClick, handleDeleteTitleClick }) => {
  const [categoryFilter, setCategory] = useState("");

  const filterMemos = categoryFilter && categoryFilter !== 'カテゴリ'
    ? memos.filter((memo) => memo.category === categoryFilter)
    : memos;

  return (
    <div className="col-span-6">
      <table className="min-w-full table-auto">
        <caption className="text-xl font-bold mb-4">タイトル一覧</caption>
        <thead>
          <tr>
            <th className="px-4 py-2 text-left" scope="col">
              タイトル
            </th>
            <th className="px-4 py-2 text-left" scope="col">
              <select
                value={categoryFilter}
                onChange={(e) => setCategory(e.target.value)}
                name="categoryFilter"
                id="categoryFilter"
              >
                <option value="カテゴリ">カテゴリ</option>
                <option value="仕事">仕事</option>
                <option value="趣味">趣味</option>
              </select>
            </th>
            <th className="px-4 py-2 text-left" scope="col">
              アクション
            </th>
          </tr>
        </thead>
        <tbody>
          {filterMemos.length === 0 ? (
            <tr><td colSpan='3' className="text-center">該当するメモはありません</td></tr>
          ):(
            filterMemos.map((memo) => (
              <tr key={memo.id} className="border-t">
                <td
                  onClick={() => handleTitleClick(memo.id)}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition-all"
                >
                  {memo.title}
                </td>
                <td className="px-4 py-2">{memo.category}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteTitleClick(memo.id)}
                    className="bg-red-400 rounded-lg py-2 px-4 hover:bg-red-500 transform"
                  >
                    削除
                  </button>
                </td>
              </tr>
          ))
          )}
        
        </tbody>
      </table>
    </div>
  );
};

export default Title;
