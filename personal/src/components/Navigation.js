const Navigation = () => {
  return (   
    <nav className="absolute nav w-full z-20 top-0 left-0 "> {/*fixed*/}
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="hidden w-full justify-end md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul id="nav" className="flex place-items-end md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0" >
            <li>
              <a href="#" className="rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
            </li>
            <li>
              <a href="#project" className="rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#project" className="rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navigation
