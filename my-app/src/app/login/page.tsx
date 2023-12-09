// http://localhost:3000/login
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { TheResponse } from "../register/page";
import ErrMessage from "@/components/Err";
import { SubmitButton } from "@/components/SubButton";

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    const response = await fetch(process.env.THE_URL + "/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const result = (await response.json()) as TheResponse<{
      accessToken: string;
    }>;
    console.log(result);

    if (!response.ok) {
      return redirect("/login?error=" + result.message);
    }

    if (result.data)
      cookies().set("Authorization", `Bearer ${result.data.accessToken}`);

    return redirect("/");
  };

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
              <h2 className="mt-10 text-left text-3xl leading-9 tracking tight text-blue-900">
                Masuk
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action={handleLogin}>
                <div>
                  <div className="mt-2">
                    <input
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between"></div>
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
                  {/* <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm 
                    leading-6 text-blue-900 shadow-sm focus-visible:outline focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600"
                  >
                    MASUK
                  </button> */}
                  <SubmitButton />
                </div>
              </form>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <p>Belum mendaftar?</p>
                <Link
                  href="/register"
                  className="font-semibold text-blue-900 underline hover:text-blue-500"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
