import React, {useState, useEffect} from 'react'
import './StockTicker.css';
import { getDailyBySymbol } from '../services/StockServices'


const StockTicker = ({ticker}) => {

    
    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [GOOGLDaily, setGOOGLDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [AMZNDaily, setAMZNDaily] = useState([])

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allIBMDaily => {
                const today = allIBMDaily.slice(0, 2)
                setIBMDaily(today)
                
            })
        getDailyBySymbol('AAPL')
            .then(allAAPLDaily => {
                const today = allAAPLDaily.slice(0, 2)
                setAAPLDaily(today)
                
            })
        getDailyBySymbol('GOOGL')
            .then(allGOOGLDaily => {
                const today = allGOOGLDaily.slice(0, 2)
                setGOOGLDaily(today)
                
            })
        getDailyBySymbol('TSLA')
            .then(allTSLADaily => {
                const today = allTSLADaily.slice(0, 2)
                setTSLADaily(today)
                
            })
        getDailyBySymbol('AMZN')
            .then(allAMZNDaily => {
                const today = allAMZNDaily.slice(0, 2)
                setAMZNDaily(today)
                
            })
    }, [])
 
 
 return (
    <div class="hwrap"><div class="hmove">
    <div class="hitem">{ticker}</div>

  </div></div>
  )

}


export default StockTicker