/**
 * Created by flyloong on 16/6/23.
 */
import Immutable from 'immutable'
import keyboard from '../common/KeyboardGroup'

export default {
    "championRace": {
        title: "冠军",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '冠军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },

        ]
    },
    "topTowRace": {
        title: "冠亚",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '冠军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'thousands',
                type: "complex", //single, total
                title: '亚军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
        ]
    },
    "topThreeRace": {
        title: "冠亚季",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '冠军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'thousands',
                type: "complex", //single, total
                title: '亚军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'hundreds',
                type: "complex", //single, total
                title: '季军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
        ]
    },
    "topFourRace": {
        title: "前四名",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '冠军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'thousands',
                type: "complex", //single, total
                title: '亚军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'hundreds',
                type: "complex", //single, total
                title: '季军',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'tens',
                type: "complex", //single, total
                title: '第四名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
        ]
    },

    "F5DWD": {
        title: "前五定位胆",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '前一名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'thousands',
                type: "complex", //single, total
                title: '前二名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'hundreds',
                type: "complex", //single, total
                title: '前三名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'tens',
                type: "complex", //single, total
                title: '前四名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'ones',
                type: "complex", //single, total
                title: '前五名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
        ]
    },
    "L5DWD": {
        title: "后五定位胆",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '前六名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'thousands',
                type: "complex", //single, total
                title: '前七名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'hundreds',
                type: "complex", //single, total
                title: '前八名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'tens',
                type: "complex", //single, total
                title: '前九名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
            {
                key: 'ones',
                type: "complex", //single, total
                title: '前十名',
                combine: Immutable.fromJS(keyboard.numbers_1To10)
            },
        ]
    },

    "F3DXDS": {
        title: "大小单双",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '冠军',
                combine: Immutable.fromJS(keyboard.text_dxoe)
            },
            {
                key: 'thousands',
                type: "complex", //single, total
                title: '亚军',
                combine: Immutable.fromJS(keyboard.text_dxoe)
            },
            {
                key: 'hundreds',
                type: "complex", //single, total
                title: '季军',
                combine: Immutable.fromJS(keyboard.text_dxoe)
            },
        ]
    },
    "TOP2HZ": {
        title: "冠亚和值",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '冠亚和值',
                combine: Immutable.fromJS(keyboard.numbers_sum3to19)
            },
        ]
    },
    "TOP3HZ": {
        title: "冠亚季和值",
        options:[
            {
                key: 'millions',
                type: "complex", //single, total
                title: '冠亚季和值',
                combine: Immutable.fromJS(keyboard.numbers_sum6to27)
            },
        ]
    },
    "LHD": {
        title: "龙虎斗",
        options:[
            {
                key: 'millions',
                type: "total", //single, total
                title: '一VS十',
                combine: Immutable.fromJS(keyboard.text_longhu)
            },
            {
                key: 'thousands',
                type: "total", //single, total
                title: '二VS九',
                combine: Immutable.fromJS(keyboard.text_longhu)
            },
            {
                key: 'hundreds',
                type: "total", //single, total
                title: '三VS八',
                combine: Immutable.fromJS(keyboard.text_longhu)
            },
            {
                key: 'tens',
                type: "total", //single, total
                title: '四VS七',
                combine: Immutable.fromJS(keyboard.text_longhu)
            },
            {
                key: 'ones',
                type: "total", //single, total
                title: '五VS六',
                combine: Immutable.fromJS(keyboard.text_longhu)
            },
        ]
    },

}
