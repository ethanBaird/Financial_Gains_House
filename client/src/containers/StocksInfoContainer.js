import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import StockTicker from "../components/StockTicker"
import StockChart from "../StocksInfoComponents/StockChart"

const StockInfoContainer = () => {
    
    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [MSFTDaily, setMSFTDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [XOMDaily, setXOMDaily] = useState([])

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allIBMDaily => {
                setIBMDaily(allIBMDaily)  
            })
        getDailyBySymbol('AAPL')
            .then(allAAPLDaily => {
                setAAPLDaily(allAAPLDaily)
                
            })
        getDailyBySymbol('MSFT')
            .then(allMSFTDaily => {
                setMSFTDaily(allMSFTDaily)
                
            })
        getDailyBySymbol('TSLA')
            .then(allTSLADaily => {
                setTSLADaily(allTSLADaily)
                
            })

        getDailyBySymbol('XOM')
            .then(allXOMDaily => {
                setXOMDaily(allXOMDaily)
                
            })
    }, [])
    
   return(
    <>
      <StockTicker/>
      <StockChart 
        IBM={IBMDaily} 
        AAPL={AAPLDaily} 
        MSFT={MSFTDaily}
        TSLA={TSLADaily}
        XOM={XOMDaily} />
    </>
   )
}

export default StockInfoContainer