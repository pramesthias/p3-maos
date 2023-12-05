// http://localhost:3000/login
import Image from "next/image";
import "../globals.css";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/bgw.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* <section className="flex-1 flex items-center justify-center">
          <div className="absolute top-4 left-4">
            <Image
              src="/images/logo.png"
              alt="Maos Logo"
              width={100}
              height={100}
            />
          </div> */}
        {/* <h1 className="text-6x1 text-white font-bold transition-transform transform hover:scale-150 duration-1000 ease-in-out">
          <Image
            src="/images/logo.png"
            alt="Maos Logo"
            width={200}
            height={200}
            className="text-6x1 text-white font-bold transition-transform transform hover:scale-150 duration-1000 ease-in-out"
          />
        </h1> */}
        {/* </section> */}

        <section className="flex-1 flex items-center justify-center md:item-start">
          <div className="p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Maos Logo"
                width={270}
                height={270}
              />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-left text-3xl leading-9 tracking tight text-blue-900">
                Masuk
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  {/* <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label> */}
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    {/* <label className="block text-sm font-medium leading-6 text-gray-900">
                      Kata Sandi
                    </label> */}
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Kata Sandi"
                      type="password"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-900 
                      shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 
                      focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm 
                    leading-6 text-blue-900 shadow-sm focus-visible:outline focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600"
                  >
                    MASUK
                  </button>
                </div>
              </form>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <p>Belum mendaftar?</p>
                <a href="#" className="font-semibold text-blue-900 underline">
                  Daftar
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}