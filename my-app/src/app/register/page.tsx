// http://localhost:3000/register
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import ErrMessage from "@/components/Err";

export type TheResponse<T = {}> = {
  message?: string;
  data?: T;
};

export default function Register() {
  const handleRegister = async (formData: FormData) => {
    "use server"; // => bisa langsung manggil model tapi lewat api u/ scalability
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(username, email, password);

    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const result = (await response.json()) as TheResponse;

    if (!response.ok) {
      return redirect("/register?error=" + result.message);
    }

    return redirect("/login");
  };

  return (
    <div
      style={{
        backgroundImage: "url(/images/3.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col md:flex-row min-h-screen">
        <section className="flex-1 flex items-center justify-center md:item-start">
          <div className="p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
            {/* <div className="flex justify-center mb-6">
              <img
                src="/images/logo.png"
                alt="Maos Logo"
                width={270}
                height={270}
              />
            </div> */}

            <ErrMessage />

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-left text-4xl leading-9 tracking tight text-blue-700">
                Daftar
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action={handleRegister}>
                <div>
                  <div className="mt-2">
                    <input
                      name="username"
                      placeholder="Nama Lengkap"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-900 
                      shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 
                      focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-900 
                      shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 
                      focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      name="password"
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
                    leading-6 text-blue-700 shadow-sm focus-visible:outline focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600"
                  >
                    Daftar
                  </button>
                </div>
              </form>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <p>Sudah mendaftar?</p>
                <Link href="/login" className="font-semibold text-blue-700">
                  Masuk
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
