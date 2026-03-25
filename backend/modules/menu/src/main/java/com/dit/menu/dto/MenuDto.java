package com.dit.menu.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 메뉴 DTO 클래스
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuDto {

    private Long menuId;
    private String menuName;
    private Long parentMenuId;
    private Integer sortOrder;
    private Boolean isActive;
}