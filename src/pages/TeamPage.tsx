import React from 'react';
import { useLanguage } from '../context/LanguageContext';


const TeamPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-backblack">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
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

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300">
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


        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
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

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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


    </div>
  );
};

export default TeamPage;
