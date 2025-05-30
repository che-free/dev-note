# 윈도우, 오피스 KMS 정품 인증

KMS 정품 인증을 이용하면 정품 제품 키가 없더라도 정품 인증을 받을 수 있다.

이 방법은 다수의 윈도우 라이선스를 보유하고 있는 회사를 위해서 제공하는 방법일 뿐 정품 라이선스 없이 무료로 사용 할 수 있다는 것은 아니다.

**아래 "kms8.msguides.com" 서버를 이용한 KMS 정품 인증은 소프트웨어 불법 복제로 간주되고 라이선스 계약 위반에 해당되므로 임시, 테스트 용도로만 사용해야한다.**


## 윈도우 KMS 정품 인증

###  KMS 클라이언트 제품 키
- 윈도우 11 홈 : TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
- 윈도우 11/10 프로 : W269N-WFGWX-YVC9B-4J6C9-T83GX


###  윈도우 정품 인증
```dos
REM 윈도우 에디션에 맞는 제품 키 입력
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX

REM KMS 인증 서버
slmgr /skms kms8.msguides.com

slmgr /ato
slmgr -xpr
```


## 오피스 KMS 정품 인증

###  KMS 클라이언트 제품 키
- Office 2016 Profesional : XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99
- Office 2019 Profesional : NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP
- Office 2021 Profesional : FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH


###  오피스 2019 정품 인증
```dos
REM 32비트인 경우
cd /d %ProgramFiles(x86)%\Microsoft Office\Office16

REM 64비트인 경우
cd /d %ProgramFiles%\Microsoft Office\Office16

for /f %x in ('dir /b ..\root\Licenses16\ProPlus2019VL*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%x"

cscript ospp.vbs /setprt:1688
cscript ospp.vbs /unpkey:6MWKP >nul
cscript ospp.vbs /inpkey:NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP
cscript ospp.vbs /sethst:kms8.msguides.com
cscript ospp.vbs /act
```


##  참고)
- KMS(키 관리 서비스) 클라이언트 정품 인증 및 제품 키<br>
https://learn.microsoft.com/ko-kr/windows-server/get-started/kms-client-activation-keys?tabs=server2025%2Cwindows1110ltsc%2Cversion1803%2Cwindows81

