// 액션 함수 정의
const LNB_MENU = "header/LNB_MENU";
const STYLE_MENU = "header/STYLE_MENU";

// 액션 생성 함수 정의
export const funcLnbMenu = () => ({ type : LNB_MENU });
export const funcStyleMenu = () => ({ type : STYLE_MENU });

// 초기값 정의
const initialState = {
    lnbMenu : false, // lnb 메뉴 활성화
    styleMenu : false // 화면 스타일 가이드
};

// 리듀서 함수
export default function header(state = initialState, action){
    switch(action.type){
        case LNB_MENU :
            return {
                ...state,
                lnbMenu : (action.payload ? action.payload : !state.lnbMenu)
            };
        case STYLE_MENU :
            return {
                ...state,
                styleMenu : !state.styleMenu
            };
        default :
            return state;
    }
};