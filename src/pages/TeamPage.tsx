import React from 'react';
import { useLanguage } from '../context/LanguageContext';


const TeamPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-backblack relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 bg-no-repeat bg-center bg-[length:150%_auto] md:bg-cover"
        style={{ backgroundImage: 'url(/weare.svg)' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-8 col-span-3">


             <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 leading-tight animate-slide-up max-w-5xl mx-auto">
              {t.team.titleA}{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {t.team.titleHighlightA}
              </span>
              {' '}{t.team.titleB}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {t.team.titleHighlightB}
              </span>
            </h1>

            {/*
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-300 hover:border-white hover:text-white rounded-lg transition-all duration-200 font-medium">
              {t.team.cta}
            </button>
            */}
          </div>
        </div>


        
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 col-span-6">
            <div className="">
              <p className="text-gray-300 text-lg leading-relaxed italic mb-6 animate-slide-up">
                "{t.team.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-slide-up">
                  <span className="text-white text-xl font-bold">CG</span>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg animate-slide-up">
                    {t.team.member.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-snug animate-slide-up">
                    {t.team.member.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {t.team.skills.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          <div
            className="flex items-center justify-center aspect-square border-2 border-gray-700 rounded-full hover:border-gray-500 transition-all duration-300"
            style={{
              backgroundImage: 'url(/card.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <p className="text-white text-center text-lg px-6">
              {t.team.skills.skill1}
            </p>
          </div>

          <div
            className="flex items-center justify-center aspect-square border-2 border-gray-700 rounded-full hover:border-gray-500 transition-all duration-300"
            style={{
              backgroundImage: 'url(/card.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <p className="text-white text-center text-lg px-6">
              {t.team.skills.skill2}
            </p>
          </div>

          <div
            className="flex items-center justify-center aspect-square border-2 border-gray-700 rounded-full hover:border-gray-500 transition-all duration-300"
            style={{
              backgroundImage: 'url(/card.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <p className="text-white text-center text-lg px-6">
              {t.team.skills.skill3}
            </p>
          </div>

          <div
            className="flex items-center justify-center aspect-square border-2 border-gray-700 rounded-full hover:border-gray-500 transition-all duration-300"
            style={{
              backgroundImage: 'url(/card.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <p className="text-white text-center text-lg px-6">
              {t.team.skills.skill4}
            </p>
          </div>
        </div>
      </div>


      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 animate-slide-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full h-96 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center overflow-hidden">
            <img src="/SomosCleverIT.png" alt="Somos CleverIT" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t.team.about.title}
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t.team.about.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">


          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t.team.boxB.title}
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t.team.boxB.description}
            </p>
          </div>
          <div className="w-full h-96 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center overflow-hidden">
            <img src="/cohesionado.png" alt="Equipo Cohesionado" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </div>

    

    </div>
  );
};

export default TeamPage;
