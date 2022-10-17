# simple-twitter

## 介紹
Simple Twitter是 Alpha Camp 課程的畢業協作專案，採取前後分離的方式，由 2 位前端、2 位後端共同打造，依據指定的設計稿及使用者故事，打造一個簡單版的Twitter。
Demo網址:https://weihung-1010.github.io/simple-twitter-vue/
## 功能
### 一般使用者:
- 使用者登入後，可從前台登入頁面進入網站
- 使用者可以註冊新帳號，設定： account、name、email 和 password
- 使用者能編輯自己的名稱、自我介紹、個人頭像與封面和個人頁橫幅背景
- 使用者可以在設定頁面中，更改name、account、email、password
- 使用者能在首頁瀏覽所有的推文 
- 使用者點擊貼文方塊時，能查看貼文與回覆串
- 使用者能回覆別人的推文
- 使用者能新增推文
- 使用者能對別人的推文按 Like/Unlike
- 使用者能在側邊欄看見，推薦跟隨者排列前 10 的使用者推薦名單

### 管理者:
- 管理者可從專門的後台登入頁面進入網站後台
- 管理者可以瀏覽全站的 Tweet 清單
- 管理者可以單一刪除使用者貼文
- 管理者可以瀏覽站內所有的使用者清單

## 可使用帳號:
- 使用者帳號: user1 密碼: 12345678 （不具有管理者權限，只可登入前台）
- 管理者帳號: root 密碼: 12345678 （具有管理者權限，只可登入後台）

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

  ```bash
  npm install
  ```

4. 安裝完畢後，繼續輸入：

  ```bash
  npm run serve
  ```
  
5. 若看見此行訊息則代表順利運行
  ```bash
   Compiled successfully

   App running at:
  - Local:   http://localhost:8080/
  - Network: http://172.20.10.4:8080/
  ```

6. 接著複製 Local 端網址，貼到瀏覽器，即可進行開發

7. 欲暫停使用

  ```bash
  ctrl + c
  ```
