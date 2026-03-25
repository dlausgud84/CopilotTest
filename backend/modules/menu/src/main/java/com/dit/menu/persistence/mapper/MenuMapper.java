package com.dit.menu.persistence.mapper;

import com.dit.menu.domain.Menu;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 메뉴 매퍼 인터페이스
 */
@Mapper
public interface MenuMapper {

    List<Menu> selectMenuList();

    Menu selectMenuById(Long menuId);

    void insertMenu(Menu menu);

    void updateMenu(Menu menu);

    void deleteMenu(Long menuId);
}