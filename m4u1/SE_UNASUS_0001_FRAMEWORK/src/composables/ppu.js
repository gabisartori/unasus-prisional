import ltiPattern from './ltiPattern.js'
import { SplitPath } from './splitPath.js'

const PPU = {
    setExternalLink: (object) => {
        unasus.pack.setPersistence('EXTERNAL_LINK', object)
    },
    setDownload: (obj) => {
        let structFile = SplitPath(obj.href)

        unasus.pack.setPersistence('DOWNLOAD', {
            filetype: structFile.filetype,
            filename: structFile.filename,
            current: obj.current,
        })
    },
    setStatusDefault: () => {
        const status = unasus.pack.getStatus()
        
        let object = {
            status: 'attended',
            percentage: 0,
            LTIvalue: 0
        }

        if (!status) {
            unasus.pack.setStatus(object)

            return  object
        } else {
            return status
        }
    },
    setStatusPages: (source) => {
        let statusPages = unasus.pack.getPersistence('STATUS_PAGES')

        if (!statusPages) {
            let pages = {}, status = { total: 0 }

            for (let property in source) {
                pages[property] = []
    
                for (let quantity = 0; quantity < source[property].length; quantity++) {
                    pages[property].push(false)
                    status.total += 1
                }

                status[property] = false
            }

            unasus.pack.setPersistence('STATUS_PAGES', pages)

            return {
                pages: pages,
                status
            }
        } else {
            let status = { total: 0 }

            for (let property in source) {
                status[property] = false
                status.total += source[property].length
            }

            return {
                pages: statusPages,
                status
            }
        }
    },
    setStatusPage: (database, property, index) => {
        if (!database.statusPages[property][index]) {
            const pages = database.statusPages[property]
            const pagesLength = pages.length
            let statusChecked = false

            database.statusPages[property][index] = true

            for (let i = 0; i < pagesLength; i++) {
                if (pages[i]) {
                    statusChecked = true
                } else {
                    statusChecked = false
                    break
                }
            }

            if (statusChecked) { 
                database.statusPagesExtra[property] = true
            }

            unasus.pack.setPersistence('STATUS_PAGES', database.statusPages)
        }
    },
    setPercentage: (database, config) => {
        const total = database.statusPagesExtra.total
        let wasAccesed = 0, percentage = null, pattern = null, lengthTest = null, 
            dataArgs = null


        if (database.status.percentage < 100) {
            for (let property in database.statusPages) {
                for (let i = 0; i < database.statusPages[property].length; i++) {
                    if (database.statusPages[property][i]) {
                        wasAccesed++
                    }
                }
            }
    
            percentage = +((wasAccesed / total) * 100).toFixed(3)
        }

        if (database.status.percentage != 100 && percentage != database.status.percentage) {
            pattern = ltiPattern.whichPattern(config.ltiValue)

            if (config.ltiValue == '' || config.ltiValue == null) {
                database.status.LTIvalue = percentage / 100
            } else {
                if (pattern == 'PATTERN3') {
                    database.status.LTIvalue = percentage / 100
                }
            }
    
            if (pattern == 'PATTERN1') {
                let patternExtracted = /test\((\s*\w+)(,?(\s*\w+\s*))*\)/.exec(config.ltiValue)[0]
                
                dataArgs = ltiPattern.extractArgs(patternExtracted) 
                lengthTest = dataArgs.len
                
                if (dataArgs.pattern == 'PATTERN1') {
                    database.status.LTIvalue = database.test.length / lengthTest / 2 + percentage / 100 / 2
                } else if (dataArgs.pattern == 'PATTERN2') {
                    let LTIPatternTwo = PPU.getLtiPatternTwo(dataArgs, database)

                    database.status.LTIvalue = LTIPatternTwo.lenMadeTest / dataArgs.len / 2 + percentage / 100 / 2
                }
            }

            if (database.status.LTIvalue == 1) {
                database.status.status = 'completed'
            }

            database.status.percentage = parseInt(percentage)
            database.status.LTIvalue = +database.status.LTIvalue.toFixed(3)

            unasus.pack.setStatus(database.status)
        }
    },
    setNavigation: (location) => {
        const navigation = unasus.pack.getPersistence('NAVIGATION') 

        if (!navigation) {
            unasus.pack.setPersistence('NAVIGATION', {
                current: location,
                previous: ''
            })
        } else {
            unasus.pack.setPersistence('NAVIGATION', {
                current: location,
                previous: navigation.current
            })
        }
    },
    setTestDefault: () => {
        const testControl = unasus.pack.getPersistence('TEST_CONTROL')

        if (!testControl) {
            unasus.pack.setPersistence('TEST_CONTROL', [])

            return []
        } else {
            return testControl
        }
    },
    setTestControl: (test, database, config) => {
        let status = true, aux = null, pattern = ltiPattern.whichPattern(config.ltiValue)
        let lengthTest = null, dataArgs = null

        for (let i = 0; i < database.test.length; i++) {
            if (database['test'][i] == test) {
                status = false
                
                break
            }
        }

        if (status) {
            database.test.unshift(test)
            unasus.pack.setPersistence('TEST_CONTROL', database.test)

            if (pattern == 'PATTERN1') {
                let patternExtracted = /test\((\s*\w+)(,?(\s*\w+\s*))*\)/.exec(config.ltiValue)[0]
                dataArgs = ltiPattern.extractArgs(patternExtracted) 
                lengthTest = dataArgs.len

                if (dataArgs.pattern == 'PATTERN1') {
                    database.status.LTIvalue = database.test.length / lengthTest / 2 + database.status.percentage / 100 / 2
                } else if (dataArgs.pattern == 'PATTERN2') {
                    let LTIPatternTwo = null
                    let testIsValied = PPU.testIsValied(test, dataArgs)

                    if (testIsValied) {
                        LTIPatternTwo = PPU.getLtiPatternTwo(dataArgs, database)
                        database.status.LTIvalue = LTIPatternTwo.lenMadeTest / dataArgs.len / 2 + database.status.percentage / 100 / 2
                    }
                }
            }

            if (pattern == 'PATTERN2') {
                dataArgs = ltiPattern.extractArgs(config.ltiValue)
                lengthTest = dataArgs.len

                if (dataArgs.pattern == 'PATTERN1') {
                    database.status.LTIvalue = database.test.length / lengthTest
                } else if (dataArgs.pattern == 'PATTERN2') { 
                    let LTIPatternTwo = null
                    let testIsValied = PPU.testIsValied(test, dataArgs)

                    if (testIsValied) {
                        LTIPatternTwo = PPU.getLtiPatternTwo(dataArgs, database)
                        database.status.LTIvalue = LTIPatternTwo.lenMadeTest / dataArgs.len
                    }
                }
            }

            if (pattern == 'PATTERN1' || pattern == 'PATTERN2') {
                if (database.status.LTIvalue == 1) {
                    database.status.status = 'completed'
                }   

                if (database.status.LTIvalue <= 1) {
                    database.status.LTIvalue = +database.status.LTIvalue.toFixed(3)
                    unasus.pack.setStatus(database.status)
                }
            }
        }
    },
    getTestControl: (test, database) => {
        let status = false

        return new Promise((resolve, reject) => {
            for (let i = 0; i < database.length; i++) {
                if (database[i] == test) {
                    status = true

                    break  
                }
            }

            resolve(status)
        })
    },
    getLtiPatternTwo: (dataArgs, database) => {
        let lenMadeTest = 0
        
        for(let x = 0; x < dataArgs.len; x++) {
            for (let y = 0; y < database.test.length; y++) {
                if (dataArgs.args[x] == database.test[y]) {
                    lenMadeTest++

                    continue
                }
            }
        }

        return {
            lenMadeTest,
        }
    },
    testIsValied: (test, dataArgs) => {
        let status = false

        for (let i = 0; i < dataArgs.len; i++) {    
            if (dataArgs.args[i] == test) {
                status = true

                break
            }
        }

        return status
    }
}

export default PPU