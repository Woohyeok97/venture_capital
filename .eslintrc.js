module.exports = {
  root: true, // 프로젝트 루트 지정
  env: {
    browser: true, // 브라우저 전역 변수 환경
    node: true, // Node.js 전역 변수 환경
  },
  parser: '@typescript-eslint/parser', // 타입스크립트 코드 파서 지정
  parserOptions: {
    ecmaVersion: 2020, // ECMAScript 버전 설정
    sourceType: 'module', // 모듈 시스템 사용 설정
    project: './tsconfig.json', // 타입스크립트 설정 파일 경로
    tsconfigRootDir: __dirname, // tsconfig 기준 디렉토리
    ecmaFeatures: { jsx: true }, // JSX 지원 활성화
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'prettier',
    'eslint-config-prettier',
  ],

  rules: {
    'react/react-in-jsx-scope': 0, // React 임포트 강제 규칙 비활성화
    'react-hooks/rules-of-hooks': 'error', // 훅 사용 규칙 강제
    'react-hooks/exhaustive-deps': 1, // useEffect 의존성 배열 검사 경고
    '@typescript-eslint/no-explicit-any': 0, // any 타입 사용 허용
    '@typescript-eslint/no-unused-vars': 0, // 사용되지 않은 변수 허용
    '@typescript-eslint/no-var-requires': 0, // require 사용 허용
    'react/no-unknown-property': ['error', { ignore: ['css'] }], // 알 수 없는 JSX 속성 금지(css 속성 예외)
    'no-unsafe-optional-chaining': 0, // 안전하지 않은 옵셔널 체이닝 허용
    'prettier/prettier': 'error', // Prettier 규칙 강제
    'no-unused-vars': 0, // 사용되지 않은 변수 허용
    '@typescript-eslint/indent': 0, // 들여쓰기 규칙 해제
    '@typescript-eslint/no-non-null-assertion': 0, // non-null 단언(!) 허용
    '@typescript-eslint/explicit-function-return-type': 0, // 함수 반환 타입 명시 강제 비활성화
    '@typescript-eslint/no-use-before-define': 0, // 정의 전 변수/함수 사용 허용
    '@typescript-eslint/no-empty-interface': 0, // 빈 인터페이스 허용
    '@typescript-eslint/no-parameter-properties': 0, // 생성자 매개변수 속성 허용
    '@typescript-eslint/no-empty-function': 0, // 빈 함수 허용
    '@typescript-eslint/explicit-module-boundary-types': 0, // 모듈 경계 반환 타입 명시 비활성화
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0, // 옵셔널 체이닝 뒤 non-null 단언 허용
  },

  settings: {
    react: { version: 'detect' }, // React 버전 자동 감지
  },

  ignorePatterns: ['node_modules/', '.next/', 'dist/', 'webpack.*.js'], // ESLint 검사 제외 경로
};
