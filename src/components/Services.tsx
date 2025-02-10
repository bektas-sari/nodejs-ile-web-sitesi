import React from 'react';
import { Code, Palette, Globe, Shield, BarChart, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Geliştirme',
    description: 'Modern ve responsive web siteleri geliştiriyoruz.'
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı arayüz tasarımları oluşturuyoruz.'
  },
  {
    icon: <Globe size={32} />,
    title: 'E-Ticaret Çözümleri',
    description: 'Online satış platformları geliştiriyoruz.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Siber Güvenlik',
    description: 'İşletmenizi siber tehditlere karşı koruyoruz.'
  },
  {
    icon: <BarChart size={32} />,
    title: 'SEO Optimizasyonu',
    description: 'Web sitenizi arama motorlarında üst sıralara taşıyoruz.'
  },
  {
    icon: <MessageSquare size={32} />,
    title: 'Sosyal Medya',
    description: 'Etkili sosyal medya yönetimi sağlıyoruz.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}