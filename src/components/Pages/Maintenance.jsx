import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import img1 from '/src/assets/TrendingOrders/img1.png'
import img2 from '/src/assets/TrendingOrders/img2.png'
import img3 from '/src/assets/TrendingOrders/img3.png'


const MaintenancePage = () => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  const maintenanceImages = [
    { name: "pizza", image: img1 },
    { name: "salad", image: img2 },
    { name: "burger", image: img3 },
    { name: "pasta", image: img2 },
    { name: "icecream", image: img3 },
    { name: "crazy", image: img2 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Notification will be sent to: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-8">
      {/* Grid of images */}
      <div className="grid grid-cols-3 gap-8 mb-12 justify-items-center">
        {maintenanceImages.map((item, index) => (
          <div key={index} className="relative w-25 h-25">
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg 
               transition-all duration-300">
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        We are Currently Performing Maintenance
      </h1>

      {/* Message */}
      <p className="text-center text-gray-600 text-lg mb-8">
        We are working hard to improve our services and will be back soon!
      </p>

      {/* Timer */}
      <div className="flex justify-center gap-4 mb-8">
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-800">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <p className="text-sm text-gray-600">Hours</p>
        </div>
        <div className="text-2xl font-bold text-gray-800">:</div>
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-800">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <p className="text-sm text-gray-600">Minutes</p>
        </div>
        <div className="text-2xl font-bold text-gray-800">:</div>
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-800">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <p className="text-sm text-gray-600">Seconds</p>
        </div>
      </div>

      {/* Notification form */}
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          <Bell size={20} />
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default MaintenancePage;