import React from 'react'

const Header = () => {
  return (
    <div>
    <div>
      <nav
        className="flex justify-between"
        style={{
          backgroundColor: "#0E0E2C",
          color: "white",
        }}
      >
        <div className="flex flex-wrap items-center justify-between  lg:justify-between mx-auto py-6 w-full px-6 lg:py-7">
         
            <img
              src="/images/choice.svg"
              alt="student teacher"
              style={{ width: "50px" }}
            />
           
          
          <div className="flex">
            <button
              type="button"
              className="flex items-center lg:hidden text-sm md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open main menu</span>
              <span
                className="rounded-full"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "8px 12px",
                }}
              >
                IN
              </span>
            </button>

            {/* <div className="flex items-center md:order-2">
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-4">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Name
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400 pt-2">
                    Name@Kudade.com
                  </span>
                </div>
                <ul className="py-3" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="Profile-individual.html"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Raise Now
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

          </div>

          <div
            className="hidden lg:flex  space-x-8 items-center"
          >
            <div
              style={{ cursor: "pointer" }}
            >
              <button
                type="button"
                className="flex items-center text-sm md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span
                  className="rounded-full"
                  style={{
                    backgroundColor: "white",
                    color: "white",
                    padding: "8px 12px",
                  }}
                >
                  EE
                </span>
                <span className="px-2">Emeka E</span>
                <img className="" src="/images/chevron-down.svg" alt="" />
              </button>
            </div>
          </div>

        </div>
      </nav>
    </div>
  </div>
  )
}

export {Header}