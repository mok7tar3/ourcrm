function Background() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" data-name="background">
      {/* First gradient circle - top left */}
      <div 
        className="absolute top-[5%] left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] rounded-full opacity-80"
        style={{
          background: '#7DA5F1',
          filter: 'blur(70px)',
        }}
      />
      
      {/* Second gradient circle - bottom right */}
      <div 
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] rounded-full opacity-80"
        style={{
          background: '#7DA5F1',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center relative size-full overflow-hidden" data-name="Home">
      <Background />
    </div>
  );
}