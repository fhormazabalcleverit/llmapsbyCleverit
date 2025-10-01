import React from 'react';
import { useLanguage } from '../context/LanguageContext';


const TeamPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-backblack">
     
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
         {/* Titulo */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-8 col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t.team.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.team.description}
            </p>
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-300 hover:border-white hover:text-white rounded-lg transition-all duration-200 font-medium">
              {t.team.cta}
            </button>
          </div>
        </div>


        {/* pensamiento */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 col-span-6">
            <div className="">
              <p className="text-gray-300 text-lg leading-relaxed italic mb-6">
                "{t.team.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">CG</span>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {t.team.member.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-snug">
                    {t.team.member.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



       {/* habilidades equipo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {t.team.skills.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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


       {/* Quienes somos */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full h-96 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center">
            <div className="text-gray-500 text-lg">Image placeholder</div>
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
      
      {/* Equipo somos */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t.team.boxB.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.team.boxB.description}
            </p>
          </div>
          <div className="w-full h-96 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center">
            <div className="text-gray-500 text-lg">Image placeholder</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div
          className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-2 border-pink-500/50 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            backgroundImage: 'url(/card.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.team.ctaCard.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.team.ctaCard.description}
            </p>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50">
                {t.team.ctaCard.button}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamPage;
