package com.dit.menu.service;

import com.dit.common.exception.BusinessException;
import com.dit.common.exception.ErrorCode;
import com.dit.menu.domain.Menu;
import com.dit.menu.persistence.mapper.MenuMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 메뉴 서비스 클래스
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MenuService {

    private final MenuMapper menuMapper;

    public List<Menu> getMenuList() {
        return menuMapper.selectMenuList();
    }

    public Menu getMenuById(Long menuId) {
        Menu menu = menuMapper.selectMenuById(menuId);
        if (menu == null) {
            throw new BusinessException(ErrorCode.MENU_NOT_FOUND);
        }
        return menu;
    }

    @Transactional
    public void createMenu(Menu menu) {
        menuMapper.insertMenu(menu);
    }

    @Transactional
    public void updateMenu(Menu menu) {
        menuMapper.updateMenu(menu);
    }

    @Transactional
    public void deleteMenu(Long menuId) {
        menuMapper.deleteMenu(menuId);
    }
}