import Image from "next/image";

export default function Home() {
  return (
    <main>
    
    <section className="bg-white ">
    <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-red-500 ">Developer Portfolio</p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Joshu
        </h1>

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
    </main>
  );
}
