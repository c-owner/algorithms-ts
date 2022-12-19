/**
 * @description 2022 X-Mas!
 *
 * Created - 2022.12.
 */
const colors = require('colors')

// 우리 트리를 담당해줄 트리 꾸미기 세트
const X_Mas = {}

// 왼쪽에 너무 딱 붙으면 이상하지 않아요? 지정한 칸 수 만큼 트리를 오른쪽으로 옮깁니다!
X_Mas.padding = 8

// 트리에 장식할 데코와 색상들!
X_Mas._colors = ['RED', 'YELLOW', 'BLUE', 'MAGENTA', 'CYAN', 'WHITE']
X_Mas._decorations = ['o', '*']

/**
 * @description 음.. 여기에 장식을 추가할까?
 * @param {number} percent n/1 확률로 yes!
 * @return {boolean} 컴퓨터가 대답한 결과
 */
X_Mas._thinkAboutAddDerocation = function (percent = 3) {
    return Math.floor(Math.random() * percent) + 1 === 1
}

/**
 * @description 꼭대기에 매달아 둘 별을 생성합니다!
 * @param {number} area 어디에 붙일지 계산하기 위해 사용합니다
 * @return {string} 눈부신 별!
 */
X_Mas._getStar = function (area) {
    let star = ''

    for (let i = 0; i < area + 2 + this.padding; i++) {
        star += ' '
    }

    return star + colors.yellow('★')
}

/**
 * @description 음.. 컴퓨터가 마음에 드는 색과 장식품을 골라줍니다!
 * @return {string} 알록달록 장식품
 */
X_Mas._createDecoration = function () {
    const computersFavoriteColor = this._colors[Math.floor(Math.random() * this._colors.length)]
    const computersFavoriteDecoration = this._decorations[Math.floor(Math.random() * this._decorations.length)]
    return colors[computersFavoriteColor.toLowerCase()](computersFavoriteDecoration)
}

/**
 * @description 멋진 트리를 위해 장식을 추가하여 트리 영역을 채워줍니다!
 * @param {number} width 지금 만들어여 할 영역의 폭
 * @param {number} area 위치를 계산하기 위해 필요합니다
 * @param {number} floor 지금 생성하고 있는 트리는 어느 영역(층)이죠?
 * @return {string} 반짝반짝 트리의 일부분
 */
X_Mas._createTree = function (width, area, floor) {
    let tree = ''
    let maxWidth = area + 1

    for (let i = 0; i < maxWidth - width + (2 - floor) + this.padding; i++) {
        tree += ' '
    }

    for (let i = 0; i < width * 2 + (floor * 2); i++) {
        if (this._thinkAboutAddDerocation(4)) {
            tree += this._createDecoration()
        } else {
            tree += colors.green('"')
        }
    }
    return tree
}

/**
 * @description 트리 아래에는 화분이!
 * @param {number} area 영역을 기준으로 트리 위치를 계산합니다
 * @return {string} 아주 튼튼한 화분
 */
X_Mas._treeOnThePot = function (area) {
    let treeTrunk = ''
    let flowerpot = ''

    for (let i = 0; i < area + 2 + this.padding; i++) {
        treeTrunk += ' '
    }
    treeTrunk += colors.yellow('||') + '\n'

    for (let i = 0; i < area + 1 + this.padding; i++) {
        flowerpot += ' '
    }
    flowerpot += colors.yellow('_||_') + '\n'

    for (let i = 0; i < area + 1 + this.padding; i++) {
        flowerpot += ' '
    }
    flowerpot += colors.yellow('\\__/') + '\n'

    return treeTrunk + flowerpot
}

/**
 * @description 우리가 원하는 높이의 트리를 만들어줍니다!
 * @param {number} height 트리의 높이
 * @param {number} div 트리 영역을 나눗 갯수 (1 ~ 3)
 */
X_Mas.X_masTree = function (height = 15, div = 3) {
    // 트리 높이를 div 갯수만큼 영역 나누기
    const area = parseInt(height / div)

    // 영역을 기준으로 별 생성
    console.log('\n\n' + this._getStar(area))
    for (let areaIndex = div; areaIndex > 0; areaIndex--) {
        for (let i = 0; i <= area - areaIndex + 1; i++) {
            // 영역 별 트리 생성
            console.log(this._createTree(i + 1, area, div - areaIndex))
        }
    }
    // 아래 화분 출력
    console.log(this._treeOnThePot(area))
}

// 우리의 트리를 만들어줘
X_Mas.X_masTree()
