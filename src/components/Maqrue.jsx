import React from 'react'

const Maqrue = () => {
  return (
    <div >
      <div className="w-96 hidden md:block" style={{ transform: 'none' }}>
      <div
        className=" flex justify-center items-center rfm-marquee-container bg-gray-50 text-black p-2 rounded-full cursor-pointer border border-transparent hover:border hover:border-gray-200"
        style={{
          '--pause-on-hover': 'running',
          '--pause-on-click': 'running',
          '--width': '100%',
          '--transform': 'none',
        }}
      >
        <div
          className="rfm-marquee"
          style={{
            '--play': 'running',
            '--direction': 'normal',
            '--duration': '3.84s',
            '--delay': '0s',
            '--iteration-count': 'infinite',
            '--min-width': '100%',
          }}
        >
          <div className="rfm-initial-child-container">
            <div className="rfm-child" style={{ '--transform': 'none' }}>
              <span className="text-sm flex items-center gap-x-6">
                <div className="relative flex items-center justify-center">
                  <div className="h-3 w-3 absolute bg-green-400 rounded-full mr-2"></div>
                  <div className="h-3 w-3 absolute bg-green-400 rounded-full mr-2 animate-ping"></div>
                </div>
                AVAILABLE FOR FREELANCE WORK
              </span>
            </div>
          </div>
        </div>
        <div
          className="rfm-marquee"
          style={{
            '--play': 'running',
            '--direction': 'normal',
            '--duration': '3.84s',
            '--delay': '0s',
            '--iteration-count': 'infinite',
            '--min-width': '100%',
          }}
        >
          <div className="rfm-child" style={{ '--transform': 'none' }}>
            <span className="text-sm flex items-center gap-x-6">
              <div className="relative flex items-center justify-center">
                <div className="h-3 w-3 absolute bg-green-400 rounded-full mr-2"></div>
                <div className="h-3 w-3 absolute bg-green-400 rounded-full mr-2 animate-ping"></div>
              </div>
              AVAILABLE FOR FREELANCE WORK
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Maqrue
