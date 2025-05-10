echo off

cls

echo.
echo README.md 파일을 다시 생성합니다.
echo.
pause

echo.
echo.

rem cmd 파일 경로로 이동
pushd %~dp0

node build_readme.js

echo.
echo.
pause
