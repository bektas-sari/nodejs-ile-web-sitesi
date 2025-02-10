import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ekibimiz"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-lg -z-10" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Hakkımızda</h2>
            <div className="w-20 h-1 bg-blue-500 mb-6" />
            <p className="text-gray-600 mb-6">
              2010 yılından bu yana, işletmelere yenilikçi dijital çözümler sunarak müşterilerimizin başarılarına katkıda bulunuyoruz. Deneyimli ekibimiz ve modern yaklaşımımızla, her projeye özel çözümler üretiyoruz.
            </p>
            <p className="text-gray-600">
              Misyonumuz, müşterilerimizin dijital dönüşüm süreçlerinde güvenilir bir partner olmak ve onların hedeflerine ulaşmalarına yardımcı olmaktır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}