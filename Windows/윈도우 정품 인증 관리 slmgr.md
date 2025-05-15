# 윈도우 정품 인증 관리 slmgr.vbs


## 참고
- 볼륨 정품 인증 정보를 얻기 위한 Slmgr.vbs 옵션   
    https://learn.microsoft.com/ko-kr/windows-server/get-started/activation-slmgr-vbs-options


## slmgr 옵션
| 명령 | 설명 |
|------|------|
| slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx | 제품 키 설치 |
| slmgr /dli | 라이선스 정보 표시 |
| slmgr /dlv | 자세한 라이선스 정보 표시 |
| slmgr /xpr | 정품 인증 만료 날짜 표시 |
| slmgr /upk | 설치된 제품 키 삭제 (제품 키가 설치되지 않은 상태로 변경) |
| slmgr /cpky | 레지스트리에서 제품 키 삭제 (제품 키 도난 방지 목적 등) |
| slmgr /ato | 온라인 정품 인증 시도 (KMS 볼륨 라이선스 키 인증 시도) |


<!--
## slmgr 옵션
```dos
rem 제품키 설치
slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx

rem 라이선스 정보 표시
slmgr /dli

rem 자세한 라이선스 정보 표시
slmgr /dlv

rem 정품 인증 만료 날짜 표시
slmgr /xpr

rem 설치된 제품 키 삭제 (제품 키가 설치되지 않은 상태로 변경)
slmgr /upk

rem 레지스트리에서 제품 키 삭제 (제품 키 도난 방지 목적 등)
slmgr /cpky

rem 온라인 정품 인증 시도 (KMS 볼륨 라이선스 키 인증 시도)
slmgr /ato
```
-->


## 기존 인증 제거 후 재설치 방법

### 기존 인증 제거
```dos
rem 1. 레지스트리 키 제거
slmgr /cpky

rem 2. 제품 키 제거
slmgr /upk

rem 3. 제품키 인증 상태 확인
slmgr /dlv
```


### 제품 인증
```dos
rem 1. 제품키 설치
slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx

rem 2. 제품 인증
slmgr /ato

rem 3. 제품키 인증 상태 확인
slmgr /dlv
```


