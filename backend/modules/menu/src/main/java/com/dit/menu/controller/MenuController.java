package com.dit.menu.controller;

import com.dit.common.response.ApiResponse;
import com.dit.menu.domain.Menu;
import com.dit.menu.dto.MenuDto;
import com.dit.menu.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 메뉴 컨트롤러 클래스
 */
@RestController
@RequestMapping("/api/menus")
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @GetMapping
    public ApiResponse<List<Menu>> getMenuList() {
        List<Menu> menus = menuService.getMenuList();
        return ApiResponse.success(menus);
    }

    @GetMapping("/{menuId}")
    public ApiResponse<Menu> getMenuById(@PathVariable Long menuId) {
        Menu menu = menuService.getMenuById(menuId);
        return ApiResponse.success(menu);
    }

    @PostMapping
    public ApiResponse<Void> createMenu(@RequestBody MenuDto menuDto) {
        Menu menu = new Menu();
        // DTO에서 도메인으로 변환 로직
        menu.setMenuName(menuDto.getMenuName());
        menu.setParentMenuId(menuDto.getParentMenuId());
        menu.setSortOrder(menuDto.getSortOrder());
        menu.setIsActive(menuDto.getIsActive());
        menuService.createMenu(menu);
        return ApiResponse.success("메뉴가 생성되었습니다.");
    }

    @PutMapping("/{menuId}")
    public ApiResponse<Void> updateMenu(@PathVariable Long menuId, @RequestBody MenuDto menuDto) {
        Menu menu = new Menu();
        menu.setMenuId(menuId);
        // DTO에서 도메인으로 변환 로직
        menu.setMenuName(menuDto.getMenuName());
        menu.setParentMenuId(menuDto.getParentMenuId());
        menu.setSortOrder(menuDto.getSortOrder());
        menu.setIsActive(menuDto.getIsActive());
        menuService.updateMenu(menu);
        return ApiResponse.success("메뉴가 수정되었습니다.");
    }

    @DeleteMapping("/{menuId}")
    public ApiResponse<Void> deleteMenu(@PathVariable Long menuId) {
        menuService.deleteMenu(menuId);
        return ApiResponse.success("메뉴가 삭제되었습니다.");
    }
}