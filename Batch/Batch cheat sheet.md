# Batch cheat sheet

## echo
```
rem 실행 명령 숨김
echo off

rem 빈 줄 출력
echo.

rem 텍스트 출력
echo ECHO 출력 테스트

rem "%" 문자 출력하려면 "%" 문자 2개 입력한다
echo %%cd%% 현재 디렉토리  : %cd%
echo %%~dp0 BAT 파일 디렉토리 : %~dp0
```

## BAT 파일 디렉토리로 이동
```batch
rem BAT 파일 경로로 이동
cd %~dp0

rem BAT 파일 경로로 이동 (popd 명령 실행하면 이전 디렉토리로 돌아간다)
pushd %~dp0
```

