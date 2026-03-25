package com.dit.menu.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 메뉴 도메인 클래스
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {

    private Long menuId;
    private String menuName;
    private Long parentMenuId;
    private Integer sortOrder;
    private Boolean isActive;
    private String creatorId;
    private String createDttm;
    private String modifierId;
    private String modifyDttm;
}