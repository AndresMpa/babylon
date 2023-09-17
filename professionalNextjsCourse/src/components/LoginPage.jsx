import { useRouter } from 'next/router';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image';

import { useAuth } from '@hooks/useAuth';

import { LockClosedIcon } from '@heroicons/react/solid';

export default function LoginPage() {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const router = useRouter();
  const auth = useAuth();

  const submitHandler = (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    auth
      .singIn(email, password)
      .then(() => {
        router.push('/dashboard');
        Swal.fire({
          title: 'Welcome',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          Swal.mixin({
            toast: true,
            title: 'Error!',
            text: `This user doesn't exist, it migth be an error on your user or password`,
            icon: 'error',
            confirmButtonText: 'Okay',
          });
        } else if (error.resquest) {
          Swal.mixin({
            toast: true,
            title: 'Ups...',
            text: 'Something went wrong, we are experimenting some toubles, try it later',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
        }
      });
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Image
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              className="mx-auto h-12 w-auto"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label html_or="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  id="email-address"
                  autoComplete="email"
                  placeholder="Email address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  ref={emailRef}
                />
              </div>
              <div>
                <label html_or="password" className="sr-only">
                  Password
                </label>
                <input
                  required
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  html_or="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
