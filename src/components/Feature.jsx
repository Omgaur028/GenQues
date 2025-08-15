import React from 'react'

const Feature = () => {
    return (<>
    <div className="h-20 w-full bg-gradient-to-r mt-10 from-purple-700 to-blue-400  flex items-center justify-center">
        <span className="font-bold text-4xl text-white text-center">
          Features
        </span>
      </div>
        <div className="flex flex-col items-center px-12 py-1 bg-white">
          <div className="flex flex-col lg:flex-row w-full max-w-6xl mt-12 items-center gap-16">
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">
              <div>
                <img src="https://examin8.com/study/img/examin8/f1_ques.jpeg" alt="Questions" className="w-full object-contain rounded-md shadow-lg mb-5" />
                <img src="https://examin8.com/study/img/examin8/f3_blueprint.jpeg" alt="Blueprints" className="w-full object-contain rounded-md shadow-lg" />
              </div>
              <div>
                <img src="https://examin8.com/study/img/examin8/f2_devices.jpeg" alt="Devices" className="w-full object-contain rounded-md shadow-lg my-5" />
                <img src="https://examin8.com/study/img/examin8/f4_quick.jpeg" alt="Quick" className="w-80% object-contain rounded-md shadow-lg" />
              </div>
            </div>
    
            {/* Description Section */}
            <div className="lg:w-1/2 text-black-900">
              <h2 className="text-3xl md:text-4xl font-bold">Discover how we can help you to evaluate <span className="text-purple-600">students superfast. </span></h2>
              <p className="mt-4 text-base md:text-lg text-black-900 font-normal">
                Examin8 is a complete assessment and learning management solution that helps
                schools and Coaching Institutes create question papers and conduct exams online in minutes.
              </p>
              <ul className="mt-4 space-y-2 text-black-900 text-base md:text-lg font-normal">
                <li>✅ Zero typing effort. We have 7,00,000+ questions.</li>
                <li>✅ Works perfectly on mobile devices as well as PC.</li>
                <li>✅ Prefilled blueprints and up-to-date question bank.</li>
                <li>✅ Creating a paper hardly takes a few minutes.</li>
              </ul>
            </div>
          </div>
        </div></>
      );
}

export default Feature
