export const App = () => {
  return (
    <main className="gradient-bg leading-relaxed tracking-wide flex flex-col">
    <div className="container mx-auto h-screen pt-20">
      <div className="text-center px-3 lg:px-0">
        <h1
          className="my-3 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
        >
          react-limiter demo
        </h1>
        <p
          className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
        >
          Sub-hero message, not too long and not too short. Make it just right!
        </p>

        <a
          href="#"
          className="gradient-btn mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
        >
          GitHub repo
        </a>
        <a
          href="#"
          className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >Create a new fork</a
        >
      </div>

      <div className="flex items-center w-full mx-auto content-end">
        <div
          className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
        />
      </div>
    </div>

    <footer />
    </main>
  );
}
