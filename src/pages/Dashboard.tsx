import { motion } from 'framer-motion';
import { Flame, Activity, Droplet } from 'lucide-react';
import AnimatedRing from '../components/AnimatedRing';
import MacroBar from '../components/MacroBar';

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-brand-charcoal">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Good Morning, Alex!</h1>
            <p className="text-gray-500">Ready to crush your goals today?</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Flame className="text-orange-500" fill="currentColor" />
            <span className="font-bold text-lg">12</span>
            <span className="text-sm text-gray-500">Day Streak</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Calorie Ring Card */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold w-full mb-4">Daily Calories</h2>
            <AnimatedRing 
              percentage={65} 
              value="1,450" 
              label="/ 2,200 kcal" 
              color="#10B981" 
              size={200} 
            />
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div variants={itemVariants} className="grid grid-rows-2 gap-4">
            <div className="bg-brand-charcoal text-white p-6 rounded-3xl flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 font-medium mb-1">Steps Today</h3>
                <p className="text-3xl font-bold">8,432</p>
                <p className="text-sm text-brand-green mt-1">Goal: 10,000</p>
              </div>
              <Activity size={48} className="text-brand-green opacity-80" />
            </div>

            <div className="bg-[#E0F2FE] text-blue-900 p-6 rounded-3xl flex items-center justify-between relative overflow-hidden">
              <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: '40%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-200 opacity-50"
              />
              <div className="relative z-10">
                <h3 className="text-blue-700 font-medium mb-1">Water Intake</h3>
                <p className="text-3xl font-bold">1.5<span className="text-xl">L</span></p>
                <p className="text-sm text-blue-600 mt-1">Goal: 2.5L</p>
              </div>
              <Droplet size={48} className="text-blue-500 relative z-10" fill="currentColor" />
            </div>
          </motion.div>
        </div>

        {/* Macros Card */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-6">Macronutrients</h2>
          <div className="space-y-6">
            <MacroBar label="Protein" current={120} target={160} color="#10B981" />
            <MacroBar label="Carbohydrates" current={180} target={250} color="#F59E0B" />
            <MacroBar label="Fats" current={45} target={70} color="#EF4444" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}