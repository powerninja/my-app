import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  const { userList, onClickFetchUser, isLoading, isError } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザ取得</button>
      {console.log(isLoading)} {console.log(isError)}
      {/* エラーの場合は、エラーメッセージを表示 */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {/* ローディング中は表示を切り替える */}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id}:${user.name}(${user.age})`}</p>
        ))
      )}
    </div>
  );
};
