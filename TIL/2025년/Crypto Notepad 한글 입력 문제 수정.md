# Crypto Notepad 한글 입력 문제 수정

> 작성일자 : 2025/06/04

## Crypto Notepad
- Crypto Notepad : https://crypto-notepad.github.io/
- GitHub : https://github.com/Crypto-Notepad/Crypto-Notepad/
- Release : https://github.com/Crypto-Notepad/Crypto-Notepad/releases


## Crypto Notepad 한글 입력 문제
- 현상 : 한글로 "대한민국" 입력하면 "대하ㄴㅁㅣㄴ국"이 입력된다.
- 원인
    - Crypto Notepad는 RichTextBox를 사용한다.
    - RichTextBox에서 한글 입력하는 동안 RighTextBox의 TextLength, Lines 속성값을 읽으면 한글 입력 상태(IME Status)가 초기화되어 한글이 잘못 입력된다.<br>
      > 오래전부터 해결되지 않고 이어져온 RighTextBox 한글 IME 이슈이다.
    - Crypto Notepad의 RichTextBox에서 입력하면 TextChanged 이벤트에서 텍스트 길이, 텍스트 라인 수를 상태표시줄에 표시하는 이 과정에서 오류가 발생한다.
- 해결 방법
    - 방법1) Crypto Notepad 설정에서 상태표시줄을 숨김처리하면 한글 입력에 문제 없다.
    - 방법2) TextChanged 이벤트에서 TextLength, Lines 속성 사용하지 않도록 소스를 수정하고 다시 빌드한다.


## Crypto Notepad 소스 수정, 빌드

### 빌드 환경 구성
- 개발 환경 : Microsoft Visual Studio Community 2022 (64-bit)
- 빌드
    - 빌드하면 아래 에러가 발생하는데 Fody 패키지 버전을 최신버전으로 변경하고 빌드하면 사라진다.<br>
        Fody.6.0.6 => Fody.6.9.2
    > "($(MsBuildMajorVersion) < 16)" 조건에서 숫자 대신 ""(으)로 계산되는 "$(MsBuildMajorVersion)"에 대해 숫자 비교를 시도했습니다.



## Crypto Notepad 수정 필요 항목
- 한글 입력 오류
- 영문만 입력 한 줄과 한글이 포함된 줄의 줄간격 다른 문제


