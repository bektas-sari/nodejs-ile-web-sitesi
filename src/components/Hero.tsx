import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const words = ['Yenilikçi', 'Modern', 'Profesyonel'];
  
  useEffect(() => {
    let currentIndex = 0;
    let currentWord = '';
    let isDeleting = false;
    
    const type = () => {
      const word = words[currentIndex];
      
      if (isDeleting) {
        currentWord = word.substring(0, currentWord.length - 1);
      } else {
        currentWord = word.substring(0, currentWord.length + 1);
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentWord;
      }
      
      let typeSpeed = isDeleting ? 100 : 200;
      
      if (!isDeleting && currentWord === word) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentWord === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    type();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span ref={textRef} className="text-blue-400"></span> Çözümler
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          İşletmenizi bir sonraki seviyeye taşıyacak dijital çözümler sunuyoruz.
        </p>
        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Hizmetlerimizi Keşfedin
        </button>
      </div>
    </section>
  );
}