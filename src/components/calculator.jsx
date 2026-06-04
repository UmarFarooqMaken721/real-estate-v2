import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

function Calculator() {
  const [homePrice, setHomePrice] = useState(35000000) // Default 3.5 Crore
  const [downPayPct, setDownPayPct] = useState(20)
  const [interestRate, setInterestRate] = useState(16) // Average home loan rate in Pakistan
  const [loanTerm, setLoanTerm] = useState(15) // Common terms are 15-20 years
  
  const [monthlyPI, setMonthlyPI] = useState(0)
  const [monthlyTax, setMonthlyTax] = useState(0)
  const [monthlyInsurance, setMonthlyInsurance] = useState(5000)
  const [totalPayment, setTotalPayment] = useState(0)

  useEffect(() => {
    const downPayment = homePrice * (downPayPct / 100)
    const loanAmount = homePrice - downPayment
    const monthlyRate = (interestRate / 100) / 12
    const totalMonths = loanTerm * 12

    let pi = 0
    if (monthlyRate === 0) {
      pi = loanAmount / totalMonths
    } else {
      pi = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    }

    const tax = (homePrice * 0.01) / 12 // Estimated 1% property tax per year
    const ins = 5000 // Estimated Rs. 5,000/mo insurance fee

    setMonthlyPI(Math.round(pi))
    setMonthlyTax(Math.round(tax))
    setMonthlyInsurance(ins)
    setTotalPayment(Math.round(pi + tax + ins))
  }, [homePrice, downPayPct, interestRate, loanTerm])

  // Donut Chart Calculations
  const radius = 50
  const circ = 2 * Math.PI * radius
  
  const pctPI = totalPayment > 0 ? (monthlyPI / totalPayment) : 0
  const pctTax = totalPayment > 0 ? (monthlyTax / totalPayment) : 0
  const pctIns = totalPayment > 0 ? (monthlyInsurance / totalPayment) : 0

  const dashPI = circ * pctPI
  const dashTax = circ * pctTax
  const dashIns = circ * pctIns

  const offsetPI = 0
  const offsetTax = dashPI
  const offsetIns = dashPI + dashTax

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      const crVal = val / 10000000
      return `Rs. ${crVal % 1 === 0 ? crVal.toFixed(0) : crVal.toFixed(2)} Crore`
    } else if (val >= 100000) {
      const lakhVal = val / 100000
      return `Rs. ${lakhVal % 1 === 0 ? lakhVal.toFixed(0) : lakhVal.toFixed(2)} Lakh`
    } else {
      return `Rs. ${val.toLocaleString('en-PK')}`
    }
  }

  return (
    <div className="bg-luxury-bg text-white py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden" id="Calculator">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-luxury-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10 max-w-5xl">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-bold tracking-widest text-luxury-accent uppercase mb-3">Finance Tools</h2>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            Financing <span className="text-gradient-gold font-light">Estimator</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-accent to-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-md mx-auto text-sm sm:text-base font-light">
            Plan your investment. Adjust home valuations, loan terms, and interest factors to preview your estimated monthly payouts in PKR.
          </p>
        </motion.div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-luxury-card border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Home Price */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Property Valuation</span>
                  <span className="text-lg font-bold text-luxury-accent">{formatCurrency(homePrice)}</span>
                </div>
                <input 
                  type="range" 
                  min="5000000" 
                  max="150000000" 
                  step="500000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-luxury-accent"
                />
              </div>

              {/* Down Payment Pct */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Down Payment ({downPayPct}%)</span>
                  <span className="text-sm font-semibold text-gray-400">
                    {formatCurrency(homePrice * (downPayPct / 100))}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="60" 
                  step="1"
                  value={downPayPct}
                  onChange={(e) => setDownPayPct(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-luxury-accent"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Annual Interest Rate (KIBOR + Margin)</span>
                  <span className="text-lg font-bold text-luxury-accent">{interestRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="8" 
                  max="24" 
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-luxury-accent"
                />
              </div>

              {/* Loan Term */}
              <div>
                <span className="block text-sm font-medium text-gray-300 mb-3">Amortization Period</span>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setLoanTerm(15)}
                    className={`py-3 rounded-xl font-semibold uppercase tracking-wider text-xs border transition-all cursor-pointer ${
                      loanTerm === 15 
                        ? 'bg-gradient-to-r from-luxury-accent to-amber-500 text-black border-transparent shadow shadow-luxury-glow'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    15 Years
                  </button>
                  <button 
                    onClick={() => setLoanTerm(20)}
                    className={`py-3 rounded-xl font-semibold uppercase tracking-wider text-xs border transition-all cursor-pointer ${
                      loanTerm === 20 
                        ? 'bg-gradient-to-r from-luxury-accent to-amber-500 text-black border-transparent shadow shadow-luxury-glow'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    20 Years
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span>* Includes Property Tax (estimated at 1.0%)</span>
              <span>* Includes Takaful / Insurance (Rs. 5,000/mo)</span>
            </div>
          </motion.div>
          
          {/* Chart / Results Column (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-gradient-to-br from-luxury-card to-slate-900 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-between shadow-2xl relative"
          >
            {/* Top Info */}
            <div className="text-center w-full">
              <h3 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Estimated Payments</h3>
              <p className="text-4xl font-extrabold text-gradient-gold mb-1">{formatCurrency(totalPayment)}</p>
              <p className="text-xs text-gray-400 font-light">Per Month Total</p>
            </div>

            {/* SVG Donut Chart */}
            <div className="relative my-8 flex items-center justify-center">
              <svg width="220" height="220" viewBox="0 0 120 120" className="transform -rotate-90">
                {/* Background circle */}
                <circle cx="60" cy="60" r={radius} fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                
                {/* P&I Circle */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r={radius} 
                  fill="transparent" 
                  stroke="#d4af37" 
                  strokeWidth="10" 
                  strokeDasharray={`${dashPI} ${circ}`} 
                  strokeDashoffset={-offsetPI}
                  className="transition-all duration-500 ease-out"
                />
                
                {/* Taxes Circle */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r={radius} 
                  fill="transparent" 
                  stroke="#3b82f6" 
                  strokeWidth="10" 
                  strokeDasharray={`${dashTax} ${circ}`} 
                  strokeDashoffset={-offsetTax}
                  className="transition-all duration-500 ease-out"
                />

                {/* Insurance Circle */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r={radius} 
                  fill="transparent" 
                  stroke="#10b981" 
                  strokeWidth="10" 
                  strokeDasharray={`${dashIns} ${circ}`} 
                  strokeDashoffset={-offsetIns}
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              
              {/* Inside Chart Text */}
              <div className="absolute text-center">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-gray-400">Principal</span>
                <span className="block text-lg font-bold text-white">{(pctPI * 100).toFixed(0)}%</span>
              </div>
            </div>

            {/* Legend / Detailed breakdown list */}
            <div className="w-full space-y-3">
              {/* P&I */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-luxury-accent"></span>
                  <span className="text-gray-300 font-light">Principal & Interest</span>
                </div>
                <span className="font-semibold text-white">{formatCurrency(monthlyPI)}</span>
              </div>
              
              {/* Taxes */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="text-gray-300 font-light">Estimated Property Tax</span>
                </div>
                <span className="font-semibold text-white">{formatCurrency(monthlyTax)}</span>
              </div>

              {/* Insurance */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-gray-300 font-light">Takaful / Insurance</span>
                </div>
                <span className="font-semibold text-white">{formatCurrency(monthlyInsurance)}</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Calculator
