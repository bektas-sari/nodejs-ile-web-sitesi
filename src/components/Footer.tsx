import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Şirketimiz</h3>
            <p className="text-gray-400">
              Modern ve yenilikçi çözümlerle işletmenizi geleceğe taşıyoruz.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {['Gizlilik Politikası', 'Kullanım Şartları', 'SSS'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <address className="text-gray-400 not-italic">
              İstanbul, Türkiye<br />
              info@sirketiniz.com<br />
              +90 (212) 555 0123
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Şirketiniz. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}