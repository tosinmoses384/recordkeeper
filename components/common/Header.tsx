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