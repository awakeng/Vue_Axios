module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    // "eslint.validate": [ 
    //     "javascript", "html" 
    // ],
    // "plugins": [
    //     "html"
    // ],
    "extends": "eslint:recommended",

    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 2,                                                                        // 미사용 변수 불허
        "quotes": [2, "double"],                                                                    // double quotes                                                        
        "no-undef": 2,                                                                              // 변수 타입 없이 변수 선언 금지
        "no-var" : 2,                                                                               // var 금지
       
        "space-before-function-paren" : [2, "never"],                                               // function 다음 중괄호 띄어쓰기 x
        "comma-spacing" : 2,                                                                        // comma 다음 space 필수
        "brace-style" : 2,                                                                          // 중괄호 같은 라인
        "no-whitespace-before-property" : 2,                                                        // 객체와 속성사이의 공백 허용하지 않음
        "indent" : 2,                                                                               // 들여쓰기 4spaces (tab)
        "space-in-parens" : 2,                                                                      // ( pow(x,y) )
        "no-extra-semi" : 2,                                                                        // 불필요한 세미콜론 허용안함
        "keyword-spacing": [2, {"overrides": {
            "if": {"after": false},
            "for": {"after": false},
            "while": {"after": false}                                                               // if, for, while 후 소괄호 붙여서 사용해야함
        }}],
        "space-infix-ops": 2,                                                                       // 이항연산자 띄어쓰기 필수
        "space-unary-ops": 2,                                                                       // 단항연산자 띄어쓰기 필수
        "operator-linebreak": 2,                                                                    // 연산 중 줄바꿈 불가
        "semi": 2,                                                                                  // 세미콜론 없을 시 에러
        "space-before-blocks": 2,                                                                   // () {} 소괄호 다음 중괄호 띄우기
        "padding-line-between-statements": [2, 
            { blankLine: "always", prev: "block-like", next: "*" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}],  // logical block 사이 한 칸 띄우기
        "spaced-comment" : [2, "always"],                                                           // 주석 한 칸 띄우고 시작
        "camelcase": ["error", {"properties": "always"}] ,                                          // 'myFunction' ??????
        "new-cap" : 2,                                                                              // 생성자 첫글자 대문자
        "no-multi-spaces" : 2                                                                       // 띄어쓰기 한 번만
    }
};