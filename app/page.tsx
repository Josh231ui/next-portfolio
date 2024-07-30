import Image from "next/image";

export default function Home() {
  return (
    <main>
    
    <section className="bg-white ">
    <div className="max-w-6xl px-6 py-10 mx-auto">
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-medium text-red-500 ">Developer Portfolio</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
              Joshu
          </h1>
        </div>
       <img className="h-24 w-24 rounded-full" src="https://th.bing.com/th/id/OIG1.LQMBfWNnIMj6w99G5CtZ?pid=ImgGn" alt="" />
      </div>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-red-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-red-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/331077020_546197197486388_5295986802326319660_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=AsshiKb-Q9wQ7kNvgGW4uzX&_nc_ht=scontent.fmnl25-1.fna&oh=00_AYB02sk5XS7xJqHFKc2jatYyf3U1wlCAokarKSb4l74gNg&oe=66AE6485" alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-white">Joshua R. Alipao</p>
                        <p className="text-red-200 ">Full Stack Developer</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">A passionate developer who likes JJBA, I make apps in free time</p>
                    
                </div>
            </div>
        </main>
    </div>
</section>
<section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Experience <br/> and learning</h1>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-red-500 bg-red-100 rounded-xl md:mx-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize ">Github Contributor</h1>

                        <p className="mt-3 text-gray-500 ">
                          Collaborated with students in their project in Java in developing Java Swing applications
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-red-500 bg-red-100 rounded-xl md:mx-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize ">Prifina Developer</h1>

                        <p className="mt-3 text-gray-500 ">
                            Worked in a startup in developing widget application, assigned as a Front End developer creating statistic visualization in Health related widgets
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-red-500 bg-red-100 rounded-xl md:mx-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize ">Midbytes</h1>

                        <p className="mt-3 text-gray-500 ">
                          Work as an intern, Developed application in tracking website activity.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt=""/>
            </div>
        </div>

        <hr className="my-12 border-gray-200 "/>

    </div>
</section>
<section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">Portfolio
        </h1>

        <p className="mt-4 text-center text-gray-500 ">
            Here are my personal projects
        </p>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Best website
                    collections</h2>
                <p className="mt-2 text-lg tracking-wider text-red-500 uppercase ">Website</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Block of Ui kit
                    collections</h2>
                <p className="mt-2 text-lg tracking-wider text-red-500 uppercase ">Ui kit</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Ton’s of mobile mockup
                </h2>
                <p className="mt-2 text-lg tracking-wider text-red-500 uppercase ">Mockups</p>
            </div>
        </div>
    </div>
</section>
<section className="bg-white ">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="font-medium text-red-500 ">Contact me</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Get in touch</h1>

            <p className="mt-3 text-gray-500 ">Our friendly team is always here to chat.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <span className="inline-block p-3 text-red-500 rounded-full bg-red-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                <p className="mt-2 text-gray-500 ">Find me here</p>
                <p className="mt-2 text-red-500 ">joshualipao123@gmail.com</p>
            </div>

            <div>
                <span className="inline-block p-3 text-red-500 rounded-full bg-red-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Philippines</h2>
                <p className="mt-2 text-gray-500 "></p>
                <p className="mt-2 text-red-500 ">Butuan City</p>
            </div>

            <div>
                <span className="inline-block p-3 text-red-500 rounded-full bg-red-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>
                <p className="mt-2 text-gray-500 "></p>
                <p className="mt-2 text-red-500 ">09603159523</p>
            </div>
        </div>
    </div>
</section>
<footer className="bg-white border-t ">
    <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-sm text-gray-600 ">© Copyright 2024. All Rights Reserved.</p>

        <div className="flex -mx-2">
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 " aria-label="Reddit">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                    </path>
                </svg>
            </a>

            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 " aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                    </path>
                </svg>
            </a>

            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 " aria-label="Github">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</footer>
    </main>
  );
}

