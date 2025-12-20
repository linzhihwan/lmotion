import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome to My App HOME
================================================================
1) VSCODE 다운 및 설치
2) NODE.JS 다운 및 설치 (윈도운 환경변수 PATH추가 NPM *) NPM, NPX 
3) npx.ps1 권한 이슈해결 > 윈도우 powershell "관리자 권한으로 실행" > cmd 에서 "set-executionpolicy remotesigned" YES
or "Set-ExecutionPolicy -Scope CurrentUser RemoteSigned" > A
node -v, npm -v > 통과시 완료

        

================================================================
        
[NPM]
https://nodejs.org → LTS 버전 다운로드 → 설치할 때 아래 옵션 꼭 체크:
✅ Add to PATH 
✅ Automatically install necessary tools
설치 후 다시 확인:

Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

새로운 기능 및 개선 사항에 대 한 최신 PowerShell을 설치 하세요! https://aka.ms/PSWindows

PS C:\Windows\system32> Set-ExecutionPolicy RemoteSigned

실행 규칙 변경
실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행 정책을 변경하면
about_Execution_Policies 도움말 항목(https://go.microsoft.com/fwlink/?LinkID=135170)에 설명된 보안
위험에 노출될 수 있습니다. 실행 정책을 변경하시겠습니까?
[Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)  [S] 일시 중단(S)  [?] 도움말
(기본값은 "N"):Y
PS C:\Windows\system32>

1) npm start >>>>>>>>>>>>>>>
1. npx create-next-app@latest my-app

>> cd my-app   >> npm run build 
>> npm start  or npm run dev

   ▲ Next.js 16.0.10
   - Local:         http://localhost:3000
   - Network:       http://10.229.63.125:3000

2.이제 브라우저에서 http://localhost:3000 열면 React 실행됨.

(서비스 종료)
tasklist | findstr node >> 종료
taskkill /F /IM node.exe

✅ 일반 종료: Ctrl + C
✅ 백그라운드 종료: taskkill /F /IM node.exe
✅ 포트 점유 종료: netstat → taskkill

[GIT]
git clone https://github.com/linzhihwan/lmotion.git

--터미널  git init
lmotion 에서 git init
git push
git branch -M main
git push -u origin main   >> git push (1)
commit > teset2.axk upload
--------------------------------------------
--- 터미널에서 git web 서비스 start
npm start -> 시작
tasklist | findstr node >> 종료
*************************************************
**** 터미널에서 git upload  [add > commit > push 순으로] 
**** 초기 경로를 실제 홈디렉트리로 이동 예) cd my-app
git add .
git commit -m "first commit"
git push
------ 커밋이 있는지 확인 >> git log --oneline  >> 아무것도 없음 커밋없음
--------------------------------------------
--- main으로 통일
git branch -M main
git push -u origin main   >> main 으로 push
--------------------------------------------
-- 현재 브랜치 확인
git branch   >> 보통  main 으로 표시됨.
--------------------------------------------
-- 저장소확인 - 원격 저장소(origin)가 잘못 연결된 경우
git remote -v  >> 저장소 미출력시
[저장소변경]
git remote set-url origin https://github.com/linzhihwan/lmotion.git
--------------------------------------------


      </h1>
    </>
  );
}
