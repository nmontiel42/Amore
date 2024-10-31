import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useNavigate } from 'react-router-dom';

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();

  return (
    <>
      <header className="bg-pink-200 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-3">
          <h1 className="text-3xl text-gradient mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">Amore</h1>
          <div className="flex items-center space-x-4">
            {user.picture ? (
                <img
                  className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
                  src={user.picture}
                  alt="user profile avatar"
                />
              ) : (
                <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-300 bg-gray-200 text-gray-600 font-bold shadow-lg">
                  {user?.given_name?.[0] || 'N'}{user?.family_name?.[0] || 'N'}
                </div>
              )}

            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-800">
                {user?.given_name} {user?.family_name}
              </p>
              <button
                className="text-red-600 hover:underline"
                onClick={logout}
              >
                Sign out
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <p className="text-xl text-center text-gray-700">Woohoo!</p>
          </div>
        </div>
      </main>

      <footer className="bg-pink-200">
        <div className="container mx-auto p-4 text-center">
          <strong className="text-lg text-gray-700">Amore</strong>
          <small className="text-gray-600 block">
            © 2023 Amore, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}
