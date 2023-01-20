# blockOdyssey_assignment
BlockOdyssey assignment

## Table of contents

- [Overview](#overview)
  - [Available_Libraries](#available_libraries)
  - [Tasks](#tasks)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### Available_Libraries
- React v17/ v18
- react-query v4
- redux-toolkit

### Tasks 
- Search Result List
  - [ ] After page refresh, the search result should persist
  - [x] The column is in order of [상품번호, 상품명, 브랜드, 상품내용, 가격, 평점, 재고].
  - [x] Display the total amount of data at the top of the list.
  - [x] The maximum length of [상품내용] is 40 characters. If it exceeds the maximum length, you should display the rest of the content using ellipsis ...
- Search
  - [x] Search conditions are the following : [전체, 상품명, 브랜드, 상품내용]
  - [x] Both search condition and keyword must be persisted after the refresh
    query params 사용해서 구현
- Pagination
  - [x] Implement rows per page using a select box. The select box should display [10, 20, 50] options

### Screenshot
<img src="https://user-images.githubusercontent.com/59095793/213556326-07aff302-e7b3-4c1e-b6d4-d161c3bdb666.gif" width=800/>


## My process

### Built with
- javascript
- react v18
- react query v4
