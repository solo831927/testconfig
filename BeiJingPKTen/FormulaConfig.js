/**
 * Created by flyloong on 16/6/23.
 */
/**
 * Created by SunT on 16/6/23.
 */
import groom from 'groom'
import Immutable from 'immutable'

import {getTotalZhiXCombinateCnt,getTotalZhiXsimplexCnt,getCombinationCntByInputM,
        getCombinationCntForZu6012,getCombinationCntForZu3020,getCombinationCntForZu1054,
        getCombinationCntFromTemplate,getCombinationCntFor3XZU3,getTotalZu3simplexCnt,
        getCombinationCntForZUXBD,getKeyboardSelectedCnt,getTotalSumCntForDWD,HZKDTemplate,
        getTotalcombinCntForRXFS,getTotalZhiXZHCombinateCnt,getSchemeSelectCnt,
        getRXTotalZhiXsimplexCnt,getRXCombinationCntByInputM,
        getRXCombinationCntForZu6012,getRXCombinationCntForZu1054,getRXCombinationCntFromTemplate,
        getRXCombinationCntFor3XZU3,getRXTotalZu3simplexCnt,
        get11x5ZHIXFSCnt,get11x5ZHIXDSCnt,get11x5DANTUOCnt,
        getQuick3DiffSameDSCnt,getQuick3Same2STDCnt,
} from'../common/NumberCombinationRule'
import {getBonusCoefficient} from'../common/CommonConfig'

const getBonusCoeff = (gameId)=>{
  return getBonusCoefficient('BJPK10', gameId)
}

const updateCombination = (oriItems, index, item)=>{
  oriItems[index].combine = item
  return oriItems
}

const mutexCombination = (maxCount, oriItems, index, item)=>{
  oriItems.map((oriItem, oriIndex)=>{
    if(oriIndex == index){
      if(oriItem.type == 'complex') {
        oriItem.combine = item
      } else {
        if(item.filter(_=>{return _.getIn(['value'])}).size<=maxCount) {
          oriItem.combine = item
        } else {
          const oriSelected = oriItem.combine.filter(_=>{return _.getIn(['value'])})
          const addSelected = item.filter((_,i)=>{return _.getIn(['value']) && !oriItem.combine.getIn([i,'value'])})
          oriItem.combine.map((_,i)=>{
            if(_.getIn(['key'])==oriSelected.getIn([0,'key'])) {
              oriItem.combine = oriItem.combine.setIn([i,'value'],false)
            } else if(_.getIn(['key'])==addSelected.getIn([0,'key'])) {
              oriItem.combine = oriItem.combine.setIn([i,'value'],true)
            }
          })
        }
      }
    } else {
      oriItem.combine.map((_, i)=>{
        if(_.getIn(['value'])){
          const numFilter = item.find(num=>{return _.getIn(['key'])==num.getIn(['key']) && _.getIn(['value'])==num.getIn(['value'])})
          if(numFilter) {
            oriItem.combine = oriItem.combine.setIn([i,'value'],false)
          }
        }
      })
    }
    return oriItem
  })
  return oriItems
}

const formatCombination = (oriItems, index, item)=>{
  if(item.size) {
    const lotteryList = groom(item.getIn([0, 'key']).split(/,|;| |\|/))
    const combine = lotteryList.map(_ => {
      return {
        key: _,
        value : true,
      }
    })
    oriItems[0].combine = Immutable.fromJS(combine)
  } else {
    oriItems[0].combine = Immutable.fromJS([])
  }
  return oriItems
}

// award: 预期奖金额, count: 注数
export default {
  "championRace":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("championRace") || 18.0
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count: getKeyboardSelectedCnt,
    numberGroup: updateCombination,
  },
  "topTowRace":   {
    award: (para)=>{
      const coefficient = getBonusCoeff("topTowRace") || 162.0
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count: get11x5ZHIXFSCnt.bind(this,2),
    numberGroup: updateCombination,
  },
  "topThreeRace":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("topThreeRace") || 1296.0
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count: get11x5ZHIXFSCnt.bind(this,3),
    numberGroup: updateCombination,
  },
  "topFourRace":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("topFourRace") || 9072.0
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count:get11x5ZHIXFSCnt.bind(this,4),
    numberGroup: updateCombination,
  },
  "F5DWD":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("F5DWD") || 18.0
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count:getTotalSumCntForDWD,
    numberGroup: updateCombination,
  },

  "L5DWD":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("L5DWD") || 18.0
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count: getTotalSumCntForDWD,
    numberGroup: updateCombination,
  },
  "F3DXDS":   {
    award: (para)=>{
      const coefficient = getBonusCoeff("F3DXDS") || 3.6
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count:getTotalSumCntForDWD,
    numberGroup: updateCombination,
  },
  "TOP2HZ":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("TOP2HZ") || 40.5
      return (para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count:getKeyboardSelectedCnt,
    numberGroup: updateCombination,
  },
  "TOP3HZ":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("TOP3HZ") || 108
      return (
        para.commission*para.rate*para.unit*coefficient/1800/2).toFixed(3)
    },
    count:getKeyboardSelectedCnt,
    numberGroup: updateCombination,
  },
  "LHD":  {
    award: (para)=>{
      const coefficient = getBonusCoeff("LHD") || 3.6
      return (
        para.commission * para.rate * para.unit* coefficient / 1800 / 2
      ).toFixed(3)
    },
    count:getTotalSumCntForDWD,
    numberGroup: updateCombination,
  },
}
