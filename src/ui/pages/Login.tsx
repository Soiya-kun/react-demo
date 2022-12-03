import { Button } from "@/ui/components/atoms/Button";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <div className="h-12 border-b border-gray-200">
        <img src="logo.png" alt="" className="mt-5 ml-5 h-6" />
      </div>
      <div className="mt-20">
        <p className="text-center text-xl font-bold">ログイン</p>
        <div className="mx-auto mt-4 w-96 rounded border">
          <div className="border-b">
            <div className="mx-auto mt-8 h-10 w-80">
              <Button variant="primaryOutlined" className="text-center text-sm font-semibold w-80">
                <img src="g.jpg" alt="" className="m-2 inline h-4" />
                Googleでログイン
              </Button>
            </div>
            <div className="mx-auto mt-4 mb-6 h-10 w-80">
              <Button variant="primary" className="text-center text-sm font-semibold text-white w-80">
                <img src="twitter.png" alt="" className="m-2 inline h-4" />
                Twitterでログイン
              </Button>
            </div>
          </div>
          <div className="flex flex-col border-b">
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
            <div className="mx-auto mt-6 flex text-center text-xs">
              <Link to="#">
                <div className="underline">パスワードを忘れた方</div>
              </Link>
              <div className="mx-2 inline">/</div>
              <a href="#" className="underline">
                ログインでお困りの方
              </a>
            </div>
            <Button variant="primary" className="mx-auto my-6">
              ログイン
            </Button>
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
