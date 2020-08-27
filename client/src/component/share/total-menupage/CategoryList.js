import React, { useState, createRef } from 'react';
import { Article, Title, ItemList, ItemRow, Item, StyledLink } from 'component/share/total-menupage/TotalMenupageStyle';
import { Link } from 'react-router-dom';

export default function CategoryList({ title, categories }) {
  const categoryRowsRef = [];
  const categoryChildrenByParentIdRef = {};

  // 클릭했을때 자식 카테고리 보여주는 기능
  const handleCategoryParentClick = (categoryParent) => {
    for (const [key, value] of Object.entries(categoryChildrenByParentIdRef)) {
      if (key == categoryParent.id) {
        value.forEach((child) => {
          const currentDisplay = child.current.style.display;
          if (!currentDisplay || currentDisplay === 'none') {
            child.current.style.display = 'flex';
          } else {
            child.current.style.display = 'none';
          }
        });
      } else {
        value.forEach((child) => {
          child.current.style.display = 'none';
        });
      }
    }
  };

  const itemRows = [];
  categories.forEach((category, idx) => {
    categoryChildrenByParentIdRef[category.id] = [];
    if (idx % 2 === 0) {
      itemRows.push([]);
      categoryRowsRef.push(createRef());
    }
    itemRows[itemRows.length - 1].push(category);
  });

  const categoryRows = itemRows.map((itemRow, idx) => (
    <ItemList key={`category-rows-${idx}`} ref={categoryRowsRef[idx]}>
      {itemRow.map((categoryParent) => (
        <Item
          key={`category-parent-${categoryParent.id}`}
          onClick={() => handleCategoryParentClick(categoryParent, idx)}
        >
          {categoryParent.name}
        </Item>
      ))}

      {itemRow.map((categoryParent) => {
        categoryChildrenByParentIdRef[categoryParent.id].push(createRef());
        const categoriesChild = [
          <Item
            isChild={true}
            key={`category-child-show-all`}
            display="none"
            ref={categoryChildrenByParentIdRef[categoryParent.id][0]}
          >
            <StyledLink to={`/category/${categoryParent.id}`}>전체 보기</StyledLink>
          </Item>,
        ];
        categoriesChild.push(
          ...categoryParent.categoriesChild.map((categoryChild, idx) => {
            categoryChildrenByParentIdRef[categoryParent.id].push(createRef());
            return (
              <Item
                isChild={true}
                key={`category-child-${categoryChild.id}`}
                display="none"
                ref={categoryChildrenByParentIdRef[categoryParent.id][idx + 1]}
              >
                <StyledLink to={`category_detail/${categoryChild.id}`}>{categoryChild.name}</StyledLink>
              </Item>
            );
          })
        );
        if (categoriesChild.length % 2 === 1) {
          categoryChildrenByParentIdRef[categoryParent.id].push(createRef());
          const lastIdx = categoryChildrenByParentIdRef[categoryParent.id].length - 1;
          categoriesChild.push(
            <Item
              isChild={true}
              key={`category-child-temp`}
              display="none"
              ref={categoryChildrenByParentIdRef[categoryParent.id][lastIdx]}
            />
          );
        }
        return categoriesChild;
      })}
    </ItemList>
  ));
  return (
    <Article>
      <Title>{title}</Title>
      {categoryRows}
    </Article>
  );
}
