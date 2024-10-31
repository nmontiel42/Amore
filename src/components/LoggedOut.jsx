import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import '../index.css';

function App() {
  const { login, register } = useKindeAuth();

  return (
    <>
      <header>
        <div className="flex justify-center bg-pink-300">
          <img src="/Untitled_Project-removebg-preview.png" className="h-20" />
        </div>
      </header>

      <main
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/pixelcut-export(2).jpeg')",
        }}
      >
        <div className="flex flex-col items-center space-y-6 w-full max-w-xs px-5">
          <div className="bg-white shadow-lg rounded-xl p-8 w-full border border-pink-500">
            <h1 className="text-xl font-semibold text-center text-gray-700">Welcome to</h1>
            <h1 className="flex justify-center text-4xl text-gradient mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              𝓐𝓶𝓸𝓻𝓮
            </h1>
            <div className="flex flex-col space-y-4">
              <button className="bg-pink-500 text-white rounded-lg py-2 hover:bg-pink-600 transition duration-300" onClick={login}>
                Sign in
              </button>
              <p className="text-center text-gray-500">Or</p>
              <button className="bg-gray-700 text-white rounded-lg py-2 hover:bg-gray-800 transition duration-300" onClick={register}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center bg-pink-300">
        <p className="text-center py-2">© 2024 Amore</p>
      </footer>
    </>
  );
}

export default App;
