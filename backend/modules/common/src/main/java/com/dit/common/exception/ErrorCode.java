package com.dit.common.exception;

/**
 * 에러 코드 enum
 */
public enum ErrorCode {

    // 일반 에러
    INTERNAL_SERVER_ERROR("서버 내부 오류가 발생했습니다."),
    INVALID_REQUEST("잘못된 요청입니다."),

    // 메뉴 관련 에러
    MENU_NOT_FOUND("메뉴를 찾을 수 없습니다."),
    MENU_ALREADY_EXISTS("이미 존재하는 메뉴입니다.");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}