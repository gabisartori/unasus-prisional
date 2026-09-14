export default {
    whichPattern: (ltiValuePattern) => {
        let pattern = null, test = null
        let patternTwoOptions = /^(navigation|test\((\s*\w+)(,?(\s*\w+\s*))*\)|test\(\d+\))[\s]*\+[\s]*(test\((\s*\w+)(,?(\s*\w+\s*))*\)|test\(\d+\)|navigation)$/
        let patternOneOption = /^(navigation|test\((\s*\w+)(,?(\s*\w+\s*))*\)|test\(\d+\))$/

        test = patternTwoOptions.exec(ltiValuePattern)

        if (test) {
            pattern = 'PATTERN1'
        } else if (!test) {
            test = patternOneOption.exec(ltiValuePattern)

            if (test) {
                if (test[0] == 'navigation') {
                    pattern = 'PATTERN3'
                } else {
                    pattern = 'PATTERN2'
                }
            } else {
                pattern = 'PATTERN3'
            }
        }

        return pattern
    },
    extractArgs: (ltiValue) => {
        let patternOne = /^test\(\d+\)$/.exec(ltiValue)
        let patternTwo = /^test\((\s*\w+)(,?(\s*\w+\s*))*\)$/.exec(ltiValue)
        let dataRegexp = null
        
        let data = {
            pattern: null,
            len: null,
            args: null
        }

        if (patternOne) {
            dataRegexp = ltiValue.match(/\d+/)
            data.pattern = 'PATTERN1'
            data.len = dataRegexp[0]
            data.args = dataRegexp[0]
        } else if (patternTwo) {
            dataRegexp = ltiValue.match(/\w+/g)
            data.pattern = 'PATTERN2'
            data.len = dataRegexp.length - 1
            data.args = dataRegexp.slice(1)
        } 

        return data
    }
}