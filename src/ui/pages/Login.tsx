export function Login() {
  return (
    <div className="m-0 p-0">
      <div className="h-12 border-b border-gray-200">
        <img src="logo.png" alt="" className="mt-5 ml-5 h-6" />
      </div>
      <div className="mt-20">
        <p className="text-center text-xl font-bold">ログイン</p>
        <div className="mx-auto mt-4 w-96 rounded border">
          <div className="border-b">
            <div className="mx-auto mt-8 h-10 w-80 rounded border">
              <p className="text-center text-sm font-semibold leading-10">
                <img src="g.jpg" alt="" className="m-2 inline h-4" />
                Googleでログイン
              </p>
            </div>
            <div className="mx-auto mt-4 mb-6 h-10 w-80 rounded border bg-sky-500">
              <p className="text-center text-sm font-semibold leading-10 text-white">
                <img src="twitter.png" alt="" className="m-2 inline h-4" />
                Twitterでログイン
              </p>
            </div>
          </div>
          <div className="border-b">
            <div className="mx-auto w-80">
              <label htmlFor="mail" className="mt-8 block font-semibold">
                メールアドレス または note ID
              </label>
              <input
                type="text"
                placeholder="mail@example.com or note ID"
                id="mail"
                className="mt-2 h-10 w-full rounded"
              />
            </div>
            <div className="mx-auto mt-6 w-80">
              <label htmlFor="password" className="block font-semibold">
                パスワード
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 h-10 w-full rounded"
              />
            </div>
            <div className="mt-6 text-center text-xs">
              <a href="#" className="underline">
                パスワードを忘れた方
              </a>
              <div className="mx-2 inline">/</div>
              <a href="#" className="underline">
                ログインでお困りの方
              </a>
            </div>
            <div className="mx-auto my-4 mt-6 mb-8 w-80 rounded border bg-neutral-200 text-center font-semibold leading-10">
              ログイン
            </div>
          </div>
          <div className="my-6 text-center text-emerald-400">
            <a href="#" className="underline">
              会員登録はこちら
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}