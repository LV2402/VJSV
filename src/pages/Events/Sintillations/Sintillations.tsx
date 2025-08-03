import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
                    {/* Background Image Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                        }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent" />

                    {/* Content Container */}
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-start">
                        <div className="max-w-3xl w-full">
                            {/* Hero Content */}
                            <div className="space-y-6 lg:space-y-8 text-left">
                                <div className="space-y-4">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                        Sintillations
                                    </h1>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                                        <div className="text-green-100">
                                            <p className="text-lg sm:text-xl font-semibold">March 15-17</p>
                                            <p className="text-2xl sm:text-3xl font-bold">2024</p>
                                        </div>

                                        <div className="flex items-center gap-3 text-green-100 hover:text-white transition-colors cursor-pointer group">
                                            <span className="text-sm sm:text-base font-medium">@convergence2024</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-16 sm:w-20 h-1 bg-green-400 rounded-full" />

                                <p className="text-base sm:text-lg text-green-100 max-w-lg leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sint. Nulla, error officiis. A saepe ut nisi aspernatur architecto suscipit blanditiis quos nulla?
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-green-300 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-green-300 rounded-full mt-2 animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* Carousel of Fun Activities */}
                <section className="relative bg-white py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Explore Fun Activities</h2>
                        <div className="flex overflow-x-auto no-scrollbar space-x-8 px-4 py-8 transition-all duration-300">
                            {[
                                { id: "music", title: "Music Night", img: "/images/music.jpg" },
                                { id: "games", title: "Gaming Arena", img: "/images/games.jpg" },
                                { id: "dance", title: "Dance Off", img: "/images/dance.jpg" },
                                { id: "drama", title: "Street Play", img: "/images/drama.jpg" },
                                { id: "fashion", title: "Fashion Walk", img: "/images/fashion.jpg" },
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="w-2/5 flex-shrink-0 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                                >
                                    <div className="bg-green-100 rounded-2xl shadow-lg overflow-hidden h-80">
                                        <img src={item.img} alt={item.title} className="h-64 w-full object-cover" />
                                        <div className="p-4 text-center text-green-900 font-semibold text-lg">{item.title}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="py-20 bg-gray-50" id="events-grid">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-green-800 text-center mb-16">All Fun Activities</h2>
                        
                        {/* Full Width Single Column Layout */}
                        <div className="flex flex-col gap-8 w-full">
                            {[
                                { 
                                    id: "music", 
                                    title: "Music Night", 
                                    img: "/images/music.jpg", 
                                    desc: "Join us for an unforgettable evening filled with live performances from talented local and national artists. Experience the magic of music as various genres come together to create an atmosphere of pure energy and entertainment. From soulful ballads to high-energy rock performances, this night promises something for every music lover.",
                                    time: "7:00 PM - 11:00 PM",
                                    venue: "Main Auditorium"
                                },
                                { 
                                    id: "games", 
                                    title: "Gaming Arena", 
                                    img: "/images/games.jpg", 
                                    desc: "Step into the ultimate gaming experience with state-of-the-art equipment and thrilling competitions. Challenge your friends in multiplayer battles, explore virtual reality worlds, and participate in tournaments featuring the latest games. Whether you're a casual gamer or a competitive esports enthusiast, our gaming arena has something exciting for everyone.",
                                    time: "2:00 PM - 10:00 PM",
                                    venue: "Gaming Zone"
                                },
                                { 
                                    id: "dance", 
                                    title: "Dance Off", 
                                    img: "/images/dance.jpg", 
                                    desc: "Show off your best moves in an electrifying dance competition that celebrates all forms of dance. From hip-hop and breakdancing to contemporary and traditional styles, dancers of all skill levels are welcome to participate. Compete for amazing prizes while enjoying the rhythm and energy of this high-octane event.",
                                    time: "6:00 PM - 9:00 PM",
                                    venue: "Central Stage"
                                },
                                { 
                                    id: "drama", 
                                    title: "Street Play", 
                                    img: "/images/drama.jpg", 
                                    desc: "Experience powerful storytelling through expressive street theatre that tackles important social issues and delivers impactful messages. Our talented performers will take you on an emotional journey through thought-provoking narratives that inspire, educate, and entertain. Witness the raw power of live performance art.",
                                    time: "4:00 PM - 6:00 PM",
                                    venue: "Open Plaza"
                                },
                                { 
                                    id: "fashion", 
                                    title: "Fashion Walk", 
                                    img: "/images/fashion.jpg", 
                                    desc: "Strut down the runway in a spectacular fashion show featuring vibrant themes and creative fashion statements. Showcase your personal style, discover the latest trends, and be part of a glamorous event that celebrates fashion as an art form. From casual wear to haute couture, every style has its moment to shine.",
                                    time: "8:00 PM - 10:00 PM",
                                    venue: "Fashion Runway"
                                }
                            ].map((item, index) => (
                                <div 
                                    key={item.id} 
                                    id={item.id} 
                                    className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl shadow-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-xl w-full"
                                    style={{ minHeight: '350px' }}
                                >
                                    <div className="flex h-full">
                                        {/* Left Side - Image */}
                                        <div className="w-1/2 h-full">
                                            <img 
                                                src={item.img} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover"
                                                style={{ minHeight: '350px' }}
                                            />
                                        </div>

                                        {/* Right Side - Content */}
                                        <div className="w-1/2 p-8 flex flex-col justify-center">
                                            <h3 className="text-4xl font-bold text-green-800 mb-4 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-green-700 text-lg leading-relaxed mb-6">
                                                {item.desc}
                                            </p>
                                            
                                            {/* Event Details */}
                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center gap-3 text-green-600">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="font-semibold">{item.time}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-green-600">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="font-semibold">{item.venue}</span>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg w-fit">
                                                Learn More & Register
                                            </button>
                                        </div>
                                    </div>

                                    {/* Featured Event Badge */}
                                    {index === 2 && (
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                                FEATURED EVENT
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Events;