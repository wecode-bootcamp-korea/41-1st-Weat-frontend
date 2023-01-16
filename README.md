<h1>고기판매 웹페이지 모델링</h1>

</br>

# 개발 기간

- 23.01.02~22.01.13
  </br>

# 개발 인원 및 파트

| 박정은 | 로그인, 회원가입, 주문페이지 | F.E. |
| ------ | ---------------------------- | ---- |
| 배경민 | 가테고리 페이지, 상세 페이지 | P.M. |
| 황선용 | 장바구니, 결제확인 페이지    | F.E. |
| 김지환 | 네브바, 메인페이지           | F.E. |

</br>

| 최민주 |     | P.M. |
| ------ | --- | ---- |
| 박상우 |     | B.E. |

</br>

# TOOLS

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

</br>

# LINK TO 👉🏻 Trello, Notion

<div>
<a href='#'><img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white" /></a>
<a href='#'><img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/></a>
</div>

</br>

# STACK

### F.E.

|                                             JavaScript                                             |                                                 React                                                 |                                                    Sass                                                    |                                                 esLint                                                 |                                                 Prettier                                                 |
| :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |

### B.E.

|                                             JavaScript                                             |                                                Nodejs                                                 |                                                 MySql                                                 |                                                  Rest                                                   |
| :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /> |

</br>

</br>

## 로그인

- 로그인 시 이메일 및 비밀번호 조건을 통한 유효성 검사 구현
- 로그인 시 HTTP 응답으로 담겨오는 JWT를 LocalStorage 저장 로직 구현
- 로그인 실패 시 안내문구 출력
- 로그인 성공 시 Main 페이지로 이동

## 회원가입

- 회원가입 시 인풋 데이터 입력 양식에 따라 오류 발생 시 알림 메세지 출력
- 회원가입 조건이 충족되지 않았을 때, 메세지 출력
- 회원가입 성공 시 Login 페이지로

## 결제 페이지

- fetch를 통해 사용자정보 출력하기
- 장바구니 데이터 출력하고 총합 계산하기
- input에 입력되는 데이터 fetch로 POST하기
- 결제하기 버튼 클릭시, orderId return

</br>

</br>

---

</br>

# 구현 기능 FrontEnd

|     로그인      | <img width=30% src=https://user-images.githubusercontent.com/117628412/210352969-c0388e86-f8b1-417a-ae48-fa3073a3166e.gif> |
| :-------------: | :------------------------------------------------------------------------------------------------------------------------: |
|    회원가입     | <img width=30% src=https://user-images.githubusercontent.com/117628412/210353217-4f7275be-f915-47b5-b31c-cb08660d038a.gif> |
|   네비게이션    |                                                                                                                            |
| 상세페이지 모달 |                                                                                                                            |
|   메인페이지    |                                                                                                                            |
|      검색       |                                                                                                                            |

## References

- 이 프로젝트는 [정육각 공식 홈페이지](https://www.jeongyookgak.com/index)를 참조하여 학습목적으로 만들었습니다.
